import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {forkJoin} from 'rxjs/observable/forkJoin';




@Injectable({
  providedIn: 'root',
})
export class AccountSidebarManagerService {

  private _userSideBarSource: Subject<boolean> = new Subject();
  private _accountInfoBarVisible = false;
  private _nodeUrl = 'https://api.eosnewyork.io';
  private _account = 'haytkojugage';

  /** link to all tokens on the network */
  /** https://docs.google.com/spreadsheets/d/10YwFRklMpu99OzqzUUVXhwP4SAytlUOje29WMgtUqe0/htmlview */
  private _knownCurrencies = [
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

  constructor(private http: HttpClient) {}

  get userSideBarSource(): Subject<boolean> {
    return this._userSideBarSource;
  }

  toggleAccountSideBar(): void {
    this._accountInfoBarVisible = !this._accountInfoBarVisible;
    this._userSideBarSource.next(this._accountInfoBarVisible);
  }

  get accountInfoBarVisible(): boolean {
    return this._accountInfoBarVisible;
  }

  getAccountInfo(): Observable<object> {
    return this.http.post(`${this._nodeUrl}/v1/chain/get_account`, {'account_name': this._account});
  }

  getAccountCurrencies(): Observable<object[]> {
    const api = '/v1/chain/get_currency_balance';
    const account = this._account;
    const currencyRequests = [];

    this._knownCurrencies.forEach((currency) => {
      /** add account name to Currency request */
      currency['account'] = account;

      /** convert currency object into JSON string */
      const currencyJson = JSON.stringify(currency);

      /** create currency request */
      const request = this.http.post(`${this._nodeUrl}${api}`, currencyJson);

      /** push to currency request list */
      currencyRequests.push(request);
    });

    return forkJoin(currencyRequests);
  }

}
