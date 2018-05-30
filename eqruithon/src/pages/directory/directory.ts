import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { DetailProvider } from '../../providers/detail/detail';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  filtered_users: any;
  query_user: string = "";
  query_type: string = "id";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider, public detailService: DetailProvider) {
  }

  ionViewDidLoad() {
    this.filtered_users = this.dataService.searchUsers(this.query_type, this.query_user);
    console.log('loaded directory page');
  }

  openAdmin() {
    this.detailService.showAdmin();
  }

  openCheckin(){
    this.detailService.showUser({user: this.dataService.searchUsers("id", this.query_user)[0], display_type: 4});
  }

  filterUsers(){
    this.filtered_users = this.dataService.searchUsers(this.query_type, this.query_user);
  }

  viewUser(user){
    this.detailService.showUser({user: user, display_type: 1});
  }

}
