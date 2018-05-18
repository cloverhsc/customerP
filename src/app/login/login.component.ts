import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import {
  FormGroup, FormControl,
  FormGroupDirective, NgForm,
  Validators, ValidatorFn
  } from '@angular/forms';


export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl |
      null, form: FormGroupDirective |
        NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

export class SurveryComponent {
  surveyForm: FormGroup;
  EarlyErrorStateMatcher = new EarlyErrorStateMatcher();
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('click submit!');
  }
}
