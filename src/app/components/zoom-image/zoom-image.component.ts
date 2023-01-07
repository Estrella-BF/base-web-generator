import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.scss']
})
export class ZoomImageComponent implements OnInit {

  @Input()  activeZoom = false;
  @Output() activeZoomChange = new EventEmitter<boolean>(); 
  @Output() imageToZoom = new EventEmitter<string>(); 

  
  @Input()
  imageUrl: string = '';

  public value = true;


  constructor() { }

  ngOnInit() {
  };



  selectImage(image: string) {
    this.activeZoomChange.emit(true);
    this.imageToZoom.emit(image)
    console.log('click', image);
  }
}
