import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

// TODO change the name of this services
@Injectable({
  providedIn: 'root',
})
export class WindowService {

  private _sideBarVisible = false;
  private _sideBarVisibilityStream: Subject<boolean> = new Subject();
  private _windowSize = {
    width: 0,
    height: 0
  };

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

  get windowSize(): { width: number; height: number } {
    return this._windowSize;
  }

  set windowSize(value: { width: number; height: number }) {
    this._windowSize = value;
  }

}
