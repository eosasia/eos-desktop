import {WindowAppInterface} from './WindowAppInterface';

export class WindowApp implements WindowAppInterface {

  private _appName: string;
  private _imageUrl: string;
  private _url: string;


  constructor(info: WindowAppInterface) {
    this._appName = info.appName;
    this._imageUrl = info.imageUrl;
    this._url = info.url;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get url(): string {
    return this._url;
  }
  get appName(): string {
    return this._appName;
  }

}
