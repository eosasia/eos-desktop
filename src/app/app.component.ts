import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from './core/services/app.service';
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
  public objExp = {
    'background-image': 'url(' + './assets/images/backgrounds/wallpaper2you_347831.jpg' + ')'
  };

  @ViewChild('desktopWindow') window;

  constructor(private appSvc: AppService, private scatterSvc: ScatterService) {}

  ngOnInit() {
    this.appSvc.windowSize = { width: this.window.nativeElement.offsetWidth, height: this.window.nativeElement.offsetHeight };
    this.shortCutIcons = this.appSvc.windowShortcutApps;
    // TODO add error handling and uncomment
    // this.scatterSvc.connectToScatter();
    this.scatterSvc.configureEOSJS();
    this.appSvc
      .backgroundStream
      .subscribe((result: string) => {
        const url = './assets/images/backgrounds/' + result;
        this.objExp = {
          'background-image': 'url(' + url + ')'
        };
      });
  }
}

