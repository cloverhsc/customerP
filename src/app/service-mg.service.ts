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
  SliderOption } from './service-setting-content';

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
    title: 'dashcam',
    domain: {
      name: 'domain', required: true,
      placeholder: 'domain name', label: 'DOMAIN',
      controlType: 'text', key: 'domain', value: '',
      type: 'text'
    },
    name: {
      name: 'name', required: false, placeholder: 'name', label: 'NAME',
      controlType: 'text', key: 'name', value: '', type: 'text'
    },
    email: {
      name: 'email', required: true, placeholder: 'email', label: 'EMAIL',
      controlType: 'email', key: 'email', value: '', type: 'email'
    },
    country: {
      name: 'country', required: true, type: 'select',
      controlType: 'dropdown', key: 'country', label: 'COUNTRY',
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
      name: 'loading', required: true, type: 'select',
      controlType: 'dropdown', key: 'loading', label: 'LOADING',
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
      name: 'auto backup', value: 'yes', checked: true,
      key: 'autobackup', label: 'AUTO BACKUP', type: 'checkbox',
      controlType: 'checkbox'
    },
    checkbox1: {
      name: 'checkbox1', value: 'yes', checked: false,
      key: 'checkbox1', label: 'CHECKBOX 1', type: 'checkbox'
    },
    radio1: {
      name: 'radio 1', controlType: 'radio', type: 'radio',
      key: 'radio1', label: 'RADIO1', value: 'opt2',
      options: [
        { title: 'R1-opt1', value: 'opt1' },
        { title: 'R1-opt2', value: 'opt2' },
        { title: 'R1-opt3', value: 'opt3' }
      ]
    },
    radio2: {
      name: 'radio 2', controlType: 'radio', type: 'radio',
      key: 'radio2', label: 'RADIO2', value: 'opt2',
      options: [
        { title: 'R2-opt1', value: 'opt1' },
        { title: 'R2-opt2', value: 'opt2' },
        { title: 'R2-opt3', value: 'opt3' }
      ]
    },
    slider1: {
      name: 'slider 1', controlType: 'slider', type: 'slider',
      key: 'slider1', label: 'SLIDER1', min: '1', max: '100',
      value: '30'
    },
    slider2: {
      name: 'slider 2', controlType: 'slider', type: 'slider',
      key: 'slider2', label: 'SLIDER2', min: '1', max: '5000',
      value: '4000'
    }
  };

  public struc2Json = {
    title: 'babycam',
    phonenumber: {
      name: 'phonenumber', required: true,
      placeholder: '電話號碼', label: 'phonenumber',
      controlType: 'text', key: 'phonenumber', value: '',
      type: 'text'
    },
    name: {
      name: 'name', required: false, placeholder: '姓名', label: 'NAME',
      controlType: 'text', key: 'name', value: '', type: 'text'
    },
    dinner: {
      name: 'dinner', required: true, type: 'select',
      controlType: 'dropdown', key: 'country', label: '晚餐',
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
      controlType: 'dropdown', key: 'price', label: '價錢',
      value: '',
      options: [
        { title: '100 NT', value: '100' },
        { title: '150 NT', value: '150' },
        { title: '200 NT', value: '200' },
        { title: '500 NT', value: '500' },
        { title: '1000 NT', value: '1000' }
      ]
    },
    location: {
      name: 'location', required: true, type: 'select',
      controlType: 'dropdown', key: 'location', label: '地區',
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
      name: 'beer', value: 'yes', checked: false,
      key: 'beer', label: '啤酒', type: 'checkbox'
    },
    tea: {
      name: 'tea', value: 'yes', checked: false,
      key: 'tea', label: '茶', type: 'checkbox'
    },
    soda: {
      name: 'soda', value: 'yes', checked: false,
      key: 'soda', label: '汽水', type: 'checkbox'
    },
    transfer: {
      name: 'transfer', controlType: 'radio', type: 'radio',
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

          case 'slider':
            regularSetting.push(new SliderOption(value));
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
