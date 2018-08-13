export class Currency {
  public symbol: string;
  public amount: number;

  constructor(symbol: string, amount: number) {
    this.symbol = symbol;
    this.amount = amount;
  }
}
