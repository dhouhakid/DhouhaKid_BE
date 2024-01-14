import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {}
  
  checkuser(f:any){
    let data = { user: f.lg, pass: f.pwd };
   return this.http.post<any>('http://127.0.0.1:5005/api/checkuser', data);
  }

  adduser(f:any){
    let data = { user: f.lg, pass: f.pwd };
    return this.http.post<any>('http://127.0.0.1:5005/api/adduser',data);
  }
  
  getUsers(){
    return this.http.get<any>('http://127.0.0.1:5005/api/getusers');
  }

  deleteUser(name:any){
    let data = { user: name };
    return this.http.post<any>('http://127.0.0.1:5005/api/deleteuser',data);
  }

}
