import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ConfigDB } from 'src/app/shared/data/config';
import { Blog } from 'src/app/shared/models/blog.interface';
import { BlogService } from 'src/app/shared/service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  public blog: Blog;
  public language: Language;
  public blogImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'blog/';
  
  public blogPage: string = ConfigDB.data.appServer + '/blog/detail/';
  
  public slug: string;

  public facebookUrl: string = ConfigDB.data.facebookUrl;
  public twitterUrl: string = ConfigDB.data.twitterUrl;
  public linkedinUrl: string = ConfigDB.data.linkedinUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private dataService: DataService, 
    private metaService: MetaService,
    private route: ActivatedRoute,
    public blogService: BlogService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.post);
    this.metaService.setKeywords(this.language.post);
    this.metaService.setDescription(this.language.post);

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      /* Get slug */
      this.slug = params['slug'];

      this.dataService.sendGetRequest('/api/blogs/' + this.slug).pipe(takeUntil(this.destroy$)).subscribe(
        (data: Blog) => {
          this.blog = data;

          if(this.blog) {
            const content: string = this.blogService.plainText(this.blog.content);
            this.metaService.setTitle(this.blog.title);
            this.metaService.setKeywords(this.language.post + ', ' + this.blog.title + ', ' + content);
            this.metaService.setDescription(content);
          }
        },
        (error) => {
          this.blog = null;
        }
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
