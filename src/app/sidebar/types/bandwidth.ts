export class Bandwidth {
  public maxBandwidth;
  public usedBandwidth;
  public barWidth;
  public totalBandwidthStaked;
  public percentageUsed;

  constructor(rawBandwidthInfo: object, bandwidthStakedTokens: number) {
    this.maxBandwidth = Number(rawBandwidthInfo['max'] / 1000000).toFixed(2);
    this.usedBandwidth = Number(rawBandwidthInfo['used'])// .toFixed(2);
    this.percentageUsed = ((rawBandwidthInfo['used'] / rawBandwidthInfo['max']) / 100).toFixed(2);
    this.barWidth = (this.percentageUsed < 10) ? '10%' : `${this.percentageUsed}%`;
    this.totalBandwidthStaked = bandwidthStakedTokens / 10000;
  }
}
