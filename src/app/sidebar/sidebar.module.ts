import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar.component';
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
