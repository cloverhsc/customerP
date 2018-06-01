import { UserData } from './user-data';
import { ServiceObj, ServiceList } from './service-data';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceMgService {

  delayMs = 1000;
  private cloverUrl = 'api/Clover';
  service_list: ServiceList;
  tmpUserData: UserData;

  constructor(
    private http: HttpClient
  ) {
    const dashcam = new ServiceObj({ name: 'dashcam', title: 'Dash Cam' });
    const babycam = new ServiceObj({ name: 'babycam', title: 'Baby Cam' });
    this.service_list = new ServiceList([dashcam, babycam]);
  }

  getServiceList(): Observable<ServiceList> {
    return of(this.service_list).pipe(delay(this.delayMs));
  }

  updateUserService(newData: UserData): Observable<any>{
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
