export class CPU {
  private _maxCPU: number;
  private _usedCPU: number;
  private _availableCPU: number;
  private _percentageUsed: string ;
  private _stakedEOS: string;
  private _barWidth: string;

  constructor(info: ResourceLimitsInterface, stakedEOS: string) {
    this._maxCPU = info.max;
    this._usedCPU = info.used;
    this._availableCPU = info.available;
    this.percentageUsed = ((info.used / info.max) / 100).toFixed(2);
    this._stakedEOS = stakedEOS;
    this.barWidth = this._percentageUsed;
  }

  public toString() {
    console.log(`
    CPU Details:
    Max CPU: ${this._maxCPU}
    Used CPU: ${this._usedCPU}
    Available CPU: ${this._availableCPU}
    Percentage Used: ${this._percentageUsed}
    Staked EOS: ${this._stakedEOS}
    Bar Width: ${this._barWidth}
    `);
  }

  // TODO implement display in regular seconds when large enough
  // returns max CPU in milliseconds
  get maxCPU(): string {
    return String((this._maxCPU / 1000).toFixed(2)) + ' ' + 'ms';
  }

  // TODO implement display in micro or regular seconds when large enough
  // returns used CPU in microseconds
  get usedCPU(): string {
    return String(this._usedCPU) + ' ' + 'μs';
  }

  get percentageUsed(): string {
    return this._percentageUsed + '%';
  }

  set percentageUsed(value: string) {
    this._percentageUsed = value;
  }

  get stakedEOS(): string {
    return this._stakedEOS;
  }

  set barWidth(value: string) {
    this._barWidth = (Number(value) < 5.00) ? '5%' : value + '%';
  }

  get barWidth(): string {
    return this._barWidth;
  }
}
