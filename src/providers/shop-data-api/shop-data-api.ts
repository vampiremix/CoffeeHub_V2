import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ElementRef, ViewChild } from '@angular/core';

/*
  Generated class for the ShopDataApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var google;
@Injectable()
export class ShopDataApiProvider {

  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  dataShop: any = [];

  constructor(public http: Http) {
    console.log('Hello ShopDataApiProvider Provider');
  }
  
  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.latLng = {
      lat: 13.9381232,
      lng: 100.71376
    };

    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: this.latLng
    });

    let request = {
      location: this.latLng,
      radius: '112500',
      types: ['restaurant'],
      keyword: 'coffee'
    };

    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status == 'OK') {
        results.forEach(element => {
          console.log(element);
          // console.log(element.geometry.location.lat() +"         "+ element.geometry.location.lng() );
          this.dataShop.push({
            image: element.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 }),
            name: element.name
          });
          console.log(this.dataShop);
        });
      }
    });
  }

}
