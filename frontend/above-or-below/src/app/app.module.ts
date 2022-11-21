import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {VideosService} from './services/videos.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareComponent } from './pages/compare/compare.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Pipe, PipeTransform} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    CompareComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
