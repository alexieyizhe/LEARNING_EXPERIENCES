import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  search_by: string = "ID";
  search_query: string = "";
  new_user_id: number;
  new_user_name: string;
  new_user_role: string;
  new_user_email: string;
  new_user_pass: string;


  constructor(public navCtrl: NavController, public view: ViewController, public dataService: DataProvider) {
    
  }

  // workaround for ion-input type="number" still saving as string
  public convertToNumber(event):number { return +event; }

  addUser(){
    console.log(`
    --------adding a new user---------
    id: %d
    name: %s
    role: %s
    email: %s
    password: %s
    `, this.new_user_id, this.new_user_name, this.new_user_role, this.new_user_email, this.new_user_pass);

    this.dataService.addUser(this.new_user_id, this.new_user_name, this.new_user_role, this.new_user_email, this.new_user_pass)
    this.view.dismiss();
  }

  close(){
    console.log("closing admin view...");
    this.view.dismiss();
  }

}
