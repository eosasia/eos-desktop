import {Component, OnInit, ViewChild} from '@angular/core';
import {WindowsService} from '../services/windows.services';
import {WindowApp} from '../types/WindowApp';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-window-holder',
  templateUrl: '../templates/window-holder.component.html'
})
export class WindowHolderComponent implements OnInit {
  public windows: WindowApp[];
  public backgroundWindowIsVisible: boolean;
  public dimensions: object;

  @ViewChild('holder') holder;

  constructor(private windowsSvc: WindowsService) { }

  ngOnInit() {

    // get and set all open windows
    this.windows = this.windowsSvc.openWindows;

    // get and set dimensions of 'holder' element
    this.dimensions = this.holder.nativeElement.getBoundingClientRect();

    // get all backgrounds available for user
    this.windowsSvc.getAllBackgrounds();

    // listen for open local windows events
    this.windowsSvc
      .openLocalWindowStream
      .subscribe(result => {
        // TODO fix so that it opens the proper local window; could be a switch statment or if statement
        this.backgroundWindowIsVisible = true;
      });
  }

  public closeBackgroundWindow(event) {
    this.backgroundWindowIsVisible = event;
  }
}
