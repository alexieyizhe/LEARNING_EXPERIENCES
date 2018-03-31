import { ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPage } from '../../pages/user/user';
import { ContactPage } from '../../pages/contact/contact';
import { ErrorPage } from '../../pages/error/error';

@Injectable()
export class DetailProvider {

  user: any;

  constructor(public http: HttpClient, public modalCtrl: ModalController) {
    console.log('Hello DetailProvider Provider');
  }

  viewUser(user: any, edit: boolean){
    console.log("viewing user %s...", user.name);
    let userModal = this.modalCtrl.create(UserPage, {user: user, editable: edit}, {cssClass: "user-modal"});

    userModal.present();
  }

  showError(){
    console.log("ERROR!");
    
    let errorModal = this.modalCtrl.create(ErrorPage, null, {cssClass: "error-modal"});

    errorModal.present();
  }

}
