// TODO fix all getters and setters
export class Bandwidth {

  private _maxBandwidth: number;
  private _usedBandwidth: number;
  private _availableBandwidth: number;
  private _percentageUsed: string;
  private _stakedEOS: string;
  private _barWidth: string;

  constructor(info: ResourceLimitsInterface, stakedEOS: string) {
    this._maxBandwidth = info.max;
    this.usedBandwidth = info.used;
    this.availableBandwidth = info.available;
    this.percentageUsed = ((info.used / info.max) / 100).toFixed(2);
    this.stakedEOS = stakedEOS;
    this.barWidth = this._percentageUsed;
  }

  public toString() {
    console.log(`
      Max Bandwidth: ${this._maxBandwidth}
      Used Bandwidth: ${this._usedBandwidth}
      Available Bandwidth: ${this._availableBandwidth}
      Percentage Used: ${this._percentageUsed}
      Staked EOS: ${this._stakedEOS}
      Bar Width: ${this._barWidth}
    `);
  }

  // TODO format for kilo and megabytes depending on size
  // returns bandwidth in megabytes
  // need to fix this formula it is incorrect
  get maxBandwidth(): string {
    return (this._maxBandwidth / 1000000).toFixed(2);
  }

  // TODO format for kilo and megabytes depending on size
  get usedBandwidth(): number {
    return this._usedBandwidth;
  }

  set usedBandwidth(value: number) {
    this._usedBandwidth = value;
  }

  get availableBandwidth(): number {
    return this._availableBandwidth;
  }

  set availableBandwidth(value: number) {
    this._availableBandwidth = value;
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

  set stakedEOS(value: string) {
    this._stakedEOS = value;
  }

  get barWidth(): string {
    return this._barWidth;
  }

  set barWidth(value: string) {
    this._barWidth = (Number(value) < 5.00) ? '5%' : value + '%';
  }
}
