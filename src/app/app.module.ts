import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {MenuBarComponent} from './components/menu-bar.component';
import {SideBarComponent} from './components/side-bar.component';
import {WebviewDirective} from './webview.directive';
import {AppIconComponent} from './components/app-icon.component';
import {BrowserService} from './services/browser.service';
import {AccountSidebarManagerService} from './services/account-sidebar-manager.service';
import {AccountSideBarComponent} from './components/account-sidebar.component';
import { AngularDraggableModule } from 'angular2-draggable';
import {WindowHolderComponent} from './components/window-holder.component';
import {WindowComponent} from './components/window.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    WebviewDirective,
    AppIconComponent,
    AccountSideBarComponent,
    WindowHolderComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularDraggableModule
  ],
  providers: [
    BrowserService,
    AccountSidebarManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
