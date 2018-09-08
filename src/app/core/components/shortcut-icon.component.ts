import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {WindowsService} from '../../windows/services/windows.services';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-shortcut-icon',
  styleUrls: ['../styles/shortcut-icon.css'],
  templateUrl: '../templates/shortcut-icon.component.html',
})
export class ShortcutIconComponent implements OnInit {
  topDistance: string;
  leftDistance: string;
  @Input() info: any;
  isContextMenuVisible = false;
  rightPanelStyle: Object = {};

  constructor(private el: ElementRef, private windowsSvc: WindowsService, private appSvc: AppService) {}

  ngOnInit() {
    this._setIconPosition();
  }

  @HostListener('contextmenu', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    this.rightPanelStyle = {'left': event.clientX + 'px', 'top': event.clientY + 'px'};
    this.isContextMenuVisible = !this.isContextMenuVisible;
  }

  @HostListener('document:click', ['$event'])
  hideContextMenu(event: MouseEvent) {
    event.preventDefault();
    if (this.isContextMenuVisible) {
      this.isContextMenuVisible = false;
    }
  }

  private _setIconPosition() {
    const YDistance = Math.floor(Math.random() * ((this.appSvc.windowSize.height - 50) - 50 + 1)) + 50;
    const XDistance = Math.floor(Math.random() * ((this.appSvc.windowSize.width - 80) - 80 + 1)) + 70;

    this.topDistance = String(YDistance) + 'px';
    this.leftDistance = String(XDistance) + 'px';
  }

  openWindow() {
    this.windowsSvc.addWindow(this.info);
  }
}
