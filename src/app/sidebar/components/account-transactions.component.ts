import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {ScatterService} from '../../core/services/scatter.service';
import {Action} from '../types/Action';
import {GetActionInterface} from '../types/interfaces/GetActionInterface';


class Transaction {
  public from: string;
  public type: string;

  constructor(action) {
    this.type = action['action_trace']['act']['name'];
    // console.log(action['action_trace']['act']);
  }

  /** use switch statment to format transaction based on its type */
  private _setTransactionsType() {
    // switch(expression) {
    //   case 'transfer':
    //     // code block
    //     break;
    //   case 'newaccount':
    //     // code block
    //     break;
    //   case 'newaccount':
    //     // code block
    //     break;
    //   case 'newaccount':
    //     // code block
    //     break;
    //   case 'newaccount':
    //     // code block
    //     break;
    //   default:
    //     // code block
  }

}


@Component({
  selector: 'app-account-transactions',
  templateUrl: '../templates/account-transactions.component.html'
})
export class AccountTransactionsComponent implements OnInit {

  actions: Action[] = [];

  constructor(private sidebarSvc: SidebarService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.scatterSvc.identityStream
      .subscribe(result => {
        if (result['name'] !== 'anonymous') {
          const account_name = result['accounts'][0]['name'];
          this.sidebarSvc
            .getTransactions(account_name)
            .subscribe((res: GetActionInterface) => {
              res.actions.forEach(item => {
                const action = new Action(item);
                this.actions.push(action);
              });
            });
        }
      });



  }

}
