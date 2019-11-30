import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'app-member-photos',
  templateUrl: './member-photos.component.html',
  styleUrls: ['./member-photos.component.scss']
})
export class MemberPhotosComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: 'https://cdn.pixabay.com/photo/2013/07/18/15/02/child-164318__340.jpg',
        medium: 'https://cdn.pixabay.com/photo/2013/07/18/15/02/child-164318__340.jpg',
        big: 'https://cdn.pixabay.com/photo/2013/07/18/15/02/child-164318__340.jpg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2018/03/22/11/35/super-hero-3250148__340.jpg',
        medium: 'https://cdn.pixabay.com/photo/2018/03/22/11/35/super-hero-3250148__340.jpg',
        big: 'https://cdn.pixabay.com/photo/2018/03/22/11/35/super-hero-3250148__340.jpg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg',
        medium: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg',
        big: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg',
        medium: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg',
        big: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg'
      },
      {
        small: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg',
        medium: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg',
        big: 'https://cdn.pixabay.com/photo/2016/12/05/21/55/super-woman-1885016__340.jpg'
      }
    ];
  }
}
