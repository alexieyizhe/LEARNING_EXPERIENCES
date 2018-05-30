import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ScannerPage } from '../pages/scanner/scanner';
import { DirectoryPage } from '../pages/directory/directory';
import { TabsPage } from '../pages/tabs/tabs';

import { UserPage } from '../pages/detail-pages/user/user';
import { EventPage } from '../pages/detail-pages/event/event';
import { AdminPage } from '../pages/detail-pages/admin/admin';
import { UsersearchPage } from '../pages/detail-pages/usersearch/usersearch';
import { ContactPage } from '../pages/detail-pages/contact/contact';
import { ErrorPage } from '../pages/detail-pages/error/error';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { DetailProvider } from '../providers/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ScannerPage,
    UsersearchPage,
    DirectoryPage,
    TabsPage,
    UserPage,
    EventPage,
    AdminPage,
    ContactPage,
    ErrorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ScannerPage,
    UsersearchPage,
    DirectoryPage,
    TabsPage,
    UserPage,
    EventPage,
    AdminPage,
    ContactPage,
    ErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DetailProvider
  ]
})
export class AppModule {}
