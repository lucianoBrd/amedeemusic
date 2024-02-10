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
import { VideoService } from 'src/app/shared/service/video.service';
import { List } from 'src/app/shared/models/list.interface';
import { LocaleService } from 'src/app/shared/service/locale.service';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss']
})
export class MusicVideoComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public locale: string;
  public videos: Video[];
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public videoImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'video/';

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private artistService: ArtistService,
    private modalService: NgbModal,
    private readonly videoService: VideoService,
    private localeService: LocaleService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.locale = data;
    });
    
    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/videos/lasts').pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Video>) => {
        let videos: Video[] = data['hydra:member'];
        if (videos) {
          for (let i = 0; i < videos.length; i++) {
            let video: Video = videos[i];
            video.safeVideoLink = this.videoService.getSafeVideoLink(video.link);
            
            if (video.videoDescriptions) {
              let videoDescriptions: VideoDescription[] = video.videoDescriptions;
              videoDescriptions.sort((a, b) => a.id - b.id);

              for (let j = videoDescriptions.length - 1; j >= 0; j--) {
                const videoDescription: VideoDescription = videoDescriptions[j];
                if (videoDescription.local.local == LanguageService.getLanguageCodeOnly()) {
                  video.videoDescription = videoDescription;
                  break;
                }
              }
            }
          }
        }
        this.videos = videos;
      },
      (error) => {
        this.videos = [];
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

  videoCarouselOptions={
    items: 1,
    autoHeight: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left fa-xl" aria-hidden="true"></i>', '<i class="fa-solid fa-arrow-right fa-xl" aria-hidden="true"></i>'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }
}
