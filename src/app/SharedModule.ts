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
  MAT_DATE_FORMATS,
  MatListModule,
  MatMenuModule,
  MatStepperModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule } from '@angular/material';

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
    MatMomentDateModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule
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
    MatMomentDateModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW'},
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS}
  ]
})

export class SharedMaterialModule {}
