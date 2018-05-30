import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { DetailProvider } from '../../../providers/detail/detail';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'page-usersearch',
  templateUrl: 'usersearch.html'
})
export class UsersearchPage {

  query_user_id: number;
  user: any = null;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
              public dataService: DataProvider, public detailService: DetailProvider,
              public toastCtrl: ToastController) {

  }

  public convertToNumber(event):number { return +event; }
  
  viewUser(){
    if(this.dataService.cur_user && (this.dataService.cur_user.role === 0 || this.dataService.cur_user.role === 3)){
      console.log("showing user with id %d", this.query_user_id);

      let loading = this.loadingCtrl.create(
        {
          spinner: 'bubbles',
          duration: 500
        }
      );
      
      loading.onDidDismiss(() => {
        console.log("loading dismissed!")
        let users = this.dataService.searchUsers("id", String(this.query_user_id));
        if(users.length === 1){
          this.user = users[0];
          this.detailService.showUser({user:this.user, display_type: 4});
        } else {
          this.detailService.showError();
        }
      });

      loading.present();
    } else {
      let logged_out_toast = this.toastCtrl.create({
        message: "You're not logged in or you don't have access to user search!",
        duration: 1000,
        position: "top",
        cssClass: "logged_out_toast",
        showCloseButton: true,
        dismissOnPageChange: true
      });
  
      logged_out_toast.present();
    }
    
    
  }

}
