import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BrowserService} from './core/services/browser.service';
import {WindowService} from './core/services/window.service';
import {ShortcutIconComponent} from './core/components/shortcut-icon.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sideBarVisibility = false;
  public windows;
  public shortCutIcons;

  @ViewChild('desktopWindow') window;

  constructor(private browserSvc: BrowserService, private windowSvc: WindowService) {}

  ngOnInit() {
    this.windows = this.browserSvc.openWindows;
    this.windowSvc.windowSize = { width: this.window.nativeElement.offsetWidth, height: this.window.nativeElement.offsetHeight };
    this.shortCutIcons = this.browserSvc.windowShortcutApps;
  }

  closeWindow(windowIndex: number) {
    this.browserSvc.removeWindow(windowIndex);
  }

}
