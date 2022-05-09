import { Component } from '@angular/core';

import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from '@ionic-native/barcode-scanner/ngx';
import { formatDate } from '@angular/common';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today = Date.now();
  fdate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
  ftime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
  options = {
    timeout: 5000,
    enableHighAccuracy: true,
    maximumAge: 0,
  };
  getPostion;
  public myAngularxQrCode: string = null;

  constructor(private geolocation: Geolocation) {}
  getLocation() {
    this.geolocation
      .getCurrentPosition({ timeout: 5000, enableHighAccuracy: true })
      .then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        console.log('location resp', resp);
        const latitude = resp.coords.latitude;
        const longitude = resp.coords.longitude;
        const subject = 'DBMS';
        const date = this.fdate;
        const time = this.ftime;
        this.myAngularxQrCode = JSON.stringify({
          latitude,
          longitude,
          date,
          time,
          subject,
        });
        console.log(this.myAngularxQrCode);

        //  const qrFunc = getData(latitude, longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
    // this.getPostion = this.geolocation.watchPosition();
    // this.getPostion.subscribe((data) => {
    //   console.log('location data', data);
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    // });
  }
}
