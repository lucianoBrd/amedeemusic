import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Language } from '../shared/models/language.interface';
import { MetaService } from '../shared/service/meta.service';
import { TextService } from '../shared/service/text.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

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
    this.metaService.setTitle(this.language.pages);
    this.metaService.setKeywords(this.language.pages);
    this.metaService.setDescription(this.language.pages);
  }

}
