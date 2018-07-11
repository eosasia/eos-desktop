import {Component, OnInit} from '@angular/core';
import {AccountService} from '../core/services/account.service';
import {SidebarService} from '../account-sidebar/services/sidebar.service';
import {WindowManagerService} from '../core/services/windowManager.service';



@Component({
  selector: 'app-menu-bar',
  templateUrl: '../templates/menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  public time;
  public accountName;


  constructor(private windowManagerSvc: WindowManagerService, private accountSvc: AccountService) {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.accountName = this.accountSvc.eosAccountName;
  }

  toogleAccountSideBar() {
    this.windowManagerSvc.toggleAccountSideBar();
  }

}
