import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { List } from 'src/app/shared/models/list.interface';
import { Testimonial } from 'src/app/shared/models/testimonial.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { LocaleService } from 'src/app/shared/service/locale.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-testimonial',
  templateUrl: './music-testimonial.component.html',
  styleUrls: ['./music-testimonial.component.scss']
})
export class MusicTestimonialComponent implements OnInit, OnDestroy {
  public testimonials: Testimonial[];
  public locale: string;
  public artist: Artist;
  public language: Language;
  public testimonialImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'testimonial/';
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';

  public quoteImage: string = 'assets/images/music/testimonial/quote.png';

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService, 
    private artistService: ArtistService,
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
    this.dataService.sendGetRequest('/api/testimonials/lasts?local.local=' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Testimonial>) => {
        this.testimonials = data['hydra:member'];
      },
      (error) => {
        this.testimonials = [];
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  testimoialCarouselOptions={
    items: 1,
    autoHeight: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>', '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }
}
