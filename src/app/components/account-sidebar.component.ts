import {Component, HostListener, OnInit} from '@angular/core';
import {AccountSidebarManagerService} from '../services/account-sidebar-manager.service';
import {split} from 'ts-node';


@Component({
  selector: 'app-account-sidebar',
  templateUrl: '../templates/account-sidebar.component.html',
  styleUrls: ['../app.component.css']
})
export class AccountSideBarComponent implements OnInit {
  public sideBarVisibility = false;
  public accountInfo = {
    accountName: '',
    created: '',
    eosUnstaked: 0,
    eosStaked: 0
  };
  public accountResources: object;
  public accountTransactions: object;
  public test = 10;
  public currencies = [];
  public testStyle = {'float':'left', 'width':'33%', 'background-color':'white', 'color': 'black', 'text-align': 'center'};

  constructor(private accountSidebarSvc: AccountSidebarManagerService) {}

  ngOnInit() {
    this.accountSidebarSvc.userSideBarSource.subscribe(value => {this.sideBarVisibility = value;});
    this.accountSidebarSvc.getAccountInfo()
      .subscribe(value => {
        this.formatAccountInfo(value);

        /** format EOS currency because it comes from a differenct source */
        this._formatEosCurrency(this.accountInfo);

        /** get all currencies in account and push to this.currencies */
        this.accountSidebarSvc.getAccountCurrencies()
          .subscribe(currency => {
            currency.forEach(value => {
              const splitValue = value[0].split(' ');

              const holderObject = {
                amount: splitValue[0],
                symbol: splitValue[1]
              };
              this.currencies.push(holderObject);
            });
            console.log(this.currencies);
          });
      });

  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.sideBarVisibility === true) {
        this.accountSidebarSvc.toggleAccountSideBar();
      }
    }
  }

  private formatAccountInfo(value: object) {
    this.accountInfo = {
      accountName: value['account_name'],
      created: value['created'],
      eosUnstaked: value['core_liquid_balance'].split(' ')[0],
      eosStaked: value['voter_info']['staked']
    };
  }

  private _formatEosCurrency(eosAccountValue: object) {

    const totalEOS = (eosAccountValue['eosStaked']/10000) + Number(eosAccountValue['eosUnstaked']);
    const holderObject = {
      amount: String(totalEOS),
      symbol: 'EOS'
    };
    this.currencies.push(holderObject);
  }
}
