import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  private _currentUrl = 'https://eos.feexplorer.io/';
  private _openWindows: object[] = [];
  // Create JSON FILE FOR THIS STUFF
  // TODO
  private _apps: object[] = [
    {
      appName: 'Zoom Browser',
      imageName: 'icons8-globe-40.png',
      url: 'https://yahoo.com/'
    },
    {
      appName: 'P2P Messenger',
      imageName: 'icons8-chat-40.png',
      url: 'https://yahoo.com/'
    },
    {
      appName: 'EOS App Store',
      imageName: 'icons8-shop-40.png',
      url: 'https://yahoo.com/'
    },
    {
      appName: 'EOS Flare',
      imageName: 'icons8-web-design-40.png',
      url: 'https://eosflare.io/'
    },
    {
      appName: 'EOS Park',
      imageName: 'icons8-web-design-40.png',
      url: 'https://eospark.com/'
    },
    {
      appName: 'EOS Fee Explorer',
      imageName: 'icons8-web-design-40.png',
      url: 'https://eos.feexplorer.io/'
    },
    {
      appName: 'EOS Network Monitor.io',
      imageName: 'icons8-nas-40.png',
      url: 'http://eosnetworkmonitor.io/'
    },
    {
      appName: 'EOS Bet',
      imageName: 'icons8-web-design-40.png',
      url: 'https://www.eosbet.io/'
    },
    {
      appName: 'Coin Market Cap',
      imageName: 'icons8-web-design-40.png',
      url: 'https://coinmarketcap.com'
    },
    {
      appName: 'Prospectors',
      imageName: 'icons8-web-design-40.png',
      url: 'https://prospectors.io/'
    },
    {
      appName: 'On Chain FX',
      imageName: 'icons8-web-design-40.png',
      url: 'https://onchainfx.com/'
    },
    {
      appName: 'Backgrounds',
      imageName: 'icons8-monitor-40.png',
      url: 'local'
    },
    {
      appName: 'Settings',
      imageName: 'icons8-settings-40-1.png',
      url: 'https://youtube.com/'
    }
  ];


  private _windowShortcutApps: object[] = [
    {
      appName: 'Youtube',
      imageName: 'icons8-globe-40.png',
      url: 'https://youtube.com/'
    },
    {
      appName: 'Reddit EOS',
      imageName: 'icons8-globe-40.png',
      url: 'https://www.reddit.com/r/eos/'
    },
    {
      appName: 'Investing with a Difference | Youtube',
      imageName: 'icons8-globe-40.png',
      url: 'https://www.youtube.com/channel/UC6SxkB3kM4uNs_yIU0Lqo_w'
    },
    {
      appName: 'The Modern Investor | Yotube',
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
      appName: 'How to Use EOS.js',
      imageName: 'icons8-globe-40.png',
      url: 'https://medium.com/coinmonks/how-to-use-eosjs-api-1-770b037b22ad'
    },
    {
      appName: 'Icon Set',
      imageName: 'icons8-globe-40.png',
      url: 'https://icons8.com/icon/set/web/office'
    },
    {
      appName: 'Bloks.io',
      imageName: 'icons8-globe-40.png',
      url: 'https://bloks.io/'
    },
    {
      appName: 'EOS Tool Kit',
      imageName: 'icons8-globe-40.png',
      url: 'https://eostoolkit.io/home'
    },
    {
      appName: 'EOS Resource Planner',
      imageName: 'icons8-globe-40.png',
      url: 'https://www.eosrp.io/'
    },
    {
      appName: 'EOS Network Monitor.io',
      imageName: 'icons8-globe-40.png',
      url: 'http://eosnetworkmonitor.io/'
    }
  ];

  get apps(): object[] {
    return this._apps;
  }
  get openWindows(): object[] {
    return this._openWindows;
  }

  get currentUrl(): string {
    return this._currentUrl;
  }

  set currentUrl(value: string) {
    this._currentUrl = value;
  }

  addWindow(window: object) {
    this._openWindows.push(window);
  }

  removeWindow(index: number) {
    this._openWindows.splice(index, 1);
  }

  get windowShortcutApps(): object[] {
    return this._windowShortcutApps;
  }

  constructor() { }

}
