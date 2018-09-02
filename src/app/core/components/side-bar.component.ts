import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: '../templates/side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  public apps: object;

  constructor(private appSvc: AppService) {}

  ngOnInit() {
    this.apps = this.appSvc.apps;
  }
}
