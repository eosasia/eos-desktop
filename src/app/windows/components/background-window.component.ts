import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WindowsService} from '../services/windows.services';
import {AppService} from '../../core/services/app.service';

@Component({
  selector: 'app-background-window',
  templateUrl: '../templates/background-window.component.html'
})
export class BackgroundWindowComponent implements OnInit {

  public backgrounds: string[];

  @Output() close: EventEmitter<any> = new EventEmitter();


  constructor(private windowsSvc: WindowsService, private appSvc: AppService) { }

  ngOnInit() {
    this.backgrounds = this.windowsSvc.backgrounds;
  }

  closeWindow(event) {
    this.close.emit(false);
  }

  changeBackground(image: string) {
    this.appSvc.changeBackground(image);
  }

}
