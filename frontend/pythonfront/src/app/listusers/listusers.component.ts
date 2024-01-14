import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css'],
})
export class ListusersComponent implements OnInit {
  users: any;
  constructor(
    private http: HttpClient,
    private userservice: UserserviceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
    getUsers() {
      this.userservice.getUsers().subscribe(
        (r: any) => {
          this.users = r.users;
          console.log(this.users);
        },
        (err) => {
          console.log(err.message);
        }
      );
    }

  deleteUser(name: any) {
    this.userservice.deleteUser(name).subscribe(
      (r: any) => {
        alert(r.message);
        this.getUsers();
      },
      (err) => {
        alert('Error occured while deleting the account');
      }
    );
  }
}
