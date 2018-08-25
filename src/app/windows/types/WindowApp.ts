import {WindowAppInterface} from './WindowAppInterface';

export class WindowApp implements WindowAppInterface {
  private _url: string;

  constructor(info: WindowAppInterface) {
    this._url = info.url;
  }

  get url(): string {
    return this._url;
  }

}
