import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log('click submit!');
  }
}
