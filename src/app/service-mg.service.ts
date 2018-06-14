import { UserData } from './user-data';
import { ServiceObj, ServiceList } from './service-data';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import {
  InputOption, CheckboxOption, BaseSettingOption,
  RadioOption, DropOption, EmailOption,
  SliderBar, SlideToggle } from './service-setting-content';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceMgService {

  delayMs = 1000;
  private cloverUrl = 'api/Clover';
  service_list: ServiceObj[];
  tmpUserData: UserData;

  public strucJson = {
    service_name: 'dashcam',
    domain: {
      required: true,
      placeholder: 'domain name', label: 'DOMAIN',
      key: 'domain', value: 'biotrump.com', type: 'text'
    },
    name: {
      required: false, placeholder: 'name', label: 'NAME',
      key: 'name', value: '', type: 'text'
    },
    email: {
      required: true, placeholder: 'email', label: 'EMAIL',
      key: 'email', value: 'test@mail.com', type: 'email'
    },
    country: {
      required: true, type: 'select',
      key: 'country', label: 'COUNTRY',
      value: 'taiwan',
      options: [
        { title: 'Japan', value: 'japan'},
        { title: 'American', value: 'American' },
        { title: 'Germany', value: 'Germany' },
        { title: 'Taiwan', value: 'taiwan' },
        { title: 'Korea', value: 'Korea' }
      ]
    },
    loading: {
      required: true, type: 'select',
      key: 'loading', label: 'LOADING',
      value: '10',
      options: [
        { title: '10', value: '10' },
        { title: '50', value: '50' },
        { title: '100', value: '100' },
        { title: '500', value: '500' },
        { title: '1000', value: '1000' }
      ]
    },
    autobackup: {
      value: true,
      key: 'autobackup', label: 'AUTO BACKUP', type: 'checkbox',
      required: false
    },
    checkbox1: {
      value: false,
      key: 'checkbox1', label: 'CHECKBOX 1', type: 'checkbox',
      required: true
    },
    radio1: {
      type: 'radio',
      key: 'radio1', label: 'RADIO1', value: 'opt2',
      options: [
        { title: 'R1-opt1', value: 'opt1' },
        { title: 'R1-opt2', value: 'opt2' },
        { title: 'R1-opt3', value: 'opt3' }
      ]
    },
    radio2: {
      type: 'radio',
      key: 'radio2', label: 'RADIO2', value: 'opt2',
      options: [
        { title: 'R2-opt1', value: 'opt1' },
        { title: 'R2-opt2', value: 'opt2' },
        { title: 'R2-opt3', value: 'opt3' }
      ]
    },
    slider1: {
      type: 'sliderbar',
      key: 'slider1', label: 'SLIDER1', min: 1, max: 100,
      value: 0
    },
    slider2: {
      type: 'sliderbar',
      key: 'slider2', label: 'SLIDER2', min: 1, max: 5000,
      value: 4000
    },
    slider3: {
      type: 'slidetoggle',
      key: 'slider3', label: 'SLIDER3', value: false
    },
    slider4: {
      type: 'slidetoggle',
      key: 'slider4', label: 'SLIDER4', value: true
    }
  };

  public struc2Json = {
    title: 'babycam',
    phonenumber: {
      name: 'phonenumber', required: true,
      placeholder: '電話號碼', label: 'phonenumber',
      key: 'phonenumber', value: '', type: 'text'
    },
    name: {
      name: 'name', required: false, placeholder: '姓名', label: 'NAME',
      key: 'name', value: '', type: 'text'
    },
    dinner: {
      name: 'dinner', required: true, type: 'select',
      key: 'country', label: '晚餐',
      value: '',
      options: [
        { title: '牛排', value: 'beefstack' },
        { title: '雞肉飯', value: 'chickenrice' },
        { title: '牛肉麵', value: 'beefnodle' },
        { title: '漢堡', value: 'hamburger' },
        { title: '拉麵', value: 'ramen' }
      ]
    },
    price: {
      name: 'price', required: true, type: 'select',
      key: 'price', label: '價錢', value: '',
      options: [
        { title: '100 NT', value: '100' },
        { title: '150 NT', value: '150' },
        { title: '200 NT', value: '200' },
        { title: '500 NT', value: '500' },
        { title: '1000 NT', value: '1000' }
      ]
    },
    location: {
      required: true, type: 'select',
      key: 'location', label: '地區',
      value: '3',
      options: [
        { title: '永和', value: '1' },
        { title: '中和', value: '2' },
        { title: '文山區', value: '3' },
        { title: '信義區', value: '4' },
        { title: '中山區', value: '5' },
        { title: '東區', value: '6' },
        { title: '大同區', value: '7' },
        { title: '板橋', value: '8' }
      ]
    },
    beer: {
      name: 'beer', value: false,
      key: 'beer', label: '啤酒', type: 'checkbox'
    },
    tea: {
      name: 'tea', value: false,
      key: 'tea', label: '茶', type: 'checkbox'
    },
    soda: {
      name: 'soda', value: false,
      key: 'soda', label: '汽水', type: 'checkbox'
    },
    transfer: {
      name: 'transfer', type: 'radio',
      key: 'transfer', label: '交通工具', value: 'scooter',
      options: [
        { title: '捷運', value: 'mrt' },
        { title: '機車', value: 'scooter' },
        { title: '公車', value: 'bus' },
        { title: '汽車', value: 'car' },
        { title: '火車', value: 'train' },
        { title: '直昇機', value: 'helicopter' }
      ]
    }
  };

  constructor(
    private http: HttpClient
  ) {
    const dashcam = new ServiceObj({ name: 'dashcam', title: 'Dash Cam' });
    const babycam = new ServiceObj({ name: 'babycam', title: 'Baby Cam' });
    const ipcam = new ServiceObj({ name: 'ipcam', title: 'IP Cam'});
    this.service_list = [dashcam, babycam, ipcam];
  }

  getServiceList(): Observable<ServiceObj[]> {
    return of(this.service_list).pipe(delay(this.delayMs));
  }

  updateUserService(newData: UserData): Observable<any> {
    console.log(newData);
    return this.http.put(this.cloverUrl, newData, httpOptions).pipe(
      catchError(this.handleError<any>('updateClover'))
    );
  }

  getClover(): Observable<any> {
    return this.http.get<any>(this.cloverUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  getServiceSetting(servName: string): Observable<BaseSettingOption<any>[]> {
    let settingList: BaseSettingOption<any>[] = [];
    if (servName === 'dashcam') {
      settingList = this.formatSetting(this.strucJson);
    } else if (servName === 'babycam') {
      settingList = this.formatSetting(this.struc2Json);
    }
    return of(settingList).pipe(delay(this.delayMs));

  }

  formatSetting(respJson: Object): BaseSettingOption<any>[] {
    const regularSetting: BaseSettingOption<any>[] = [];
    Object.entries(respJson).forEach(([key, value]) => {
      if ( typeof(value) === 'object' && 'type' in value) {
        switch (value['type']) {
          case 'text':
            regularSetting.push(new InputOption(value));
          break;

          case 'select':
            regularSetting.push(new DropOption(value));
          break;

          case 'email':
            regularSetting.push(new EmailOption(value));
          break;

          case 'checkbox':
            regularSetting.push(new CheckboxOption(value));
          break;

          case 'radio':
            regularSetting.push(new RadioOption(value));
          break;

          case 'sliderbar':
            regularSetting.push(new SliderBar(value));
          break;

          case 'slidetoggle':
            regularSetting.push(new SlideToggle(value));
          break;
        }
      }
    });
    return regularSetting;
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
