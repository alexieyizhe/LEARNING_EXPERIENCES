import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { UserPage } from '../user/user';
import { HttpModule } from '@angular/http';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  
  public users: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
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
        this.saveUser(new_user);
      }
      if(results){
        this.users = results;
      }
    })

    adminModal.present();
  }

  saveUser(new_user){
    this.users.push(new_user);
  }

  viewUser(user){
    console.log("viewing user %s...", user.name);

    let userModal = this.modalCtrl.create(UserPage, {user: user}, {cssClass: "user-modal"});

    userModal.present();
  }

}
