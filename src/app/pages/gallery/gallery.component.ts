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
      url: './assets/img/1.jpeg',
      idMenu: 1
    },
    {
      url: './assets/temp/test-photo.png',
      idMenu: 2
    },
    {
      url: './assets/temp/3-HANDT.png',
      idMenu: 3
    },
    {
      url: './assets/temp/4-HANDT.png',
      idMenu: 1
    },
    {
      url: './assets/temp/5-HANDT.png',
      idMenu: 2
    },
    {
      url: './assets/temp/6-HANDT.png',
      idMenu: 3
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

}
