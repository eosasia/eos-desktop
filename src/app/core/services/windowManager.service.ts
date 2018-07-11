import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WindowManagerService {
  private _sideBarVisible = true;
  private _sideBarVisibilityStream: Subject<boolean> = new Subject();

  /** toggle sidebar visibility status */
  toggleAccountSideBar(): void {
    this._sideBarVisible = !this._sideBarVisible;
    this._sideBarVisibilityStream.next(this._sideBarVisible);
  }

  /** return current sidebar visibility status */
  get sideBarVisible(): boolean {
    return this._sideBarVisible;
  }

  /** return Subject Observable for sidebar toggle visibility */
  get sideBarVisibilityStream(): Subject<boolean> {
    return this._sideBarVisibilityStream;
  }

}
