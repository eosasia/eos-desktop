import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {AppService} from '../../core/services/app.service';
import {ScatterService} from '../../core/services/scatter.service';
import {Identity} from '../../core/types/interfaces/Identity';


@Component({
  selector: 'app-menu-bar',
  templateUrl: '../templates/menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
  public time;
  public accountName: string;

  constructor(private appSvc: AppService, private accountSvc: AccountService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.accountName = 'Anonymous';
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    /* set account name */
    this.scatterSvc.identityStream
      .subscribe((result: Identity) => {
        this.accountName = result.name;
      });
  }

  public toogleSideBar() {
    this.appSvc.toggleAccountSideBar();
  }

  public connectToScatter() {
    console.log('Getting Scatter Identity');
    this.scatterSvc.connectToScatter();
  }

}
