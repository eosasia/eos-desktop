import {Component, OnInit} from '@angular/core';
import {BrowserService} from '../core/services/browser.service';



@Component({
  selector: 'app-side-bar',
  templateUrl: '../templates/side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  apps: object;

  constructor(private browserSvc: BrowserService) {}

  ngOnInit() {
    this.apps = this.browserSvc.apps;
  }

}
