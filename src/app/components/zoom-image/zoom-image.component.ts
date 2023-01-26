import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.scss']
})
export class ZoomImageComponent implements OnInit {

  @Input()
  activeZoom: boolean = false;
  
  @Input()
  imageUrl: string = './assets/img/1.jpeg';

  @Output()
  closeZoom: EventEmitter<boolean> = new EventEmitter();

  public value = true;


  constructor() { }

  ngOnInit() {
  };
  
  public zoomIn(event: any) {
    
    if (event) {

/*       const zoomer = event.currentTarget;
      let offsetX: number;
      let offsetY: number = 0;
      let x: number;
      let y: number;

      event.offsetX ? offsetX = event.offsetX : offsetX = event.touches[0].pageX;
      event.offsetY ? offsetY = event.offsetY : offsetX = event.touches[0].pageX;

      x = offsetX / zoomer.offsetWidth * 100;
      y = offsetY / zoomer.offsetHeight * 100; */

      // zoomer.style.backgroundPosition = 10 + '% ' + 10 + '%';
      
  
    }
  }

  public zoomOut(event: any) {
  }

  clickOut() {
    this.closeZoom.emit(true);
/*     this.showBigImage = false; */
   /*  this.zoomActive.emit(false); */

  }
}
