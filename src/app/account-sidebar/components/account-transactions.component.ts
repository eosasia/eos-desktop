import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-account-transactions',
  templateUrl: '../templates/account-transactions.component.html'
})
export class AccountTransactionsComponent implements OnInit {
  @Input() info: any;

  constructor() {}

  ngOnInit() {}

}
