import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AccountSidebarManagerService {

  private _userSideBarSource: Subject<boolean> = new Subject();
  private _accountInfoBarVisible = false;

  get userSideBarSource(): Subject<boolean> {
    return this._userSideBarSource;
  }

  toggleAccountSideBar() {
    this._accountInfoBarVisible = !this._accountInfoBarVisible;
    this._userSideBarSource.next(this._accountInfoBarVisible);
  }

  get accountInfoBarVisible(): boolean {
    return this._accountInfoBarVisible;
  }

}
