import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getPostion ;
  constructor(private geolocation: Geolocation) {}
  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
       console.log('location resp', resp);
       const latitude = resp.coords.latitude;
       const longitude = resp.coords.longitude;
      //  const qrFunc = getData(latitude, longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     this.getPostion = this.geolocation.watchPosition();
     this.getPostion.subscribe((data) => {
      console.log('location data', data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }


}
