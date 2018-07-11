import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';


@Component({
  selector: 'app-account-tokens',
  templateUrl: '../templates/account-tokens.component.html'
})
export class AccountTokensComponent implements OnInit {
  public currencies: object[];

  constructor(private sideBarSvc: SidebarService) {}

  ngOnInit() {
    /** get all currencies in account and push to this.currencies */
    this.sideBarSvc.getAccountCurrencies()
      .subscribe(results => {

        results.forEach(value => {
          const splitValue = value[0].split(' ');

          const holderObject = {
            amount: splitValue[0],
            symbol: splitValue[1]
          };

          this.currencies.push(holderObject);
        });
        console.log(this.currencies);
      });
  }

}
