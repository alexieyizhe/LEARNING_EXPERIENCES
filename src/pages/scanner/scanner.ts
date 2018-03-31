import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  query_user_id: number;

  constructor(public navCtrl: NavController) {

  }

  public convertToNumber(event):number { return +event; }
  
  searchUser(){
    console.log("searching for user %d", this.query_user_id);
  }

}
