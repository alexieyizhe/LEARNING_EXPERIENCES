import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ScannerPage } from '../pages/scanner/scanner';
import { DirectoryPage } from '../pages/directory/directory';
import { TabsPage } from '../pages/tabs/tabs';

import { AdminPage } from '../pages/admin/admin';
import { UserPage } from '../pages/user/user';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ScannerPage,
    DirectoryPage,
    TabsPage,
    AdminPage,
    UserPage,
    ContactPage
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
    DirectoryPage,
    TabsPage,
    AdminPage,
    UserPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
