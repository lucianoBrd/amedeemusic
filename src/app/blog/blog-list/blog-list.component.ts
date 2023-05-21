import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { List } from 'src/app/shared/models/list.interface';
import { DataService } from 'src/app/shared/service/data.service';
import { PaginationService } from 'src/app/shared/service/pagination.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { Blog } from 'src/app/shared/models/blog.interface';
import { NgxMasonryOptions } from 'ngx-masonry';
import { BlogService } from 'src/app/shared/service/blog.service';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  public blogs: Blog[];
  public listBlogs: List<Blog>;
  public language: Language;
  public blogImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'blog/';

  public currentPage: number;
  public totalPage: number;
  
  public blogPage: string = ConfigDB.data.appServer + '/blog/detail/';

  public facebookUrl: string = ConfigDB.data.facebookUrl;
  public twitterUrl: string = ConfigDB.data.twitterUrl;
  public linkedinUrl: string = ConfigDB.data.linkedinUrl;

  public route: string = '/api/blogs';
  public paginationRoute: string = this.route;
  public filterRoute: string = this.route + '/filter';
  public filtersSearch: string = 'local.local=' + LanguageService.getLanguageCodeOnly();
  public filtersPagination: string = 'local.local=' + LanguageService.getLanguageCodeOnly();

  public myOptions: NgxMasonryOptions = {
    originTop: true
  };

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService,
    private paginationService: PaginationService,
    public blogService: BlogService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.articleList);
    this.metaService.setKeywords(this.language.articleList);
    this.metaService.setDescription(this.language.articleList);

    this.getBlogs(this.route + '?' + this.filtersSearch);
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
    this.filtersPagination = this.filtersSearch + '&search=' + search;
  }

  public getBlogs = (route: string) => {
    this.listBlogs = undefined;
    this.blogs = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Blog>) => {
        this.listBlogs = data;
        this.blogs = this.listBlogs['hydra:member'];

        this.currentPage = this.paginationService.getPageNumber(route);
        this.totalPage = this.paginationService.getTotalPageNumber<Blog>(this.listBlogs);
      },
      (error) => {
        this.listBlogs = null;
        this.blogs = [];
      }
    );
  }
}
