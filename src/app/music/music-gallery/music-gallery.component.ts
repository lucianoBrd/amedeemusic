import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Language } from 'src/app/shared/models/language.interface';
import { Gallery } from 'src/app/shared/models/gallery.interface';
import { ConfigDB } from 'src/app/shared/data/config';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/shared/service/data.service';
import { TextService } from 'src/app/shared/service/text.service';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { Artist } from 'src/app/shared/models/artist.interface';
import { List } from 'src/app/shared/models/list.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { LocaleService } from 'src/app/shared/service/locale.service';

@Component({
  selector: 'app-music-gallery',
  templateUrl: './music-gallery.component.html',
  styleUrls: ['./music-gallery.component.scss']
})
export class MusicGalleryComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public locale: string;
  public galleries: Gallery[];
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public galleryImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'gallery/';


  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private artistService: ArtistService,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
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
    this.dataService.sendGetRequest('/api/galleries/lasts').pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Gallery>) => {
        let galleries: Gallery[] = data['hydra:member'];

        if (galleries && galleries.length > 0) {
          let emptyGallery: Gallery = {
            id: -1,
            image: undefined,
            extension: undefined,
            type: undefined,
            mimeType: undefined,
          };
          if (galleries.length == 1) {
            galleries.push(emptyGallery);
            galleries.push(emptyGallery);
          } else if (galleries.length == 2) {
            galleries.push(emptyGallery);
          }
        }
        this.galleries = galleries;
      },
      (error) => {
        this.galleries = [];
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

  updateVideoUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  galleryCarouselOptions={
    items: 3,
    autoHeight: false,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left fa-xl" aria-hidden="true"></i>', '<i class="fa-solid fa-arrow-right fa-xl" aria-hidden="true"></i>'],
    autoplay: false,
    center: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: false,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            autoHeight: true
        },
        460: {
            items: 2
        },
        991: {
            items: 3
        }
    }
  }
}
