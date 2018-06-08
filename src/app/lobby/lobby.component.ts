import { UserData } from './../user-data';
import { ServiceMgService } from './../service-mg.service';
import { Component, OnInit, ElementRef } from '@angular/core';

import { ServiceList, ServiceObj } from './../service-data';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  isloading = true;
  service_list: ServiceObj[];
  option: string;
  private el: ElementRef;
  newUserFile: UserData;

  constructor(
    private servicemg: ServiceMgService,
    private element: ElementRef
  ) {
    this.el = this.element;
  }

  ngOnInit() {
    this.GetAllService();
    this.getClover();
  }

  GetAllService() {
    this.servicemg.getServiceList().subscribe( (list) => {
      this.service_list = list;
      this.isloading = false;
    });
  }

  onSubmit(services: string[]) {
    console.log(services);
    if (services.length > 0) {
      let tmpUserData: UserData;
      this.servicemg.getClover().subscribe((obj) => {
        tmpUserData = obj;

        services.forEach((srv) => {
          const buyServ0 = this.service_list.find(h => h.name === srv);
          console.log(buyServ0);
          tmpUserData[0].serviceList.push(buyServ0);
          console.log(tmpUserData[0]);
      });

      this.servicemg.updateUserService(tmpUserData[0]).subscribe(
        (a) => console.log(a)
      );
      });
    }
  }

  getClover() {
    this.servicemg.getClover().subscribe(
      (obj) => this.newUserFile = obj[0]
    );
  }

  setService(servName: string) {
    this.CleanClickEffect();
    const service = <HTMLElement>this.el.nativeElement.querySelector(`#${servName}`);
    console.log(service);
    service.classList.add('clicked');
    console.log(`click ${servName} button`);
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
}
