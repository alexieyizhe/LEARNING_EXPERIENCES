import { ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPage } from '../../pages/detail-pages/user/user';
import { EventPage } from '../../pages/detail-pages/event/event';
import { AdminPage } from '../../pages/detail-pages/admin/admin';
import { ContactPage } from '../../pages/detail-pages/contact/contact';
import { ErrorPage } from '../../pages/detail-pages/error/error';
import { DataProvider } from '../data/data';

@Injectable()
export class DetailProvider {

  user: any;

  constructor(public http: HttpClient, public modalCtrl: ModalController, public dataService: DataProvider) {
  }

  showUser(display_params){
    console.log("viewing user %s...", display_params.user.name);

    let userModal = this.modalCtrl.create(UserPage, {display_params}, {cssClass: "detail-modal user-modal"});
    userModal.present();

  }
  
  showEvent(display_params){
    console.log("viewing event %s", display_params.event.name);

    let eventModal = this.modalCtrl.create(EventPage, {display_params}, {cssClass: "detail-modal event-modal"})
    eventModal.present();
  }

  showAdmin(){
    console.log('opening admin panel...')

    let adminModal = this.modalCtrl.create(AdminPage, null, {cssClass: "detail-modal admin-modal"});
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
