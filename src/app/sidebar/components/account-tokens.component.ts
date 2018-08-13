import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Currency} from '../types/currency';
import {ScatterService} from '../../core/services/scatter.service';


@Component({
  selector: 'app-account-tokens',
  templateUrl: '../templates/account-tokens.component.html'
})
export class AccountTokensComponent implements OnInit {
  public currencies: Currency[] = [];

  constructor(private sideBarSvc: SidebarService, private scatterSvc: ScatterService) {}

  ngOnInit() {

    this.scatterSvc.identityStream
      .subscribe(result => {
        this.sideBarSvc
          .getAccountCurrencies(result['accounts'][0]['name'])
          .subscribe((res) => {
            console.log(typeof res);
            this._formatAndSetCurrencies(res);
          });
      });

  }

  private _formatAndSetCurrencies(list: any) {
    console.log(list);

    /** format each currency, comes like this: ["418.8393 KARMA"] */
    list.forEach(value => {
      const splitValue = value[0].split(' ');
      const amount = Number(splitValue[0]);
      const symbol = splitValue[1];
      const currency = new Currency(symbol, amount);
      this.currencies.push(currency);
    });
  }


}
