import {Component, OnInit} from '@angular/core';
import {BrowserService} from '../services/browser.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: '../templates/side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  apps: object;

  constructor(private browserService: BrowserService) {}

  ngOnInit() {
    this.apps = this.browserService.apps;
  }

}
