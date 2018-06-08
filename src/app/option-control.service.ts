import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseSettingOption } from './service-setting-content';

@Injectable({
  providedIn: 'root'
})
export class OptionControlService {

  constructor() { }

  // TODO: classify different DOM options element in group FormControl initial setting.
  toFormGroup(options: BaseSettingOption<any>[]) {
    const group: any = {};
    options.forEach( opt => {

      // Input options element:
      if (
        opt.controlType === 'text' || opt.controlType === 'email'
      ) {
        group[opt.key] = opt.required ? new FormControl(opt.value || '', Validators.required)
          : new FormControl(opt.value || '');
      } else if ( opt.controlType === 'checkbox') {
        group[opt.key] = opt.required ? new FormControl(opt['checked'] || '', Validators.required)
          : new FormControl(opt['checked'] || '');
      } else if ( opt.controlType === 'slider' ) {
        group[opt.key] = opt.required ? new FormControl(opt.value || '', Validators.required)
          : new FormControl(opt.value || '');
      } else if ( opt.controlType === 'dropdown') {
        group[opt.key] = opt.required ? new FormControl(opt.value || '', Validators.required)
          : new FormControl(opt.value || '');
      } else if (opt.controlType === 'radio') {
        group[opt.key] = opt.required ? new FormControl(opt.value || '', Validators.required)
          : new FormControl(opt.value || '');
      }

    });

    return new FormGroup(group);
  }
}
