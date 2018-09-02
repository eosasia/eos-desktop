import {Component, Input, OnInit} from '@angular/core';
import {WindowsService} from '../../windows/services/windows.services';


@Component({
  selector: 'app-icon',
  templateUrl: '../templates/app-icon.component.html'
})
export class AppIconComponent implements OnInit {
  @Input() info: any;

  constructor(private windowsSvc: WindowsService) {}

  ngOnInit() {}

  openWindow() {
    if (this.info.url === 'local') {
        // send event to window holder to open the specified window
      this.windowsSvc.openLocalWindow(this.info);
    } else {
      this.windowsSvc.addWindow(this.info);
    }
  }
}
