import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { ScannerPage } from '../pages/scanner/scanner';
import { UsersearchPage } from '../pages/usersearch/usersearch';
import { DirectoryPage } from '../pages/directory/directory';
import { TabsPage } from '../pages/tabs/tabs';

import { AdminPage } from '../pages/admin/admin';
import { UserPage } from '../pages/user/user';
import { ContactPage } from '../pages/contact/contact';
import { ErrorPage } from '../pages/error/error';

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
    AdminPage,
    UserPage,
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
    AdminPage,
    UserPage,
    ContactPage,
    ErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DetailProvider
  ]
})
export class AppModule {}
