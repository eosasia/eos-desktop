import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Ram} from '../types/ram';
import {Bandwidth} from '../types/bandwidth';
import {CPU} from '../types/cpu';


@Component({
  selector: 'app-account-resources',
  templateUrl: '../templates/account-resources.component.html'
})
export class AccountResourcesComponent implements OnInit {
  public cpuInfo: CPU;
  public bandwidthInfo: Bandwidth;
  public ramInfo: Ram;

  constructor(private sidebarSvc: SidebarService) {}

  ngOnInit() {
    this._getAccountInfo();
  }

  /** get account info which includes resources stats */
  private _getAccountInfo() {
    // this.sidebarSvc.getAccountInfo()
    //   .subscribe(result => {
    //     /** set CPU resources */
    //     this.cpuInfo = new CPU(result['cpu_limit'], result['cpu_weight']);
    //
    //     /** set Bandwidth resources */
    //     this.bandwidthInfo = new Bandwidth(result['net_limit'], result['net_weight']);
    //
    //     /** set RAM resources */
    //     this.ramInfo = new Ram(result['ram_quota'], result['ram_usage']);
    //     console.log(result);
    //   });
  }

}
