import {Component, Input, OnInit} from '@angular/core';
import {BrowserService} from '../services/browser.service';

@Component({
  selector: 'app-window',
  templateUrl: '../templates/window.component.html'
})
export class WindowComponent implements OnInit {
  @Input() info;

  constructor() {}

  ngOnInit() {

  }


}
