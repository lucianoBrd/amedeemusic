import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { TextService } from 'src/app/shared/service/text.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { Blog } from 'src/app/shared/models/blog.interface';
import { Testimonial } from 'src/app/shared/models/testimonial.interface';
import { LanguageService } from 'src/app/shared/service/language.service';
import { List } from 'src/app/shared/models/list.interface';
import { LocaleService } from 'src/app/shared/service/locale.service';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
})
export class BlogSidebarComponent implements OnInit, OnDestroy {
  public blogs: Blog[];
  public locale: string;
  public testimonials: Testimonial[];
  public language: Language;
  public blogImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'blog/';
  
  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService,
    private localeService: LocaleService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.locale = data;
    });

    this.dataService.sendGetRequest('/api/testimonials/randoms?local.local=' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Testimonial>) => {
        this.testimonials = data['hydra:member'];
      },
      (error) => {
        this.testimonials = [];
      }
    );
    this.dataService.sendGetRequest('/api/blogs/randoms?local.local=' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Blog>) => {
          this.blogs = data['hydra:member'];
      }, 
      (error) => {
        this.blogs = [];
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
