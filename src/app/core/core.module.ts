import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule } from '@angular/common';
import {BrowserService} from './services/browser.service';
import {AccountService} from './services/account.service';
import {WindowService} from './services/window.service';
import {ShortcutIconComponent} from './components/shortcut-icon.component';
import {DraggableDirective} from './directives/draggable.directive';
import {ScatterService} from './services/scatter.service';
import {MenuBarComponent} from './components/menu-bar.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    ShortcutIconComponent,
    DraggableDirective,
    MenuBarComponent
  ],
  providers:    [
    BrowserService,
    AccountService,
    WindowService,
    ScatterService
  ],
  exports: [
    ShortcutIconComponent,
    DraggableDirective,
    MenuBarComponent
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
