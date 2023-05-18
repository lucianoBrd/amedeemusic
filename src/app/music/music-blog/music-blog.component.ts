import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfigDB } from 'src/app/shared/data/config';
import { Artist } from 'src/app/shared/models/artist.interface';
import { Blog } from 'src/app/shared/models/blog.interface';
import { Language } from 'src/app/shared/models/language.interface';
import { List } from 'src/app/shared/models/list.interface';
import { ArtistService } from 'src/app/shared/service/artist.service';
import { DataService } from 'src/app/shared/service/data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-blog',
  templateUrl: './music-blog.component.html',
  styleUrls: ['./music-blog.component.scss']
})
export class MusicBlogComponent implements OnInit, OnDestroy {
  public artist: Artist;
  public blogs: Blog[];
  public language: Language;
  public artistImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'artist/';
  public blogImagePath: String = ConfigDB.data.apiServer + ConfigDB.data.apiServerImages + 'blog/';

  public blogPage: string = ConfigDB.data.apiServer + '/api/blogs';

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dataService: DataService,
    private artistService: ArtistService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.artistService.loadedArtist$.pipe(takeUntil(this.destroy$)).subscribe((data: Artist) => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/blogs/lasts?local.local=' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe(
      (data: List<Blog>) => {
        let blogs: Blog[] = data['hydra:member'];
        if (blogs && blogs.length > 0) {
          let emptyBlog: Blog = {
            id: -1,
            image: undefined,
            date: undefined,
            title: undefined,
            slug: undefined,
            content: undefined,
            local: undefined,
          };
          if (blogs.length == 1) {
            blogs.unshift(emptyBlog);
            blogs.push(emptyBlog);
          } else if (blogs.length == 2) {
            blogs.push(emptyBlog);
          }
        }
          this.blogs = blogs;
      }, 
      (error) => {
        this.blogs = [];
      }
    );
  }

  plainText(content: string) {
    return content.replace(/<[^>]*>/g, '').slice(0, 30);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  blogCarouselOptions={
        items: 3,
        margin: 60,
        nav: false,
        dots:false,
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items: 2,
                margin: 10
            },
            992: {
                items: 3,
                margin: 10
            },
            1200: {
                margin: 30
            }
        }
  }
  
}