import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Token} from '../types/Token';
import {ScatterService} from '../../core/services/scatter.service';


@Component({
  selector: 'app-account-tokens',
  templateUrl: '../templates/account-tokens.component.html'
})
export class AccountTokensComponent implements OnInit {
  public tokens: Token[] = [];

  constructor(private sideBarSvc: SidebarService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.scatterSvc.identityStream
      .subscribe(result => {
        if (result['name'] !== 'anonymous') {
          const account_name = result['accounts'][0]['name'];
          this.sideBarSvc
            .getAccountCurrencies(account_name)
            .subscribe((res: string[][]) => {
              res.forEach(currency => {
                const token = new Token(currency);
                // token.toString();
                this.tokens.push(token);
              });
            });
        }
      });
  }




}
