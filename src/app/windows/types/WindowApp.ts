import {WindowAppInterface} from './WindowAppInterface';

export class WindowApp implements WindowAppInterface {
  private _url: string;
  private _zIndex: number;

  constructor(info: WindowAppInterface, zIndex: number) {
    this._url = info.url;
    this._zIndex = zIndex;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  get zIndex(): number {
    return this._zIndex;
  }

  set zIndex(value: number) {
    this._zIndex = value;
  }
}
