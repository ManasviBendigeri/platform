import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:string;
  Password:string;

  constructor() { }

  ngOnInit(): void {
  }
  userLogin(){
    if(this.Username == "Admin" && this.Password == "admin123"){
      console.log("Welcome")
    }
  }

}
