import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  query_user_id: number;
  new_user_id: number;
  new_user_name;
  new_user_role;
  new_user_had_dinner = false;
  new_user_tracker = [];

  constructor(public navCtrl: NavController) {

  }

  public convertToNumber(event):number { return +event; }
  
  searchUser(){
    console.log("searching for user %d", this.query_user_id);
  }

}
