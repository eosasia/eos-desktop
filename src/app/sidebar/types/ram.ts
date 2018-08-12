export class Ram {
  public maxMemory;
  public usedMemory;
  public barWidth;
  public percentageUsed;

  // TODO finish implementing formating of ram numbers
  constructor(ram_quota: number, ram_usage: number) {
    this.maxMemory = ram_quota;
    this.usedMemory = ram_usage;
    console.log(this.usedMemory);
    this.percentageUsed = Number((ram_usage / ram_quota) * 100).toFixed(2);
    this.barWidth = (this.percentageUsed < 10) ? '10px' : `${this.percentageUsed}%`;
  }

}
