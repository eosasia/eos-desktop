import {Component, OnInit} from '@angular/core';
import {AccountService} from '../core/services/account.service';
import {WindowService} from '../core/services/window.service';
import {ScatterService} from '../core/services/scatter.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: '../templates/menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  public time;
  public accountName;


  constructor(private windowSvc: WindowService, private accountSvc: AccountService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    /* set account name */
    this.scatterSvc.identityStream
      .subscribe(result => {
        console.log(result);
        this.accountName = result['name'];
      });
  }

  toogleSideBar() {
    this.windowSvc.toggleAccountSideBar();
  }

}
