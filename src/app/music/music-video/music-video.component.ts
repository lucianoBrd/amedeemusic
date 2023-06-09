import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Video } from 'src/app/shared/models/video.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';
import { VideoDescription } from 'src/app/shared/models/videoDescription.interface';
import { LanguageService } from 'src/app/shared/service/language.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss']
})
export class MusicVideoComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public video: Video;
  public videoDescription: VideoDescription;
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public videoImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'video/';

  public videoId;
  public safeVideoLink: SafeResourceUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private artistService: ArtistService,
    private modalService: NgbModal,
    private _sanitizer: DomSanitizer,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/videos/last').pipe(takeUntil(this.destroy$)).subscribe(
      (data: Video) => {
        if (data) {
          this.videoId = this.youtubeParser(data.link);
          if (this.videoId) {
            this.safeVideoLink = this._sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/' + this.videoId + '?autoplay=1');
          }
          
          if (data.videoDescriptions) {
            let videoDescriptions: VideoDescription[] = data.videoDescriptions;
            videoDescriptions.sort((a, b) => a.id - b.id);

            for (let index = videoDescriptions.length - 1; index >= 0; index--) {
              const videoDescription: VideoDescription = videoDescriptions[index];
              if (videoDescription.local.local == LanguageService.getLanguageCodeOnly()) {
                this.videoDescription = videoDescription;
                break;
              }
            }
            data.videoDescriptions = videoDescriptions;
          }
        }
        this.video = data;
      },
      (error) => {
        this.video = null;
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  youtubeParser(url: string){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
}
