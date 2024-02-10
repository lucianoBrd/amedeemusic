import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private readonly _sanitizer: DomSanitizer,) {}

  public getSafeVideoLink(link: string, parameters: string = ''): SafeResourceUrl {
    let safeVideoLink: SafeResourceUrl;
    const videoId: string|boolean = this.youtubeParser(link);
    if (videoId) {
      safeVideoLink = this._sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/' + videoId + '?autoplay=1' + parameters);
    }
    return safeVideoLink;
  }

  public youtubeParser(url: string): string|boolean {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
}
