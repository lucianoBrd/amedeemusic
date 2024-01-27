import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { Gallery } from 'src/app/shared/models/gallery.interface';
import { GalleryItem, ImageItem, VideoItem, ImageSize, Gallery as NgGallery, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { List } from 'src/app/shared/models/list.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-gallery',
  templateUrl: './page-gallery.component.html',
  styleUrls: ['./page-gallery.component.scss'],
})
export class PageGalleryComponent implements OnInit, OnDestroy {
  public galleries: Gallery[];
  public videoGalleries: Gallery[];
  public listGalleries: List<Gallery>;
  public language: Language;
  public items: GalleryItem[];
  public galleryImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'gallery/';

  public currentPage: number;
  public totalPage: number;

  public route: string = '/api/galleries';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService, 
    public ngGallery: NgGallery, 
    public lightbox: Lightbox,
    private paginationService: PaginationService,
    private sanitizer: DomSanitizer,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.gallery);
    this.metaService.setKeywords(this.language.gallery);
    this.metaService.setDescription(this.language.gallery);

    this.getGalleries(this.route);

    this.lightbox.opened.subscribe(res => {
      setTimeout(() => {
        const video: HTMLMediaElement = document.querySelector(".g-active-item video");
        if(video) {
          video.play();
        }
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public getGalleries = (route: string) => {
    this.listGalleries = undefined;
    this.galleries = undefined;
    this.videoGalleries = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Gallery>) => {
        this.listGalleries = data;
        this.galleries = [];
        this.videoGalleries = [];

        this.listGalleries['hydra:member'].forEach(g => {
          if (g.type === 'image') {
            this.galleries.push(g);
          } else {
            this.videoGalleries.push(g);
          }
        });

        this.currentPage = this.paginationService.getPageNumber(route);
        this.totalPage = this.paginationService.getTotalPageNumber<Gallery>(this.listGalleries);

        this.updateNgGallery();
      },
      (error) => {
        this.listGalleries = null;
        this.galleries = [];
        this.videoGalleries = [];

        this.updateNgGallery();
      }
    );
  }

  updateVideoUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updateNgGallery() {
    this.items = [
      ...this.galleries.map(
        item => new ImageItem({ 
          src: this.galleryImagePath + item.image, 
          thumb: this.galleryImagePath + item.image,
          alt: 'gallery-' + item.id 
        })
      ),
      ...this.videoGalleries.map(
        item => new VideoItem({ 
          //src: [{url: (this.galleryImagePath + item.image), type: item.mimeType}],
          thumb: 'assets/images/music/icons/play.png',
          poster: 'assets/images/music/icons/play.png',
          autoplay: true,
          controls: true
        })
      )
    ];
    
    const lightboxRef = this.ngGallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }

}
