import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule } from '@angular/common';
import {AccountService} from './services/account.service';
import {AppService} from './services/app.service';
import {DraggableDirective} from './directives/draggable.directive';
import {ScatterService} from './services/scatter.service';
import {ComponentList} from './components/_components';
import {WebviewDirective} from './directives/webview.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...ComponentList,
    DraggableDirective,
    WebviewDirective
  ],
  providers: [
    AccountService,
    AppService,
    ScatterService
  ],
  exports: [
    ...ComponentList,
    DraggableDirective,
    WebviewDirective
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
