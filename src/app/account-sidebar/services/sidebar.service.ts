import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {AccountService} from '../../core/services/account.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  /** link to all tokens on the network */
  /** https://docs.google.com/spreadsheets/d/10YwFRklMpu99OzqzUUVXhwP4SAytlUOje29WMgtUqe0/htmlview */
  private _knownCurrencies = [
    {
      symbol: 'EOS',
      code: 'eosio.token'
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
    }

  ];

  constructor(private http: HttpClient, private accountSvc: AccountService) {}

  getAccountInfo(): Observable<object> {
    return this.http.post(`${this.accountSvc.nodeUrl}/v1/chain/get_account`, {'account_name': this.accountSvc.eosAccountName});
  }

  getAccountCurrencies(): Observable<object[]> {
    const api = '/v1/chain/get_currency_balance';
    const account = this.accountSvc.eosAccountName;
    const currencyRequests = [];

    this._knownCurrencies.forEach((currency) => {
      /** add account name to Currency request */
      currency['account'] = account;

      /** convert currency object into JSON string */
      const currencyJson = JSON.stringify(currency);

      /** create currency request */
      const request = this.http.post(`${this.accountSvc.nodeUrl}${api}`, currencyJson);

      /** push to currency request list */
      currencyRequests.push(request);
    });

    return forkJoin(currencyRequests);
  }

}
