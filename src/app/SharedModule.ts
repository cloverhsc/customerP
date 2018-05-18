import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS } from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};

@NgModule ({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW'},
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS}
  ]
})

export class SharedMaterialModule {}
