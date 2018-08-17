import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private _eosAccountName = '';
  private _nodeUrl = 'https://nodes.get-scatter.com';

  set eosAccountName(value: string) {
    this._eosAccountName = value;
  }
  get eosAccountName(): string {
    return this._eosAccountName;
  }

  get nodeUrl(): string {
    return this._nodeUrl;
  }

}
