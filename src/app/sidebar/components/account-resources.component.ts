import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {CPU} from '../types/CPU';
import {Bandwidth} from '../types/Bandwidth';
import {RAM} from '../types/RAM';
import {ScatterService} from '../../core/services/scatter.service';


@Component({
  selector: 'app-account-resources',
  templateUrl: '../templates/account-resources.component.html'
})
export class AccountResourcesComponent implements OnInit {
  public cpuInfo: CPU;
  public bandwidthInfo: Bandwidth;
  public ramInfo: RAM;

  constructor(private sidebarSvc: SidebarService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.scatterSvc.identityStream
      .subscribe(result => {
        if (result['name'] !== 'anonymous') {
          this.sidebarSvc
            .getAccountInfo(result['accounts'][0]['name'])
            .subscribe((res: AccountInfoInterface) => {
              this.cpuInfo = new CPU(res.cpu_limit, res.total_resources.cpu_weight);
              this.bandwidthInfo = new Bandwidth(res.net_limit, res.total_resources.net_weight);
              this.ramInfo = new RAM(res.ram_quota, res.ram_usage);
            });
        }
      });
  }
}
