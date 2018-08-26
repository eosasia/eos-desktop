import { Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {WindowService} from '../../core/services/window.service';


@Component({
  selector: 'app-account-sidebar',
  templateUrl: '../templates/sidebar.component.html',
  styleUrls: ['../styles/sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public sideBarVisibility = this.windowManagerSvc.sideBarVisible;

  constructor(private sidebarSvc: SidebarService, private windowManagerSvc: WindowService) {}

  ngOnInit() {

    /** subscribe to stream for toggling sidebar visibility */
    this.windowManagerSvc.sideBarVisibilityStream
      .subscribe(value => {
        this.sideBarVisibility = value;
      });
  }

  /** on press ESC hide sidebar if sidebarVisibilty === true */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.sideBarVisibility === true) {
        this.windowManagerSvc.toggleAccountSideBar();
      }
    }
  }


  // TODO add to all components don't get account details if there is an error with the identity
}
