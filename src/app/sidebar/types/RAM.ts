// TODO fix all getters and setters
// TODO check all percentage formulas
export class RAM {


  private _ram_quota: number;
  private _ram_usage: number;
  private _percentageUsed: number;
  private _barWidth: string;

  constructor(ram_quota: number, ram_usage: number) {
   this._ram_quota = ram_quota;
   this._ram_usage = ram_usage;
   this._percentageUsed = Number(((ram_usage / ram_quota) * 100).toFixed(2));
   this.barWidth = String(this._percentageUsed);
  }

  public toString () {
    console.log(`
      RAM Quota: ${this._ram_quota}
      RAM Usage: ${this._ram_usage}
      Percentage Used: ${this._percentageUsed}
      Bar Width: ${this._barWidth}
    `);
  }

  get ram_usage(): string {
    return (this._ram_usage / 1024 ).toFixed(2) + ' ' + 'KB';
  }

  get ram_quota():  string {
    return (this._ram_quota / 1024 ).toFixed(2) + ' ' + 'KB';
  }

  set barWidth(value: string) {
    this._barWidth = (Number(value) < 5.00) ? '5%' : value + '%';
  }

  get barWidth(): string {
    return this._barWidth;
  }

  get percentageUsed(): number {
    return this._percentageUsed;
  }



}
