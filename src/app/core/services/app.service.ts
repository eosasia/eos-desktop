import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

// TODO change the name of this services
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _sideBarVisible = false;
  private _sideBarVisibilityStream: Subject<boolean> = new Subject();
  private _backgroundStream: Subject<string> = new Subject();
  private _windowSize = {
    width: 0,
    height: 0
  };

  private _apps: object[] = [
    {
      appName: 'Zoom Browser',
      imageName: 'icons8-globe-40.png',
      url: 'https://yahoo.com/'
    },
    {
      appName: 'EOS Tool Kit',
      imageName: 'icon-eostoolkit.png',
      url: 'https://eostoolkit.io/home'
    },
    {
      appName: 'EOS Authority',
      imageName: 'icon-eos-authority.png',
      url: 'https://eosauthority.com/account'
    },
    {
      appName: 'EOS Fee Explorer',
      imageName: 'icon-fee-explorer.png',
      url: 'https://eos.feexplorer.io/'
    },
    {
      appName: 'Coin Market Cap',
      imageName: 'icon-coinmarketcap.png',
      url: 'https://coinmarketcap.com'
    },
    {
      appName: 'On Chain FX',
      imageName: 'icons8-web-design-40.png',
      url: 'https://onchainfx.com/'
    },

    {
      appName: 'EOS Bet - Dice',
      imageName: 'icon-eosbet.png',
      url: 'https://dice.eosbet.io/?ref=eosdesktopio'
    },
    {
      appName: 'Prospectors',
      imageName: 'icon-prospectors .png',
      url: 'https://prospectors.io/'
    },
    {
      appName: 'Wizards.one',
      imageName: 'icon-eos-wizard.png',
      url: 'https://wizards.one/#/'
    },
    {
      appName: 'EOS Network Monitor.io',
      imageName: 'icons8-nas-40.png',
      url: 'http://eosnetworkmonitor.io/'
    },
    {
      appName: 'Backgrounds',
      imageName: 'icons8-monitor-40.png',
      url: 'local'
    }
  ];

  private _windowShortcutApps: object[] = [
    {
      appName: 'Youtube',
      imageName: 'icons8-play-button-48.png',
      url: 'https://youtube.com/'
    },
    {
      appName: 'Reddit EOS',
      imageName: 'icons8-reddit-48.png',
      url: 'https://www.reddit.com/r/eos/'
    },
    {
      appName: 'Investing with a Difference | Youtube',
      imageName: 'icons8-globe-40.png',
      url: 'https://www.youtube.com/channel/UC6SxkB3kM4uNs_yIU0Lqo_w'
    },
    {
      appName: 'The Modern Investor | Youtube',
      imageName: 'icons8-globe-40.png',
      url: 'https://www.youtube.com/channel/UC-5HLi3buMzdxjdTdic3Aig'
    },
    {
      appName: 'EOS Tracker',
      imageName: 'icons8-globe-40.png',
      url: 'https://eostracker.io/'
    },
    {
      appName: 'EOS Air Drops Goggle Docs',
      imageName: 'icons8-globe-40.png',
      url: 'https://docs.google.com/spreadsheets/d/10YwFRklMpu99OzqzUUVXhwP4SAytlUOje29WMgtUqe0/htmlview'
    },
    {
      appName: 'All Things EOS',
      imageName: 'icons8-globe-40.png',
      url: 'http://allthingseos.com/'
    },
    {
      appName: 'Bloks.io',
      imageName: 'icon-blok.png',
      url: 'https://bloks.io/'
    },
    {
      appName: 'EOS Resource Planner',
      imageName: 'icons8-globe-40.png',
      url: 'https://www.eosrp.io/'
    },
    {
      appName: 'Dapp Radar',
      imageName: 'icon-dapp-radar.png',
      url: 'https://dappradar.com/eos-dapps'
    }
  ];

  /** toggle sidebar visibility status */
  toggleAccountSideBar(): void {
    this._sideBarVisible = !this._sideBarVisible;
    this._sideBarVisibilityStream.next(this._sideBarVisible);
  }

  changeBackground(image: string) {
    this._backgroundStream.next(image);
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

  get backgroundStream(): Subject<string> {
    return this._backgroundStream;
  }

  get windowShortcutApps(): object[] {
    return this._windowShortcutApps;
  }

  get apps(): object[] {
    return this._apps;
  }
}
