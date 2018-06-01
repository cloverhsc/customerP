import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult,
  MatDatepickerInputEvent } from '@angular/material';
import * as moment from 'moment';

import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public account = '';
  public birthday = '';
  public optnew = '0';
  public optads = '0';

  isLinear: boolean;
  basicFormGroup: FormGroup;

  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
    });
  }

  opened() {
    console.log('開！');
  }

  closed() {
    console.log('關！');
  }

  onSubmit() {
    console.log('submit!');
  }

  logDateChange($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }

  logDateInput($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }

  onSelectChangeNews(opt: HTMLSelectElement) {
    console.log(opt.selected);
    opt.selected ? this.optnew = opt.value : this.optnew = '0';
  }

  onSelectChangeAds(opt: HTMLSelectElement) {
    console.log(opt.selected);
    opt.selected ? this.optads = opt.value : this.optads = '0';
  }

}
