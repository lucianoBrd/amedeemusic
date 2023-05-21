import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Language } from '../shared/models/language.interface';
import { MetaService } from '../shared/service/meta.service';
import { TextService } from '../shared/service/text.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public url : any;
  public language: Language;

  constructor(
    private router: Router,
    private metaService: MetaService, 
  ) { 
    this.language = TextService.getTextByLocal();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.blog);
    this.metaService.setKeywords(this.language.blog);
    this.metaService.setDescription(this.language.blog);
  }

}
