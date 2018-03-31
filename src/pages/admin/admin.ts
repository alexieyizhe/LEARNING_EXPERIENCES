import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  search_by: string = "ID";
  search_query: any = "";
  new_user_id: number;
  new_user_name: string;
  new_user_role: string;
  new_user_had_dinner = false;
  new_user_tracker = [];

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
    had dinner: %s
    `, this.new_user_id, this.new_user_name, this.new_user_role, this.new_user_had_dinner.toString());

    let new_user = {
      id: this.new_user_id,
      name: this.new_user_name,
      role: this.new_user_role,
      had_dinner: this.new_user_had_dinner,
    }
    this.view.dismiss(new_user, null);
  }

  searchUser(){
    console.log("searching for user %s", this.search_query);
    this.view.dismiss(null, this.dataService.searchUsers(this.search_by, this.search_query));
  }

  close(){
    console.log("closing admin view...");
    this.view.dismiss();
  }

}
