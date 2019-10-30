import { Component } from "@angular/core";

import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
 
@Component({
  selector: "app-cricket",
  templateUrl: "cricket.page.html",
  styleUrls: ["cricket.page.scss"]
})
export class cricketPage {
  //encodeData : for storing encoded item from QR code
  //scannedData : for storing object from scanner
  //
  name : string ="Power Forward";
  Email: any ="Power.Forward@gmail.com";
  game : string ="Cricket";
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor( // importing the barcode scanner
    private barcodeScanner: BarcodeScanner)
    //We have  defined BarcodeScannerOptions to define options like to show torch button, 
    //show button to flip camera front or back
    {
      this.scanCode()
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true

    };
    }
    
  
 //we add the button and show the result of scanned Barcode,
 // having text information bar type
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        //alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        console.log( this.scannedData);
        alert(this.scannedData["text"]);
      //then we have traverse to the scanned QR which is url format
        //document.location.href = this.scannedData["text"];
      })
      .catch(err => {
        console.log("Error", err);

      });
  }
 
  
  
}