import { ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPage } from '../../pages/detail-pages/user/user';
import { AdminPage } from '../../pages/detail-pages/admin/admin';
import { ContactPage } from '../../pages/detail-pages/contact/contact';
import { ErrorPage } from '../../pages/detail-pages/error/error';
import { DataProvider } from '../data/data';

@Injectable()
export class DetailProvider {

  user: any;

  constructor(public http: HttpClient, public modalCtrl: ModalController, public dataService: DataProvider) {
    console.log('Hello DetailProvider Provider');
  }

  showUser(display_params){
    console.log("viewing user %s...", display_params.user.name);
    let userModal = this.modalCtrl.create(UserPage, {display_params}, {cssClass: "detail-modal user-modal"});

    userModal.onDidDismiss((new_user) => {

      if(new_user){
        console.log("updating user!");
        this.dataService.updateUser(new_user.id, new_user);
      }

    })

    userModal.present();

  }

  showAdmin() {
    console.log('opening admin panel...')

    let adminModal = this.modalCtrl.create(AdminPage, null, {cssClass: "detail-modal user-modal"});
    adminModal.present();
  }

  showContact(){
    console.log("opening contact info page...")

    let contactModal = this.modalCtrl.create(ContactPage, null, {cssClass: "detail-modal contact-modal"});
    contactModal.present();
  }

  showError(){
    console.log("ERROR!");
    
    let errorModal = this.modalCtrl.create(ErrorPage, null, {cssClass: "detail-modal error-modal"});
    errorModal.present();
  }

}
