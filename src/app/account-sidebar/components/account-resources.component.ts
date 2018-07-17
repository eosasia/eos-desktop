import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';



class CPU {
  public maxCPU;
  public usedCPU;
  public barWidth;
  public totalCPUStaked;
  public percentageUsed;

  constructor(rawCPUInfo: object, cpuStakedTokens: number) {
    this.maxCPU = Number(rawCPUInfo['max'] / 1000000).toFixed(2);
    this.usedCPU = Number(rawCPUInfo['used'] / 1000).toFixed(2);
    this.percentageUsed = ((rawCPUInfo['used'] / rawCPUInfo['max']) / 100).toFixed(2);
    this.barWidth = (this.percentageUsed < 1) ? '10px' : `${this.percentageUsed}px`;
    this.totalCPUStaked = cpuStakedTokens / 10000;
  }
}

class BandWidth {
  public maxBandwidth;
  public usedBandwidth;
  public barWidth;
  public totalBandwidthStaked;
  public percentageUsed;

  constructor(rawBandwidthInfo: object, bandwidthStakedTokens: number) {
    this.maxBandwidth = Number(rawBandwidthInfo['max'] / 1000000).toFixed(2);
    this.usedBandwidth = Number(rawBandwidthInfo['used'])// .toFixed(2);
    this.percentageUsed = ((rawBandwidthInfo['used'] / rawBandwidthInfo['max']) / 100).toFixed(2);
    this.barWidth = (this.percentageUsed < 1) ? '10px' : `${this.percentageUsed}px`;
    this.totalBandwidthStaked = bandwidthStakedTokens / 10000;
  }
}

class Memory {
  public maxMemory;
  public usedMemory;
  public barWidth;
  public percentageUsed;

  constructor() {
    console.log(this);
  }
}


@Component({
  selector: 'app-account-resources',
  templateUrl: '../templates/account-resources.component.html'
})
export class AccountResourcesComponent implements OnInit {
  public cpuInfo: CPU;
  public bandwidthInfo: BandWidth;
  public ramInfo: Memory;

  constructor(private sidebarSvc: SidebarService) {}

  ngOnInit() {
    this._getAccountInfo();
  }


  private _getAccountInfo() {
    this.sidebarSvc.getAccountInfo()
      .subscribe(result => {
        this.cpuInfo = new CPU(result['cpu_limit'], result['cpu_weight']);
        this.bandwidthInfo = new BandWidth(result['net_limit'], result['net_weight']);
        this.ramInfo = new Memory();
        console.log(result);
      });

  }

}
