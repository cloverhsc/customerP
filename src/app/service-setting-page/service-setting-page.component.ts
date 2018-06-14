import { BaseSettingOption } from './../service-setting-content';
import {
  FormGroup,
  Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { OptionControlService } from './../option-control.service';

@Component({
  selector: 'app-service-setting-page',
  templateUrl: './service-setting-page.component.html',
  styleUrls: ['./service-setting-page.component.css']
})
export class ServiceSettingPageComponent implements OnInit, OnChanges {

  @Input() setFile: BaseSettingOption<any>[];

  serviceSetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private optionCtrlServ: OptionControlService
  ) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.setFile);
    this.serviceSetForm = this.optionCtrlServ.toFormGroup(this.setFile);
    // this.rebuildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.serviceSetForm = this.optionCtrlServ.toFormGroup(this.setFile);
  }
  createForm() { }

  rebuildForm() {
    // this.serviceSetForm.reset({

    // });
  }

  onSubmit() {
    if (this.serviceSetForm.status.toLocaleLowerCase() === 'valid') {
      // reactive form check valid.
    } else {
      // reactive failed.
    }
    console.log(`Click save button`);
    console.log(this.serviceSetForm.status);
  }

}
