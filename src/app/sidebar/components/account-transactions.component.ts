import {Component, Input, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';

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
  @Input() info: any;
  transactions: Transaction[] =[];

  constructor(private sidebarSvc: SidebarService) {}

  ngOnInit() {
    this.sidebarSvc
      .getTransactions()
      .subscribe(result => {

        result['actions'].forEach(action => {
          this.transactions.push(new Transaction(action));
        });

      });
  }

}
