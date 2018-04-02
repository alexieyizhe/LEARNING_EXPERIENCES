import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { DetailProvider } from '../../providers/detail/detail';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider, public detailService: DetailProvider) {
  }

  ionViewDidLoad() {
    console.log('loaded directory page');
  }

  openAdmin() {
    this.detailService.showAdmin();
  }

  viewUser(user){
    this.detailService.showUser({user: user, display_type: 2});
  }

}
