import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {AccountService} from '../../core/services/account.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  get knownCurrencies(): { symbol: string; code: string }[] {
    return this._knownCurrencies;
  }

  /** link to all tokens on the network */
  /** https://docs.google.com/spreadsheets/d/10YwFRklMpu99OzqzUUVXhwP4SAytlUOje29WMgtUqe0/htmlview */
  private _knownCurrencies = [
    {
      symbol: 'IQ',
      code: 'everipediaiq'
    },
    {
      symbol: 'KARMA',
      code: 'therealkarma'
    },
    {
      symbol: 'HORUS',
      code: 'horustokenio'
    },
    {
      symbol: 'CET',
      code: 'eosiochaince'
    },
    {
      symbol: 'ADD',
      code: 'eosadddddddd'
    },
    {
      symbol: 'ATD',
      code: 'eosatidiumio'
    },
    {
      symbol: 'POOR',
      code: 'poormantoken'
    },
    {
      symbol: 'CHL',
      code: 'challengedac'
    },
    {
      symbol: 'BLACK',
      code: 'eosblackteam'
    },
    {
      symbol: 'WIZZ',
      code: 'wizznetwork1'
    }
  ];

  constructor(private http: HttpClient, private accountSvc: AccountService) {}

  // get account info
  getAccountInfo(account: string): Observable<object> {
    return this.http.post(`${this.accountSvc.nodeUrl}/v1/chain/get_account`, {'account_name': account});
  }

  // need to add eos to this list and get all of them at the same ike TODO
  /* get all currency balances except EOS */
  getAccountCurrencies(account: string): Observable<object[]> {
    const api = '/v1/chain/get_currency_balance';
    const currencyRequests = [];

    this.knownCurrencies.forEach((currency) => {
      /* add account name to Currency request */
      currency['account'] = account;

      /* convert currency object into JSON string */
      const currencyJson = JSON.stringify(currency);

      /* create currency request */
      const request = this.http.post(`${this.accountSvc.nodeUrl}${api}`, currencyJson).catch(res => Observable.of(res));

      /* push to currency request list */
      currencyRequests.push(request);
    });

    return forkJoin(currencyRequests);
  }

  getTransactions(): Observable<object> {

    const api = '/v1/history/get_actions';
    const parameters = {
      pos: -1,
      offset: -20,
      account_name: this.accountSvc.eosAccountName
    };

    return this.http.post(`${this.accountSvc.nodeUrl}${api}`, parameters);
  }

}
