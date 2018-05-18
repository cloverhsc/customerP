import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public account = '';

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
}
