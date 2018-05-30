import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  readonly DISPLAY_VIEW = 1;
  readonly DISPLAY_SUDOEDIT = 2;
  readonly DISPLAY_EDIT = 3;
  readonly DISPLAY_CHECKIN = 4;
  
  saveCtrl: FormControl = new FormControl();
  user: any;
  workshops_at: number;
  activities_at: number;
  meals_at: number;
  user_display_type: number = this.DISPLAY_VIEW;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public view: ViewController, public toastCtrl: ToastController, public alertCtrl: AlertController,
    public dataService: DataProvider) {
    console.log("displaying user %s with display type %s", this.navParams.get("display_params").user.name, this.navParams.get("display_params").display_type);
    this.user_display_type = Number(navParams.get("display_params").display_type);
    this.user = this.navParams.get("display_params").user;
    this.workshops_at = (this.user.at_evnts.filter(evnt => evnt.type === "workshop")).length;
    this.activities_at = (this.user.at_evnts.filter(evnt => evnt.type === "activity")).length;
    this.meals_at = (this.user.at_evnts.filter(evnt => evnt.type === "meal")).length;
  }

  ionViewDidLoad() {
    console.log('loaded user page with edit value %d', this.user_display_type);
    this.saveCtrl.valueChanges.debounceTime(2000).subscribe(user_change => {this.alertSave()});
  }

  trackByIndex(index: number, value: number) {
    return index;
  }

  editStatus(){
    console.log("editing status...");
  }

  optQuickCI(){
    let quickci_alert = this.alertCtrl.create({
      title: 'Would you like to enable Quick Check-In?',
      buttons: [
        {
          text: 'Nope',
          role: 'cancel',
          handler: () => {
            console.log('no quickcheckin');
          }
        },
        {
          text: 'Yes!',
          handler: () => {
            console.log('enabled quick checkin');
            this.dataService.userEnableQCI();
          }
        }
      ]
    });
    quickci_alert.present();
  }

  alertSave(){
    let save_toast = this.toastCtrl.create({
      message: "Your changes have been automatically saved!",
      duration: 1000,
      position: "top",
      cssClass: "save_toast",
      showCloseButton: true,
      dismissOnPageChange: true
    });

    save_toast.present();
  }

}
