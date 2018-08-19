import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WindowAppInterface} from '../types/WindowAppInterface';
import {WindowsService} from '../services/windows.services';
import {FormControl} from '@angular/forms';
const psl = require('psl');
const urlParse = require('url-parse');

@Component({
  selector: 'app-window',
  templateUrl: '../templates/window.component.html',
})
export class WindowComponent implements OnInit {

  @Input() info: WindowAppInterface;
  @Input() index: number;
  public url = new FormControl('');
  public title = '';
  public isLoading: boolean;

  @ViewChild('viewHolder') webview;

  constructor(private windowsSvc: WindowsService) {}

  ngOnInit() {
    this.webview.nativeElement.addEventListener('dom-ready', () => {
      this.url.setValue(this.webview.nativeElement.getURL());
      this.title = this.webview.nativeElement.getTitle();
    });

    this.webview.nativeElement.addEventListener('did-start-loading', () => {
      this.isLoading = true;
    });

    this.webview.nativeElement.addEventListener('did-stop-loading', () => {
      this.isLoading = false;
    });

    // TODO fix this to that a new window pops up
    this.webview.nativeElement.addEventListener('new-window', (event) => {
      this.webview.nativeElement.loadURL(event.url);
    });

  }

  goToUrl(event) {
    // TODO add check that not submitting an empty string
    if (event.keyCode === 13) {
      let formattedUrl = '';
      const url = this.url.value;

      // if there is not domain in the address search via google
      if (!psl.parse(url).domain) {
        const  googleSearch = 'http://www.google.com/search?';
        const urlSpaceReplaced = url.replace(' ', '+');
        formattedUrl = googleSearch + 'q=' + urlSpaceReplaced;
      } else if (psl.isValid(url)) {
        if (!url.includes('http://') || !url.includes('https://') ) {
          formattedUrl = 'https://' + url;
        }
      }

      this.webview.nativeElement.loadURL(formattedUrl);
      this.title = this.webview.nativeElement.getTitle();
    }
  }

  goBack(event) {
    this.webview.nativeElement.goBack();
  }

  goForward(event) {
    this.webview.nativeElement.goForward();
  }

  refreshPage(event) {
    this.webview.nativeElement.reloadIgnoringCache();
  }

  stopLoading(event) {
    this.webview.nativeElement.stop();
  }

  closeWindow(windowIndex: number) {
    this.windowsSvc.removeWindow(windowIndex);
  }


}



