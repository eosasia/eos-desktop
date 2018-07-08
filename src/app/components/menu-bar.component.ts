import {Component, OnInit} from '@angular/core';
import {AccountSidebarManagerService} from '../services/account-sidebar-manager.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: '../templates/menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  time;
  accountName = 'skalfgneodkl';


  constructor(private windowManagerService: AccountSidebarManagerService) {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  toogleAccountSideBar() {
    this.windowManagerService.toggleAccountSideBar();
    console.log(this.windowManagerService.accountInfoBarVisible);
  }

}
