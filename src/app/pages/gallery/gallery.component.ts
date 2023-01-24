import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IImage } from '../simple-catalog/simple-catalog.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  activeZoom = false;
  imageSelected = '';
  indexMenu = 0;
  imagesToShow: IImage[] = [];
  images: IImage[] = [
    {
      url: './assets/temp/photos/handtufted/1hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/2hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/3hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/4hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/5hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/6hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/7hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/8hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/9hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/10hand.png',
      idMenu: 1
    },    {
      url: './assets/temp/photos/handtufted/11hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/12hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/13hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/14hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/15hand.png',
      idMenu: 1
    },    {
      url: './assets/temp/photos/handtufted/16hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/17hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/18hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/19hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/20hand.png',
      idMenu: 1
    },
    {
      url: './assets/temp/photos/handtufted/21hand.png',
      idMenu: 1
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
  ];

  menus = [
    {
      idMenu: 1,
      name: "HANDTUFTED"
    },
    {
      idMenu: 2,
      name: "TELAR"
    },
    {
      idMenu: 3,
      name: "CUERO DE VACA"
    },
    {
      idMenu: 4,
      name: "SHAGGY"
    },
    {
      idMenu: 4,
      name: "ALPACA SURI"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectMenu(0);
  }

  selectImage(image: string) {
    if (!this.activeZoom) {
      this.activeZoom = true;
      this.imageSelected = image;
    }
  }

  selectMenu(index: number) {
    this.indexMenu = index;
    const menuSelected = this.menus[index];
    this.imagesToShow = this.images.filter((image: IImage) => image.idMenu === menuSelected.idMenu);
  }

  public zoomIn(event: any) {
    
    if (event) {

      const zoomer = event.currentTarget;
      let offsetX: number;
      let offsetY: number = 0;
      let x: number;
      let y: number;

      event.offsetX ? offsetX = event.offsetX : offsetX = event.touches[0].pageX;
      event.offsetY ? offsetY = event.offsetY : offsetX = event.touches[0].pageX;

      x = offsetX / zoomer.offsetWidth * 100;
      y = offsetY / zoomer.offsetHeight * 100;

      zoomer.style.backgroundPosition = x + '% ' + y + '%';
      
  
    }
  }

  public zoomOut(event: any) {
  
  }

}
