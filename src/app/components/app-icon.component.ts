import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {WindowsService} from '../windows/services/windows.services';


@Component({
  selector: 'app-icon',
  templateUrl: '../templates/app-icon.component.html'
})
export class AppIconComponent implements OnInit {
  @Input() info: any;



  constructor(private windowsSvc: WindowsService) {

  }

  ngOnInit() {

  }

  // todo add prevent event default on doubleclick() or click
  openWindow() {
    this.windowsSvc.addWindow(this.info);
  }

}
