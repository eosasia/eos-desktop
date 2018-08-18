import { Injectable } from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {Subject} from 'rxjs';
import {platformBrowser} from '@angular/platform-browser';

interface Window {
  scatter: any;
}

declare var window: Window;

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

    if (platformBrowser) {

      document.addEventListener('scatterLoaded', () => {
        this.scatter = window.scatter;

        this.getIdentityBrowser();

      });
    }
  }

  async getIdentityBrowser() {
    const requiredFields = {
      accounts: [
        {
          blockchain: 'eos',
          chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
        }
      ]
    };
    try {
      this.identity = await this.scatter.getIdentity(requiredFields);
      this.identityStream.next(this.identity);
    } catch (err) {
      const anonymous = {name: 'anonymous'};
      this.identityStream.next('anonymous');

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


