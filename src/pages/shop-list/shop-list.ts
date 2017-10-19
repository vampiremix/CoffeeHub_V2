import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {
  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  dataShop: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
          // console.log(element);
          console.log(element.geometry.location.lat() +"         "+ element.geometry.location.lng() );

          // console.log(element.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 }));

          this.dataShop.push({
            image: element.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 }),
            name: element.name
          });

          // service.getDetails({placeId: element.place_id}, (place, status)=>{
          //   place.photos.forEach(photo => {
          //     console.log(photo.getUrl({'maxWidth': photo.width, 'maxHeight': photo.height}));
          //   });
          // });
        });
      }
    });
  }

}
