import { Observable } from 'rxjs';
import { ServiceMgService } from './../service-mg.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import {
  FormGroup,
  Validators, FormBuilder } from '@angular/forms';
import { UserData } from './../user-data';
import { BaseSettingOption } from './../service-setting-content';

import { ServiceList } from './../service-data';


@Component({
  selector: 'app-service-manager',
  templateUrl: './service-manager.component.html',
  styleUrls: ['./service-manager.component.css']
})
export class ServiceManagerComponent implements OnInit {

  isloading = true;

  private el: ElementRef;
  newUserFile = new UserData();
  serviceSetForm: FormBuilder;
  settingFile: BaseSettingOption<any>[] = [];

  constructor(
    private element: ElementRef,
    private servMg: ServiceMgService
  ) {
    this.el = this.element;
  }

  ngOnInit() {
    this.servMg.getClover().subscribe(
      (obj) => console.log(obj)
    );
    this.GetAllService();
  }


  setService(servName: string) {
    this.CleanClickEffect();
    let setting: Observable<BaseSettingOption<any>[]>;
    const service = <HTMLElement>this.el.nativeElement.querySelector(`#${servName}`);
    console.log(service);
    service.classList.add('clicked');
    console.log(`click ${servName} button`);
    setting = this.servMg.getServiceSetting(servName);
    setting.subscribe(
      (resp) => this.settingFile = resp
    );
  }

  /**
   * clean clicked style in service list .
   */
  CleanClickEffect() {
    const serviceList = this.el.nativeElement
      .querySelectorAll('mat-expansion-panel mat-list-item');

    serviceList.forEach((ele: HTMLElement) => {
      ele.classList.remove('clicked');
    });
  }

  getUserData() {
    this.servMg.getClover().subscribe(
      (obj) => this.newUserFile = obj[0]
    );
  }

  GetAllService() {
    this.servMg.getServiceList().subscribe( (list) => {
      this.newUserFile.serviceList = list ;
      this.isloading = false;
    });
  }
}
