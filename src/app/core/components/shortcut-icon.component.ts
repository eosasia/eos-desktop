import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {WindowsService} from '../../windows/services/windows.services';
import {WindowService} from '../services/window.service';

@Component({
  selector: 'app-shortcut-icon',
  templateUrl: '../templates/shortcut-icon.component.html',
})
export class ShortcutIconComponent implements OnInit {
  topDistance: string;
  leftDistance: string;
  @Input() info: any;

  constructor(private el: ElementRef, private windowsSvc: WindowsService, private windowSvc: WindowService) {}

  ngOnInit() {
    this._setIconPosition();
  }

  private _setIconPosition() {
    const YDistance = Math.floor(Math.random() * ((this.windowSvc.windowSize.height - 50) - 50 + 1)) + 50;
    const XDistance = Math.floor(Math.random() * ((this.windowSvc.windowSize.width - 70) - 70 + 1)) + 70;

    this.topDistance = String(YDistance) + 'px';
    this.leftDistance = String(XDistance) + 'px';
  }

  openWindow() {
    this.windowsSvc.addWindow(this.info);
  }

}
