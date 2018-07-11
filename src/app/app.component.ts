import {Component, HostListener, OnInit} from '@angular/core';
import {BrowserService} from './core/services/browser.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url;
  sideBarVisibility = false;
  windows;

  constructor(private browserService: BrowserService) {}

  ngOnInit() {
    this.windows = this.browserService.openWindows;
  }

  closeWindow(windowIndex: number) {
    this.browserService.removeWindow(windowIndex);
  }


}
