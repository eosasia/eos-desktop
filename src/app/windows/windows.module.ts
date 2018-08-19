import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WindowHolderComponent} from './components/window-holder.component';
import {WebviewDirective} from './directives/webview.directive';
import {AngularDraggableModule} from 'angular2-draggable';
import { WindowComponent } from './components/window.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularDraggableModule,
    ReactiveFormsModule
  ],
  declarations: [
    WindowHolderComponent,
    WebviewDirective,
    WindowComponent
  ],
  exports: [WindowHolderComponent]
})
export class WindowsModule { }
