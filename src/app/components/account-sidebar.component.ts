import {Component, HostListener, OnInit} from '@angular/core';
import {AccountSidebarManagerService} from '../services/account-sidebar-manager.service';


@Component({
  selector: 'app-account-sidebar',
  templateUrl: '../templates/account-sidebar.component.html',
  styleUrls: ['../app.component.css']
})
export class AccountSideBarComponent implements OnInit {

  sideBarVisibility = false;

  constructor(private windowManagerService: AccountSidebarManagerService) {}

  ngOnInit() {
    this.windowManagerService.userSideBarSource.subscribe(value => {this.sideBarVisibility = value});
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.sideBarVisibility === true) {
        this.windowManagerService.toggleAccountSideBar();
      }
    }
  }
}
