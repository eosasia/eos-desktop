import {Directive, ElementRef, Input} from '@angular/core';


@Directive({
  selector: 'webview'
})
export class WebviewDirective {

  @Input() url;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.src = this.url;
  }

}
