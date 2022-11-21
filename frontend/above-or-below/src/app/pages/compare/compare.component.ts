import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { Video } from '../../models/videos';

import {
  faHeart,
  faShare,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  scroller = 'new';
  faHeart = faHeart;
  faShare = faShare;
  faCommentDots = faCommentDots;
  vidsarr: Video[] = [];
  vsblockoverlay = '';
  vsblock = 'new';
  prevvid: Video | null = null;
  currentvid: Video | null = null;
  nextvid: Video | null = null;
  showstats: boolean = false;
  outcome: boolean = false;


  constructor(private videosservice: VideosService) {}

  ngOnInit(): void {
    this.vidsarr = this.videosservice.getvideos();
    this.prevvid = this.vidsarr[0];
    this.currentvid = this.vidsarr[1];
  }
  currentinfo(type: string): number | string {
    if (this.currentvid !== null && this.showstats) {
      switch (type) {
        case 'likes':
          return this.currentvid.likes!;
        case 'shares':
          return this.currentvid.shares!;
        case 'comments':
          return this.currentvid.comments!;
        default:
          return '???';
      }
    }
    return '???';
  }
  afteranimation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.vsblockoverlay = 'done';
      }, 3000);
      setTimeout(() => {
        this.vsblockoverlay = '';
        this.vsblock = 'new';
        resolve('');
      }, 3500);
    });
  }
  onClick(type: string) {
    this.outcome = false;
    if (type === 'above' && this.prevvid!.likes! < this.currentvid!.likes!) {
      this.outcome = true;
    } else if (
      type === 'below' &&
      this.prevvid!.likes! >= this.currentvid!.likes!
    ) {
      this.outcome = true;
    } else {
      this.outcome = false;
    }
    this.showstats = true;
    this.vsblock = this.outcome ? 'win' : 'loss';
    if (this.outcome) {
      this.afteranimation().then(() => {
        this.scroller = 'win';
        this.showstats = false;
        this.handlewin();
      });
    }
  }
  handlewin() {
    setTimeout(() => {
      let prev: Video = this.vidsarr.shift()!;
      this.vidsarr.push(prev);
      this.prevvid = this.vidsarr[0];
      this.currentvid = this.vidsarr[1];
      this.scroller = 'new';
    }, 1500);
  }
}
