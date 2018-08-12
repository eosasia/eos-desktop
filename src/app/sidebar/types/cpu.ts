export class CPU {
  public maxCPU;
  public usedCPU;
  public barWidth;
  public totalCPUStaked;
  public percentageUsed;

  constructor(rawCPUInfo: object, cpuStakedTokens: number) {
    this.maxCPU = Number(rawCPUInfo['max'] / 1000000).toFixed(2);
    this.usedCPU = Number(rawCPUInfo['used'] / 1000).toFixed(2);
    this.percentageUsed = ((rawCPUInfo['used'] / rawCPUInfo['max']) / 100).toFixed(2);
    this.barWidth = (this.percentageUsed < 1) ? '10%' : `${this.percentageUsed}%`;
    this.totalCPUStaked = cpuStakedTokens / 10000;
  }
}
