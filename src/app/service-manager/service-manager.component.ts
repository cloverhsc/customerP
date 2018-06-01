import { ServiceMgService } from './../service-mg.service';
import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-service-manager',
  templateUrl: './service-manager.component.html',
  styleUrls: ['./service-manager.component.css']
})
export class ServiceManagerComponent implements OnInit {

  private el: ElementRef;

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
  }

  dashcam() {
    this.CleanClickEffect();
    let service = <HTMLElement>this.el.nativeElement.querySelector('#dashcam');
    service.classList.add('clicked');
    console.log(`click dashcam button`);
  }

  babycam() {
    this.CleanClickEffect();
    let service = <HTMLElement>this.el.nativeElement.querySelector('#babycam');
    service.classList.add('clicked');
    console.log(`click babycam button`);
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
      (obj) => console.log(obj)
    );
  }
}
