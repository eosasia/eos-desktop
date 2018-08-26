import { Injectable } from '@angular/core';
import {WindowApp} from '../types/WindowApp';
import {WindowAppInterface} from '../types/WindowAppInterface';
import {ElectronService} from 'ngx-electron';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {


  private _openWindows: WindowApp[] = [];
  private _backgrounds: string[];
  private _openLocalWindowStream: Subject<object> = new Subject();

  constructor(private _electronSvc: ElectronService) {}

  public addWindow(window: WindowAppInterface): void {
    const newWindow = new WindowApp(window);
    this._openWindows.push(newWindow);
  }

  public removeWindow(index: number): void {
    this._openWindows.splice(index, 1);
  }

  public getAllBackgrounds() {
    // check if running inside electron app
    if (this._electronSvc.isElectronApp) {

      // send request to electron
      this._electronSvc.ipcRenderer.send('get-all-backgrounds');


      this._electronSvc.ipcRenderer.on('get-all-backgrounds', (event, data) => {
        this._backgrounds = data;
      });
    }
  }

  public openLocalWindow(window: object) {
    this.openLocalWindowStream.next(window);
  }

  get backgrounds(): string[] {
    return this._backgrounds;
  }

  get openWindows(): WindowApp[] {
    return this._openWindows;
  }

  get openLocalWindowStream(): Subject<object> {
    return this._openLocalWindowStream;
  }


}
