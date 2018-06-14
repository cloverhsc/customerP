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
      if (opt.type === 'checkbox' || opt.type === 'slidetoggle') {
        group[opt.key] = opt.required ? new FormControl(opt.value || false, Validators.required)
          : new FormControl(opt.value || false);
      } else {
        group[opt.key] = opt.required ? new FormControl(opt.value || '', Validators.required)
          : new FormControl(opt.value || '');
      }

    });

    return new FormGroup(group);
  }
}
