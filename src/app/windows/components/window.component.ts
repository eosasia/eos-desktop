import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WindowAppInterface} from '../types/WindowAppInterface';
import {WindowsService} from '../services/windows.services';
import {FormControl} from '@angular/forms';

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

  }

  goToUrl(event) {
    if (event.keyCode === 13) {
      const url = this.url.value;
      const formattedUrl = 'http://' + url;
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
    this.webview.nativeElement.reload();
  }

  closeWindow(windowIndex: number) {
    this.windowsSvc.removeWindow(windowIndex);
  }


}



