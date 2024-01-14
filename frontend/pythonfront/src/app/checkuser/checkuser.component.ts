import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-checkuser',
  templateUrl: './checkuser.component.html',
  styleUrls: ['./checkuser.component.css'],
})
export class Checkusercomponent implements OnInit {
  CheckForm: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder,private router : Router,private ls:UserserviceService) {}

  checkuser(f: any) {
    this.ls.checkuser(f).subscribe(
      (response: any) => {
        alert(JSON.stringify(response.message));
      },
      (err) => {
        alert('Error occured');
      }
    );
  }

  ngOnInit(): void {
    this.CheckForm = this.formBuilder.group({
      lg: [''],
      pwd: [''],
    });
  }
}