import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgxElectronModule} from 'ngx-electron';
import {AngularDraggableModule } from 'angular2-draggable';

/* App Root */
import {AppComponent} from './app.component';

/* Feature Modules */
import {CoreModule} from './core/core.module';
import {WindowsModule} from './windows/windows.module';
import {SidebarModule} from './sidebar/sidebar.module';


@NgModule({
    imports: [
      CoreModule,
      SidebarModule,
      BrowserModule,
      HttpClientModule,
      AngularDraggableModule,
      NgxElectronModule,
      WindowsModule
    ],
    declarations: [
      AppComponent
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
