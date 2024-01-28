import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { List } from 'src/app/shared/models/list.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { Testimonial } from 'src/app/shared/models/testimonial.interface';
import { ConfigDB } from 'src/app/shared/data/config';

@Component({
  selector: 'app-page-testimonial',
  templateUrl: './page-testimonial.component.html',
  styleUrls: ['./page-testimonial.component.scss'],
})
export class PageTestimonialComponent implements OnInit, OnDestroy {
  public testimonials: Testimonial[];
  public listTestimonials: List<Testimonial>;
  public language: Language;
  public testimonialImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'testimonial/';

  public currentPage: number;
  public totalPage: number;

  public route: string = '/api/testimonials';
  public paginationRoute: string = this.route;
  public filterRoute: string = this.route + '/filter';
  public filtersSearch: string = 'local.local=' + LanguageService.getLanguageCodeOnly();
  public filtersPagination: string = 'local.local=' + LanguageService.getLanguageCodeOnly();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService,
    private metaService: MetaService,
    private paginationService: PaginationService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.referringToMe);
    this.metaService.setKeywords(this.language.referringToMe);
    this.metaService.setDescription(this.language.referringToMe);

    this.getTestimonials(this.route + '?' + this.filtersSearch);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSearch(search: string) {
    if (!search?.length) {
      this.paginationRoute = this.route;
    } else {
      this.paginationRoute = this.filterRoute;
    }
    this.filtersPagination = this.filtersSearch + '&search=' + search;
  }

  public getTestimonials = (route: string) => {
    this.listTestimonials = undefined;
    this.testimonials = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Testimonial>) => {
        this.listTestimonials = data;
        this.testimonials = this.listTestimonials['hydra:member'];

        this.currentPage = this.paginationService.getPageNumber(route);
        this.totalPage = this.paginationService.getTotalPageNumber<Testimonial>(this.listTestimonials);

        let keywords:string = this.language.referringToMe;

        for (let index = 0; index < this.testimonials.length; index++) {
          const testimonial: Testimonial = this.testimonials[index];
          keywords += ',' + testimonial.name + ',' + testimonial.citation;
        }

        this.metaService.setKeywords(keywords);
      },
      (error) => {
        this.listTestimonials = null;
        this.testimonials = [];
      }
    );
  }
}
