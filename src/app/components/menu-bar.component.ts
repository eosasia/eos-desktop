import {Component, OnInit} from '@angular/core';
import {WindowManagerService} from '../services/window-manager.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: '../templates/menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  time;
  accountName = 'skalfgneodkl';


  constructor(private windowManagerService: WindowManagerService) {}

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
