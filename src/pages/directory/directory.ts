import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  public users = [
    { id: 1, name: "Alex", role: "organizer", had_dinner: false },
    { id: 2, name: "Meagan", role: "organizer", had_dinner: true },
    { id: 3, name: "Falah", role: "organizer", had_dinner: false }
  ];


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openAdmin() {
    console.log('opening admin panel...')

    let adminModal = this.modalCtrl.create(AdminPage);

    adminModal.onDidDismiss((new_user) => {

      if(new_user){
        this.saveUser(new_user);
      }
    })

    adminModal.present();
  }

  saveUser(new_user){
    this.users.push(new_user);
  }

  viewUser(user){
    console.log("viewing user %s...", user.name);
  }

}
