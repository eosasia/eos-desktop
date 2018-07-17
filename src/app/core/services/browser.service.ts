import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  private _currentUrl = 'https://eos.feexplorer.io/';
  private _openWindows: object[] = [];
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
      appName: 'EOS Tool Kit',
      imageName: 'icons8-web-design-40.png',
      url: 'https://eostoolkit.io/transfer'
    },
    {
      appName: 'Monster EOS',
      imageName: 'icons8-web-design-40.png',
      url: 'http://monstereos.io/'
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
      appName: 'Youtube',
      imageName: 'icons8-web-design-40.png',
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
      url: 'https://eostracker.io/accounts/haytkojugage'
    },
    {
      appName: 'EOS Air Drops Goggle Docs',
      imageName: 'icons8-globe-40.png',
      url: 'https://docs.google.com/spreadsheets/d/10YwFRklMpu99OzqzUUVXhwP4SAytlUOje29WMgtUqe0/htmlview'
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
    console.log(this._currentUrl);
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
