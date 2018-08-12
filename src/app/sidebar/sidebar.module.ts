import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar.component';
import {AccountResourcesComponent} from './components/account-resources.component';
import {AccountTokensComponent} from './components/account-tokens.component';
import {AccountTransactionsComponent} from './components/account-transactions.component';
import {AccountInfoComponent} from './components/account-info.component';
import {ComponentList} from './components/_components';
import {SidebarService} from './services/sidebar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...ComponentList
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    SidebarService
  ]
})
export class SidebarModule { }
