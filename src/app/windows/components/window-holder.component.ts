import { Component, OnInit } from '@angular/core';
import {WindowsService} from '../services/windows.services';
import {WindowApp} from '../types/WindowApp';


@Component({
  selector: 'app-window-holder',
  templateUrl: '../templates/window-holder.component.html'
})
export class WindowHolderComponent implements OnInit {
  public windows: WindowApp[];

  constructor(private windowsSvc: WindowsService) { }

  ngOnInit() {
    this.windows = this.windowsSvc.openWindows;
  }
}
