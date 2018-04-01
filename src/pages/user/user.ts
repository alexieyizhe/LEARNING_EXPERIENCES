import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user;
  editable: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: DataProvider) {
    console.log("%s", navParams.get("user").name);
    this.editable = navParams.get("editable");
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('loaded user page');
    if(this.editable){
      console.log("editable");
      document.getElementById("editable_view").style.display = "inline";
      document.getElementById("default_view").style.display = "none";
      if(this.dataService.cu_is_quick){
        document.getElementById("editable_volunteer-quick").style.display = "inline";
        document.getElementById("editable_volunteer-non-quick").style.display = "none";
      }
    } else {
      console.log("not editable");
    }
  }

  trackByIndex(index: number, value: number) {
    return index;
  }
  
  close(){
    this.view.dismiss(this.user);
  }

}
