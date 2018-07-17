import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {BrowserService} from '../core/services/browser.service';


@Component({
  selector: 'app-icon',
  templateUrl: '../templates/app-icon.component.html'
})
export class AppIconComponent implements OnInit {
  @Input() info: any;

  constructor(private browserService: BrowserService) {

  }

  ngOnInit() {

  }

  openWindow() {
    console.log(this.info);
    this.browserService.addWindow(this.info);
  }

}
