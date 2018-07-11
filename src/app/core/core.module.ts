import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule } from '@angular/common';
import {BrowserService} from './services/browser.service';
import {AccountService} from './services/account.service';
import {WindowManagerService} from './services/windowManager.service';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    BrowserService,
    AccountService,
    WindowManagerService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
