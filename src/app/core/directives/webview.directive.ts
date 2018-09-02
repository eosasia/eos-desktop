import {Directive, ElementRef, Input, OnInit} from '@angular/core';


@Directive({
  selector: 'webview'
})
export class WebviewDirective implements OnInit{

  @Input() url;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.src = this.url;
  }

}
