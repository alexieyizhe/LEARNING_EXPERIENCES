import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user;
  editable: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
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
    } else {
      console.log("not editable");
    }
  }

  close(){
    this.view.dismiss();
  }

}
