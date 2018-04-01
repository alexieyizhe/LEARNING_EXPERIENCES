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
    console.log('opening admin panel...')

    let adminModal = this.modalCtrl.create(AdminPage, null, {cssClass: "user-modal"});

    adminModal.onDidDismiss((new_user, results) => {

      if(new_user){
        this.dataService.addUser(new_user.id, new_user.name, new_user.role, new_user.email, new_user.pass);
      }
      if(results){
        this.users = results;
      }
    })

    adminModal.present();
  }

  viewUser(user){
    this.detailService.viewUser(user, false);
  }

}
