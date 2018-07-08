import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {MenuBarComponent} from './components/menu-bar.component';
import {SideBarComponent} from './components/side-bar.component';
import {WebviewDirective} from './webview.directive';
import {AppIconComponent} from './components/app-icon.component';
import {BrowserService} from './services/browser.service';
import {WindowManagerService} from './services/window-manager.service';
import {AccountSideBarComponent} from './components/account-sidebar.component';
import { AngularDraggableModule } from 'angular2-draggable';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    WebviewDirective,
    AppIconComponent,
    AccountSideBarComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularDraggableModule
  ],
  providers: [
    BrowserService,
    WindowManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
