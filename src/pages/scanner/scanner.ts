import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailProvider } from './../../providers/detail/detail';
import { DataProvider } from './../../providers/data/data';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  query_user_id: number;
  user: any = null;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public detailService: DetailProvider) {

  }

  public convertToNumber(event):number { return +event; }
  
  viewUser(){
    console.log("showing user with id %d", this.query_user_id);
    let users = this.dataService.searchUsers("id", String(this.query_user_id));
    if(users.length === 1){
      this.user = users[0];
      this.detailService.viewUser(this.user, true);
    } else {
      this.detailService.showError();
    }
  }

}
