import {Component, HostListener, OnInit} from '@angular/core';
import {BrowserService} from './services/browser.service';
import {WindowManagerService} from './services/window-manager.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url;
  windows;
  sideBarVisibility = false;

  constructor(private browserService: BrowserService, private windowManagerService: WindowManagerService) {}

  ngOnInit() {
    this.url = this.browserService.currentUrl;
    this.windows = this.browserService.openWindows;
  }

  closeWindow(windowIndex: number) {
    this.browserService.removeWindow(windowIndex);
  }

}
