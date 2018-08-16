import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Ram} from '../types/ram';
import {Bandwidth} from '../types/bandwidth';
import {CPU} from '../types/CPU';
import {ScatterService} from '../../core/services/scatter.service';


@Component({
  selector: 'app-account-resources',
  templateUrl: '../templates/account-resources.component.html'
})
export class AccountResourcesComponent implements OnInit {
  public cpuInfo: CPU;
  public bandwidthInfo: Bandwidth;
  public ramInfo: Ram;

  constructor(private sidebarSvc: SidebarService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.scatterSvc.identityStream
      .subscribe(result => {
        if (result['name'] !== 'anonymous') {
          this.sidebarSvc
            .getAccountInfo(result['accounts'][0]['name'])
            .subscribe((res: AccountInfoInterface) => {
              this.cpuInfo = new CPU(res.cpu_limit, res.total_resources.cpu_weight);
              this.cpuInfo.toString();

              console.log('Net_Limit ', JSON.stringify(res.net_limit));
            });
        }
      });
  }
}
