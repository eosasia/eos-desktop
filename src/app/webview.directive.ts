import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {BrowserService} from './services/browser.service';

@Directive({
  selector: 'webview'
})
export class WebviewDirective implements OnInit{

  @Input() url;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.src = this.url;
  }

}
