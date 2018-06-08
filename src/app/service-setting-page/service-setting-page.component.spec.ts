import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSettingPageComponent } from './service-setting-page.component';

describe('ServiceSettingPageComponent', () => {
  let component: ServiceSettingPageComponent;
  let fixture: ComponentFixture<ServiceSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
