import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
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
    }


  ];

  constructor() { }

}
