import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,

} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';




@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  addForm: any;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private ls: UserserviceService,
    private router: Router
  ) {

    
  }

  adduser(f: any) {
    this.ls.adduser(f).subscribe(
      (response: any) => {
        alert(response.message);
      },
      (err) => {
        alert('Error occured while adding the account');
      }
    );
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      lg: [''],
      pwd: [''],
    });
  }
}
