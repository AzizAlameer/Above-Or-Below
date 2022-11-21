import { Injectable } from '@angular/core';
import {Video, moockvideos} from '../models/videos'
@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  getvideos() {
    return moockvideos
  }
}
