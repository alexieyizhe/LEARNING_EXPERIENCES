import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ScannerPage } from '../scanner/scanner';
import { UsersearchPage } from '../usersearch/usersearch';
import { DirectoryPage } from '../directory/directory';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = ScannerPage;
  tab3Root = UsersearchPage;
  tab4Root = DirectoryPage;

  constructor() {

  }
}
