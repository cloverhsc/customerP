import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult,
  MatDatepickerInputEvent } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public account = '';
  public birthday = '';

  constructor() { }

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

}
