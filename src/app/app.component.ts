import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BrowserService} from './core/services/browser.service';
import {WindowService} from './core/services/window.service';
import {ScatterService} from './core/services/scatter.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sideBarVisibility = false;
  public windows;
  public shortCutIcons;
  public objExp = null;

  @ViewChild('desktopWindow') window;

  constructor(private browserSvc: BrowserService, private windowSvc: WindowService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.windows = this.browserSvc.openWindows;
    this.windowSvc.windowSize = { width: this.window.nativeElement.offsetWidth, height: this.window.nativeElement.offsetHeight };
    this.shortCutIcons = this.browserSvc.windowShortcutApps;
    // TODO add error handling and uncomment
    // this.scatterSvc.connectToScatter();
    this.scatterSvc.cofigureEosJs();
    this.windowSvc
      .backgroundStream
      .subscribe((result: string) => {
        const url = './assets/images/backgrounds/' + result;
        this.objExp = {
          'background-image': 'url(' + url + ')'
        };
      });
  }

  private closeWindow(windowIndex: number) {
    this.browserSvc.removeWindow(windowIndex);
  }

}

// "{'background-image': 'url(' + photo + ')'}"
// url('../images/purple-galaxy.jpg')
