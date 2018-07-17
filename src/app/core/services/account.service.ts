import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  get eosAccountName(): string {
    return this._eosAccountName;
  }

  get nodeUrl(): string {
    return this._nodeUrl;
  }
  private _eosAccountName = 'haytkojugage';
  private _nodeUrl = 'https://api.eosnewyork.io';
}
