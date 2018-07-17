import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Currency} from '../types/currency';





@Component({
  selector: 'app-account-tokens',
  templateUrl: '../templates/account-tokens.component.html'
})
export class AccountTokensComponent implements OnInit {
  public currencies: Currency[] = [];

  constructor(private sideBarSvc: SidebarService) {}

  ngOnInit() {
    this._getCurrencies();
  }

  /** get all currencies in account and push to this.currencies array */
  private _getCurrencies() {
    /** use getAccountInfo to get EOS staked and unstaked values */
    this.sideBarSvc.getAccountInfo()
      .subscribe(result => {

          /** reformat EOS balances into numbers  */
          const liquidEOS = Number(result['core_liquid_balance'].split(' ')[0]);
          const cpuStacked = Number(result['total_resources']['cpu_weight'].split(' ')[0]);
          const netStaked = Number(result['total_resources']['net_weight'].split(' ')[0]);

          /** add balances together */
          const totalEOS = liquidEOS + cpuStacked + netStaked;

          /** create new currency */
          const eos = new Currency('EOS', totalEOS);

          /** push to currencies array */
          this.currencies.push(eos);

        /** Now get all other known currencies and add to this.currencies array */
        this._getAllNonEOSCurrencies();

      });
  }

  /** get all currencies in account and push to this.currencies */
  private _getAllNonEOSCurrencies() {
    this.sideBarSvc.getAccountCurrencies()
      .subscribe(results => {

        /** format each currency, comes like this: ["418.8393 KARMA"] */
        results.forEach(value => {
          const splitValue = value[0].split(' ');
          const amount = Number(splitValue[0]);
          const symbol = splitValue[1];

          const currency = new Currency(symbol, amount);

          this.currencies.push(currency);
        });
      });
  }

}
