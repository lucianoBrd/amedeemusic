import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { List } from 'src/app/shared/models/list.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { Video } from 'src/app/shared/models/video.interface';
import { LanguageService } from 'src/app/shared/service/language.service';
import { VideoDescription } from 'src/app/shared/models/videoDescription.interface';
import { VideoService } from 'src/app/shared/service/video.service';
import { Lightbox } from 'ng-gallery/lightbox';
import { GalleryItem, YoutubeItem, ImageSize, Gallery as NgGallery, ThumbnailsPosition } from 'ng-gallery';

@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
  styleUrls: ['./page-video.component.scss'],
})
export class PageVideoComponent implements OnInit, OnDestroy {
  public videos: Video[];
  public listVideos: List<Video>;
  public language: Language;
  public items: GalleryItem[];
  public videoImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'video/';

  public currentPage: number;
  public totalPage: number;

  public route: string = '/api/videos';
  public paginationRoute: string = this.route;
  public filterRoute: string = this.route + '/filter';
  public filtersPagination: string = '';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService,
    private paginationService: PaginationService,
    private readonly videoService: VideoService,
    public ngGallery: NgGallery, 
    public lightbox: Lightbox,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.listOfVideos);
    this.metaService.setKeywords(this.language.listOfVideos);
    this.metaService.setDescription(this.language.listOfVideos);

    this.getVideos(this.route);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSearch(search: string) {
    if(!search?.length) {
      this.paginationRoute = this.route;
    } else {
      this.paginationRoute = this.filterRoute;
    }
    this.filtersPagination = '&search=' + search;
  }

  public getVideos = (route: string) => {
    this.listVideos = undefined;
    this.videos = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Video>) => {
        this.listVideos = data;
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
        this.listVideos['hydra:member'] = videos;
        this.videos = videos;

        this.currentPage = this.paginationService.getPageNumber(route);
        this.totalPage = this.paginationService.getTotalPageNumber<Video>(this.listVideos);

        let keywords:string = this.language.listOfVideos;

        for (let index = 0; index < this.videos.length; index++) {
          const video: Video = this.videos[index];
          keywords += ',' + video.name;
          if (video.videoDescription) {
            keywords += ',' + video.videoDescription.description;
          }
        }

        this.metaService.setKeywords(keywords);

        this.updateNgGallery();
      },
      (error) => {
        this.listVideos = null;
        this.videos = [];

        this.updateNgGallery();
      }
    );
  }

  updateNgGallery() {
    this.items = this.videos.map(
      item => new YoutubeItem({ 
        src: (this.videoService.youtubeParser(item.link) ? new String(this.videoService.youtubeParser(item.link)).toString() : item.link),
        thumb: (this.videoImagePath + item.image),
        autoplay: true,
      })
    );
    
    const lightboxRef = this.ngGallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }

}
