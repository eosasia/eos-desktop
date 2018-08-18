import {ActionInterface} from './interfaces/ActionInterface';

export class Action {

  private _actionName: string;
  private _account: string;
  private _data: string;
  private _time: Date;
  private _txId: string;

  constructor(info: ActionInterface) {
    this._actionName = info.action_trace.act.name;
    this._account = info.action_trace.act.account;
    this._data = JSON.stringify(info.action_trace.act.data);
    this._time = new Date(info.block_time);
    this._txId = info.action_trace.trx_id;
  }

  public toString() {
    console.log(`
    Action Name: ${this._actionName}
    Account: ${this._account}
    Data: ${this._data}
    time: ${this._time}
    `);
  }

  public getTrxIdFormatted() {
    return this._txId.substring(0, 6) + '...';
  }

  get actionName(): string {
    return this._actionName;
  }

  get account(): string {
    return this._account;
  }

  get data(): string {
    return this._data;
  }

  get time(): Date {
    return this._time;
  }

  get txId(): string {
    return this._txId;
  }
}
