import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgxElectronModule} from 'ngx-electron';

/* App Root */
import {AppComponent} from './app.component';

/* Feature Modules */
import {CoreModule} from './core/core.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {WindowsModule} from './windows/windows.module';


// TODO DELETE AND UNINSTALL THIS AND CHECK THE ANGULAR.JSON FILE AS WELL
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {MenuBarComponent} from './components/menu-bar.component';
import {SideBarComponent} from './components/side-bar.component';
import {WebviewDirective} from './webview.directive';
import {AppIconComponent} from './components/app-icon.component';
import {AngularDraggableModule } from 'angular2-draggable';




@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      FontAwesomeModule,
      AngularDraggableModule,
      SidebarModule,
      NgxElectronModule,
      WindowsModule
    ],
    declarations: [
      AppComponent,
      MenuBarComponent,
      SideBarComponent,
      WebviewDirective,
      AppIconComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
