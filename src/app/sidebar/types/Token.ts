// TODO change name to Token instead of Currencies
export class Token {

  private _symbol: string;
  private _amount: number;
  private _value: number;

  constructor(info: string[]) {
    const splitValue = info[0].split(' ');
    this._amount = Number(splitValue[0]);
    this._symbol = splitValue[1];
    this._value = 0;
  }

  get symbol(): string {
    return this._symbol;
  }

  get amount(): number {
    return this._amount;
  }

  get value(): number {
    return this._value;
  }

  public toString () {
    console.log(`
      Token Symbol: ${this._symbol}
      Token Amount: ${this._amount}
      Token Value: ${this._value}`);
  }

}
