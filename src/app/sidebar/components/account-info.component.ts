import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {SidebarService} from '../services/sidebar.service';
import {ScatterService} from '../../core/services/scatter.service';


@Component({
  selector: 'app-account-info',
  templateUrl: '../templates/account-info.component.html'
})
export class AccountInfoComponent implements OnInit {
  public accountName: string;
  public stakedEOS: number;
  public unstakedEOS: number;
  public totalEOS: number;

  constructor(private accountSvc: AccountService, private sidebarSvc: SidebarService, private scatterSvc: ScatterService) {}

  // TODO handle what to present if account does not exist
  
  ngOnInit() {

    // set basic account information
    this.scatterSvc.identityStream
      .subscribe(result => {
        if (result['name'] !== 'anonymous') {
          this.sidebarSvc
            .getAccountInfo(result['accounts'][0]['name'])
            .subscribe(res => {
              this.accountName = res['account_name'];
              this._setEOSBalances(res);
            });
        }
        this.accountName = 'No account available';
      });
  }

  // formats and set EOS Balances
  private _setEOSBalances(accountInfo: object) {
    // calculate total staked EOS
    const cpuStaked = parseFloat(accountInfo['total_resources']['cpu_weight'].split(' ')[0]);
    const netStaked = parseFloat(accountInfo['total_resources']['net_weight'].split(' ')[0]);
    this.stakedEOS = cpuStaked + netStaked;

    // calculate total unstaked EOS
    this.unstakedEOS = parseFloat(accountInfo['core_liquid_balance'].split(' ')[0]);

    // calculate total EOS
    this.totalEOS = this.stakedEOS + this.unstakedEOS;
  }
}


