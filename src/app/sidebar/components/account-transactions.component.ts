import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {ScatterService} from '../../core/services/scatter.service';
import {Action} from '../types/Action';
import {GetActionInterface} from '../types/interfaces/GetActionInterface';
import {ElectronService} from 'ngx-electron';
import {platformBrowser} from '@angular/platform-browser';


@Component({
  selector: 'app-account-transactions',
  templateUrl: '../templates/account-transactions.component.html'
})
export class AccountTransactionsComponent implements OnInit {

  actions: Action[] = [];

  constructor(private sidebarSvc: SidebarService, private scatterSvc: ScatterService, private _electronSvc: ElectronService) {}

  ngOnInit() {
    this.scatterSvc.identityStream
      .subscribe(result => {
        if (result['name'] !== 'anonymous') {
          const account_name = result['accounts'][0]['name'];
          this.sidebarSvc
            .getTransactions(account_name)
            .subscribe((res: GetActionInterface) => {
              res.actions.forEach(item => {
                const action = new Action(item);
                action.toString();
                this.actions.push(action);
              });
            });
        }
      });
  }

  public openWebPage(transaction: string) {
    const url = 'https://eosflare.io/tx/' + transaction;

    if (this._electronSvc.isElectronApp) {
      this._electronSvc.ipcRenderer.send('external-page', url);
    }

    if (platformBrowser) {
      window.open(url, '_blank');
    }

  }

}
