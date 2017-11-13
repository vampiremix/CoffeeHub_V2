import { Geolocation } from '@ionic-native/geolocation';
import { ShopsModel2 } from '../../models/shops.model';
import { LocationProvider } from '../../providers/location/location';

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Geocoder, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, LatLng } from '@ionic-native/google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-shop-location',
  templateUrl: 'shop-location.html',
})
export class ShopLocationPage {

  dataShop: any = [];
  private latLng: any = {};
  map: GoogleMap;
  public dataClick;

  // @ViewChild('map') mapElement: ElementRef;
  // private latLng: any = {};
  // dataShop;
  Edit = "map";

  // mapsLatlong: Array<ShopsModel2> = new Array<ShopsModel2>();
  mapsLatlong: Array<any> = [

    { 'lat': 13.934121, 'long': 100.717228 },
    { 'lat': 13.934413, 'long': 100.717657 },
    { 'lat': 13.933434, 'long': 100.719009 }

  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public locationProvider: LocationProvider,
    public platform: Platform,
    public geolocation: Geolocation,
  ) {
    console.log('ionViewDidLoad MapPage');
    this.platform.ready().then(() => {
      this.loadMap();
    });

  }

  ionViewDidLoad() {
    // this.initMap();
    console.log('ionViewDidLoad MapPage');
    this.platform.ready().then(() => {
      this.loadMap();
    });
    // this.gitDataShopLocations();


  }

  clicktogglr() {
    if (this.Edit == "map") {
      this.Edit = "list"

    } else if (this.Edit == "list") {
      this.Edit = "map"

    }
  }

  // gitDataShopLocations() {
  //   this.locationProvider.shopLocation().then((res) => {
  //     console.log(res);
  //     this.mapsLatlong = res;
  //     console.log(this.mapsLatlong[0]._id);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  loadMap() {

    this.geolocation.getCurrentPosition().then((resp) => {

      let location = new LatLng(resp.coords.latitude, resp.coords.longitude);
      this.map = new GoogleMap('map', {
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'target': location,
          'tilt': 90,
          'zoom': 14,
          'bearing': 30
        },
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        alert('Map is ready!');
        let latlng = {
          lat: 0,
          lng: 0
        };
        for (let i = 0; i < this.mapsLatlong.length; i++) {
          let addmarker = this.map.addMarker({
            title: 'select shop',
            icon: './assets/icon/pin_2.png',
            animation: 'BOUNCE',
            position: {
              lat: this.mapsLatlong[i].location[i].lat,
              lng: this.mapsLatlong[i].location[i].lng
            }
          })
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe((data) => {
                  latlng = { lat: data[0].lat, lng: data[0].lng };
                  alert(JSON.stringify(latlng));

                  // this.nativeGeocoder.reverseGeocode(data[0].lat, data[0].lng)
                  // .then((result: NativeGeocoderReverseResult) => alert(JSON.stringify(result)))
                  // .catch((error: any) => console.log(error));



                });
            });
        }

      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
  // initMap() {
  //   this.latLng = {
  //     lat: 13.9381232,
  //     lng: 100.71376
  //   };

  //   let map = new google.maps.Map(this.mapElement.nativeElement, {
  //     zoom: 12,
  //     center: this.latLng
  //   });

  //   let request = {
  //     location: this.latLng,
  //     radius: '112500',
  //     types: ['restaurant'],
  //     keyword: 'coffee'
  //   };


  //   let service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, (results, status) => {
  //     if (status == 'OK') {
  //       results.forEach(element => {
  //         let marker = new google.maps.Marker({
  //           draggable: false,
  //           // position: element.geometry.location,
  //           // position:{
  //           //   lat: this.shoplatlong[i].location.lat,
  //           //   lng: this.shoplatlong[i].location.lng
  //           // },
  //           map: map,
  //           icon:"./assets/image/coffee-n-tea.png"
  //           // icon:  {
  //           //   url: '../../assets/image/map-pin-746123_1920.png',
  //           //   anchor: new google.maps.Point(10, 10),
  //           //   scaledSize: new google.maps.Size(30, 50)
  //           // }
  //         });

  //         google.maps.event.addListener(marker, 'click', () => {
  //           alert(JSON.stringify(element));
  //           this.dataShop = element;
  //           console.log(this.dataShop);
  //         });
  //       });
  //     }
  //   });

  // }


