import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IImage } from '../simple-catalog/simple-catalog.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  activeZoom = false;
  showBigImage = false;
/* 
  @Output()
  zoomActive: EventEmitter<boolean> = new EventEmitter(); */
  
  images: IImage[] = [
    {
      url: './assets/img/1.jpeg'
    },
    {
      url: './assets/temp/2-HANDT.png'
    },
    {
      url: './assets/temp/3-HANDT.png'
    },
    {
      url: './assets/temp/4-HANDT.png'
    },
    {
      url: './assets/temp/5-HANDT.png'
    },
    {
      url: './assets/temp/6-HANDT.png'
    },
    /* {
      url: './assets/temp/7 HANDT.png'
    },
    {
      url: './assets/temp/8 HANDT.png'
    },
    {
      url: './assets/temp/9 HANDT.png'
    },
    {
      url: './assets/temp/10 HANDT.png'
    },
    {
      url: './assets/temp/11 HANDT.png'
    },
    {
      url: './assets/temp/12 HANDT.png'
    },
    {
      url: './assets/temp/13 HANDT.png'
    },
    {
      url: './assets/temp/14 HANDT.png'
    },
    {
      url: './assets/temp/15 HANDT.png'
    }, */
  ]

  constructor() { }

  ngOnInit(): void {
  }

/*   zoomActive(isActive: boolean) {
    console.log('is active zoom', isActive);
    
  } */


  selectImage(image: string) {
    this.showBigImage = true;
    this.activeZoom = true;
/*     this.zoomActive.emit(true); */
  }

}
