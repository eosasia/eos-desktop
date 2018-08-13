import { Injectable } from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {Subject} from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ScatterService {

  public scatter: any;
  public eos: any;
  private _identity: string;
  private _identityStream: Subject<string> = new Subject();

  constructor(private _electronSvc: ElectronService) {}

  connectToScatter() {
    if (this._electronSvc.isElectronApp) {

      this._electronSvc.ipcRenderer.send('scatter', 'hello');

      this._electronSvc.ipcRenderer.on('scatter', (event, data) => {
        this.identity = data;
        this.identityStream.next(this.identity);
      });
    }
  }

  get identity(): string {
    return this._identity;
  }

  set identity(value: string) {
    this._identity = value;
  }

  get identityStream(): Subject<string> {
    return this._identityStream;
  }
}


