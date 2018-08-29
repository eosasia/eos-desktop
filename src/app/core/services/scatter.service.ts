import { Injectable } from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {Subject} from 'rxjs';
import {Identity} from '../types/interfaces/Identity';


interface Window {
    scatter: any;
    Eos: any;
}

declare var scatter;
declare var Eos;
declare var window: Window;

@Injectable({
  providedIn: 'root',
})
export class ScatterService {
  private _scatter: any;
  private _eos: any;
  private _identity: Identity;
  private _identityStream: Subject<Identity> = new Subject();

  constructor(private _electronSvc: ElectronService) {}

  public connectToScatter() {
    const requiredFields = {
      accounts: [
        {
          blockchain: 'eos',
          chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
        }
      ]
    };

    scatter
      .connect('eos-desktop')
      .then(connected => {
        if (connected) {
          this.scatter = scatter;
          window.scatter = null;
          // console.log(this.scatter.getIdentity);
          this.scatter
            .getIdentity(requiredFields)
            .then((result: Identity) => {
              this.identity = result;
              this.identityStream.next(this.identity);
              // console.log('identity' + JSON.stringify(result));
            })
            .catch(err => {
              console.log(err);
              alert(err.message);
            });
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  cofigureEosJs() {
    const network = {
      protocol: 'https', // Defaults to https
      blockchain: 'eos',
      host: 'nodes.get-scatter.com', // ( or null if endorsed chainId )
      port: 443, // ( or null if defaulting to 80 )
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    };

    // Set up any extra options you want to use eosjs with.
    const eosOptions = {};

    // Get a reference to an 'Eosjs' instance with a Scatter signature provider.
    this.eos = scatter.eos( network, Eos, eosOptions, 'https' );
  }

  get scatter(): any {
    return this._scatter;
  }

  set scatter(value: any) {
    this._scatter = value;
  }

  get eos(): any {
    return this._eos;
  }

  set eos(value: any) {
    this._eos = value;
  }

  get identity(): Identity {
    return this._identity;
  }

  set identity(value: Identity) {
    this._identity = value;
  }

  get identityStream(): Subject<Identity> {
    return this._identityStream;
  }

  set identityStream(value: Subject<Identity>) {
    this._identityStream = value;
  }

}

