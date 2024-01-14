import json
from flask import Flask, request, jsonify, make_response
from sqlalchemy import create_engine, text
from flask_cors import CORS, cross_origin

from config import username, hostname, database

app = Flask(__name__)
CORS(app)


db_url = f"mysql+pymysql://{username}@{hostname}/{database}"
db = create_engine(db_url)

@app.route('/api/checkuser', methods=['POST'])
@cross_origin()
def check_user():
    if request.is_json:
        request_data = request.get_json()
        username = request_data.get('user')    
        password = request_data.get('pass')
        query = text("SELECT * FROM users WHERE user = :u AND pass = :p")
        try:
            result = db.execute(query, {'u': username, 'p': password}).first()
            if result:
                response = make_response(jsonify({'message': f'Utilisateur trouvee ( {username} : {password} ).'}), 200)
            else:
                response = make_response(jsonify({'message': 'Mauvais identifiants'}), 401)
        except Exception as e:
            response = make_response(jsonify({'message': 'Erreur du serveur interne'}), 500)

            app.logger.error(f"Error: {e}")
        return response
    else:
        return make_response(jsonify({'message': 'Mauvaise demande'}), 400)


@app.route('/api/adduser', methods=['POST'])
def add_user():
    request_data = request.get_json()
    login = request_data.get('user')
    password = request_data.get('pass')
    
    query = text("INSERT INTO users (user, pass) VALUES (:u, :p)")

    try:
        db.execute(query, {'u': login, 'p': password})
        response = make_response(jsonify({'message': 'Compte créé avec succès!'}), 201)
    except Exception as e:
        app.logger.error(f"Error: {e}")
        response = make_response(jsonify({'message': 'Le nom d\'utilisateur existe déjà ou une erreur s\'est produite'}), 400)  
    return response

@app.route('/api/getusers', methods=['GET'])
@cross_origin()
def get_users():
    query = text("SELECT * FROM users")
    try:
        result = db.execute(query).fetchall()
        if not result:
            response = make_response(jsonify({'message': 'Aucun utilisateur trouvé'}), 404)
        else:
            response = make_response(jsonify({'users': [dict(row) for row in result]}), 200)
    except Exception as e:
        app.logger.error(f"Error: {e}")
        response = make_response(jsonify({'message': 'Erreur du serveur interne'}), 500)
    return response

@app.route('/api/deleteuser', methods=['POST'])
@cross_origin()
def delete_user():
    request_data = request.get_json()
    login = request_data.get('user')
    query = text("DELETE FROM users WHERE user = :u")
    try:
        db.execute(query, {'u': login})
        response = make_response(jsonify({'message': f'Utilisateur supprimé ( {login} )'}), 200)
    except Exception as e:
        app.logger.error(f"Error: {e}")
        response = make_response(jsonify({'message': 'Erreur du serveur interne'}), 500)
    return response


if __name__ == '__main__':
    debug = True
    app.run(host="0.0.0.0", port=5005, debug=debug)
