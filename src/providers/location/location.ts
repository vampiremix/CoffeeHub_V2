import { RouteUrlProvider } from '../route-url/route-url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: Http,
    public geolocation: Geolocation,
    public routeUrlProvider:RouteUrlProvider
  ) {
    console.log('Hello LocationProvider Provider');

  }
  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((data) => {
      return data;
    })
  }

  shopLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.routeUrlProvider.apiUrl + 'api/shops/').map(res => {
        return res.json();
      }).subscribe(data => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    })
  }

}
