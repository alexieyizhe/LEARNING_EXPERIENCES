import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { DetailProvider } from './../../providers/detail/detail';
import { DataProvider } from './../../providers/data/data';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  query_user_id: number;
  user: any = null;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
              public dataService: DataProvider, public detailService: DetailProvider,
              public pltfrm: Platform, public qrScanner: QRScanner) {       
  }

  ionViewDidLoad(){
  }

  public convertToNumber(event):number { return +event; }

  openScanner(){
    console.log("OPENING QR SCANNER");
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          // start scanning
          let scanner = this.qrScanner.scan().subscribe((contents: string) => {
            if(this.dataService.cur_user) this.dataService.cur_user.scan_stats.scanned++; // updates scanned stats of current user
            this.qrScanner.hide(); // hide camera preview
            scanner.unsubscribe(); // stop scanning
            (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
            let matching_id_users = this.dataService.searchUsers("id", contents);
            if(matching_id_users.length === 1){
              this.detailService.showUser({user: matching_id_users[0], display_type: 4});
            } else {
              this.detailService.showError();
            }
          });
          console.log("scanner should open now!");
          // show camera preview
          (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');

          this.qrScanner.resumePreview();
          // show camera preview
          
          this.qrScanner.show();

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          alert("permission was permanently denied.");
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          alert("permission was denied, but not permanently. You can ask for permission again at a later time.");
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
