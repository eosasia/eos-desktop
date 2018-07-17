import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {SidebarService} from '../services/sidebar.service';


@Component({
  selector: 'app-account-info',
  templateUrl: '../templates/account-info.component.html'
})
export class AccountInfoComponent implements OnInit {
  public accountName: string;
  public info = {
    accountName: '',
    created: '',
    eosUnstaked: 0,
    eosStaked: 0
  };

  constructor(private accountSvc: AccountService, private sidebarSvc: SidebarService) {}

  ngOnInit() {
    /** set account name */
    this.accountName = this.accountSvc.eosAccountName;

    /** get, set and format basic account information */
    this.sidebarSvc.getAccountInfo()
      .subscribe(value => {
        /** format return value */
        this.formatAccountInfo(value);
      });
  }

  /** properly formats the account information */
  private formatAccountInfo(value: object) {
      this.info['accountName'] =  value['account_name'];
      this.info['created']  = value['created'];
      this.info['eosUnstaked']  = Number(value['core_liquid_balance'].split(' ')[0]);
      this.info['eosStaked'] =  Number(value['voter_info']['staked']);
  }
}


