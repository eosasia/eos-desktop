import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  private dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    // get the mouse cursor position at startup:
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    // // call a function whenever the cursor moves:
    document.onmousemove = this.elementDrag;
  }

  private elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    // set the element's new position:
    this.el.nativeElement.style.top = (this.el.nativeElement.offsetTop - this.pos2) + "px";
    this.el.nativeElement.style.left = (this.el.nativeElement.offsetLeft - this.pos1) + "px";

  }


  private closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }


}
