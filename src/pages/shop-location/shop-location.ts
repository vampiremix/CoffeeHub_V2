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

  // dataShop: any = [];
  // private latLng: any = {};
  // map: GoogleMap;
  // public dataClick;

  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  dataShop;
  Edit = "map";

  mapsLatlong: Array<ShopsModel2> = [];
  public isHide: boolean = true;
  // mapsLatlong: Array<any> = [

  //       { 'lat': 13.934121, 'long': 100.717228 },
  //       { 'lat': 13.934413, 'long': 100.717657 },
  //       { 'lat': 13.933434, 'long': 100.719009 }

  //     ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public locationProvider: LocationProvider,
    public platform: Platform,
    public geolocation: Geolocation,
  ) {


  }

  ionViewDidLoad() {
    this.gitDataShopLocations();

  }

  clicktogglr() {
    if (this.Edit == "map") {
      this.Edit = "list"
      this.initMap();
      this.isHide = !this.isHide;
      

    } else if (this.Edit == "list") {
      this.Edit = "map"
      this.initMap();
      this.isHide = this.isHide;
      
    }
    
  }

  gitDataShopLocations() {
    this.locationProvider.shopLocation().then((res) => {
      console.log(res);
      this.mapsLatlong = res;
      this.initMap();
      console.log(this.mapsLatlong[0]._id);
    }).catch((err) => {
      console.log(err);
    })
  }


  initMap() {
    this.latLng = {
      lat: 13.933871,
      lng: 100.717829
    };

    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 18,
      center: this.latLng
    });

    let request = {
      location: this.latLng,
      radius: '112500',
      types: ['cafe','restaurant'],
      keyword: 'cafe,coffee'
    };
    
    this.mapsLatlong.forEach(element => {
      let infowindow = new google.maps.InfoWindow();
      console.log(element);
      let marker = new google.maps.Marker({
        draggable: false,
        position: {
          lat: parseFloat(element.location.lat),
          lng: parseFloat(element.location.lng)
        },
        map: map,
        icon: "./assets/icon/pin_2.png"
      });
      infowindow.setContent(element.name +"<br> เลขที่. "+ 
      element.address.address +" ตำบล. "+
      element.address.subdistrict +" อำเภอ. "+ 
      element.address.district +"<br> จังหวัด. "+ 
      element.address.province+" รหัส ไปรษณีย์. "+ element.address.postcode);

      google.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map, marker);
      });
    });


    // let service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, (results, status) => {
    //   if (status == 'OK') {
    //     results.forEach(element => {
    //       for (let i = 0; i < this.mapsLatlong.length; i++) {

    //         console.log("xxxxxxxxx");
    //         console.log(this.mapsLatlong[i]);
    //         let marker = new google.maps.Marker({
    //           title: this.mapsLatlong[i].name ,
    //           title1: this.mapsLatlong[i].email ,
    //           draggable: false,
    //           // position: element.geometry.location,
    //           position: {
    //             lat: parseFloat(this.mapsLatlong[i].location.lat),
    //             lng: parseFloat(this.mapsLatlong[i].location.lng)
    //           },
    //           map: map,
    //           icon: "./assets/icon/pin_2.png"
    //           // icon:  {
    //           //   url: '../../assets/image/map-pin-746123_1920.png',
    //           //   anchor: new google.maps.Point(10, 10),
    //           //   scaledSize: new google.maps.Size(30, 50)
    //           // }
    //         });

    //         google.maps.event.addListener(marker, 'click', () => {
    //           // alert(JSON.stringify(element));
    //           // this.dataShop = element;
    //           let infowindowContent = {t1:marker.title,t2:marker.title1};
    //           infowindow.setContent(infowindowContent.t1);

    //           console.log(marker);

    //           infowindow.open(map, marker);
    //         });
    //       }
    //     });
    //   }
    // });

  }

}
