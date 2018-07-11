import {Component, OnInit} from '@angular/core';
import {BrowserService} from '../core/services/browser.service';

@Component({
  selector: 'app-window-holder',
  templateUrl: '../templates/window-holder.component.html'
})
export class WindowHolderComponent implements OnInit {
  windows;

  constructor(private browserService: BrowserService) {}

  ngOnInit() {
    this.windows = this.browserService.openWindows;
  }

  closeWindow(windowIndex: number) {
    this.browserService.removeWindow(windowIndex);
  }

}
