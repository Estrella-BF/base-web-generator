import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective {

  @Output()
  appClickOut: EventEmitter<MouseEvent> = new EventEmitter();

  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.appClickOut.emit(event);
    }
  }

  constructor(private elementRef: ElementRef) {}

}
