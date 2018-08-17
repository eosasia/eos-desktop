import {ActionInterface} from './interfaces/ActionInterface';

export class Action {
  private _actionName: string;
  private _account: string;
  private _data: string;
  private _time: Date;

  constructor(info: ActionInterface) {
    this._actionName = info.action_trace.act.name;
    this._account = info.action_trace.act.account;
    this._data = JSON.stringify(info.action_trace.act.data);
    this._time = info.block_time;
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
}
