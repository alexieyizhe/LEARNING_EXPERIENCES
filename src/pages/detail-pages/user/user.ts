import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  readonly DISPLAY_VIEW = 1;
  readonly DISPLAY_SUDOEDIT = 2;
  readonly DISPLAY_EDIT = 3;
  readonly DISPLAY_CHECKIN = 4;
  readonly DISPLAY_QUICKCI = 5;
  
  user;
  attended_length: number;
  user_display_type: number = this.DISPLAY_VIEW;


  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: DataProvider) {
    console.log("what")
    console.log("%s", this.navParams.get("display_params").user.name);
    console.log("%s", this.navParams.get("display_params").display_type);
    this.user_display_type = Number(navParams.get("display_params").display_type);
    this.user = this.navParams.get("display_params").user;
    console.log("%s", this.user.name);
    this.attended_length = this.user.attended.reduce((acc, x) => {x ? acc + 1 : acc; return acc;}, 0)
    console.log("%d", this.attended_length);
  }

  ionViewDidLoad() {
    console.log('loaded user page with edit value %d', this.user_display_type);
  }

  trackByIndex(index: number, value: number) {
    return index;
  }

  editStatus(){
  }

  close(){
    this.view.dismiss(this.user);
  }

}
