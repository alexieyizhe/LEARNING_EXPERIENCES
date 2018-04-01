import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { DataProvider } from '../../providers/data/data';
import { DetailProvider } from '../../providers/detail/detail';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  
  users;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider, public detailService: DetailProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.users = this.dataService.searchUsers();
  }

  openAdmin() {
    this.detailService.openAdmin();
  }

  viewUser(user){
    this.detailService.viewUser(user, false);
  }

}
