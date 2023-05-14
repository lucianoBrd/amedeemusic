import { Component, OnDestroy, OnInit, Renderer2, Inject } from '@angular/core';
import { CustomizerService } from './shared/service/customizer.service';
import { NavigationEnd, Router } from '@angular/router';
import { MetaService } from './shared/service/meta.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Politic } from './shared/models/politic.interface';
import { DataService } from './shared/service/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TextService } from './shared/service/text.service';
import { Language } from './shared/models/language.interface';
import { LanguageService } from './shared/service/language.service';
import { ConfigDB } from './shared/data/config';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    DataService,
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  public url: any;
  title = ConfigDB.data.appName;
  public layoutType: string = 'light';
  public language: Language;

  public politic: Politic;
  public documentPath: String;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public customize: CustomizerService,
    private router: Router,
    private dataService: DataService,
    private textService: TextService,
    private metaService: MetaService,
    private modalService: NgbModal,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.language = this.textService.getTextByLocal();

    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.src  = `/assets/tilt.js`;   
    this._renderer2.appendChild(this._document.body, script);
    
    this.language = this.textService.getTextByLocal();
    /*this.dataService.sendGetRequest('/politic/' + LanguageService.getLanguageCodeOnly()).pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.politic = data['politic'] as Politic;
      this.documentPath = data['documentPath'];
    })*/
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  customizeLayoutVersion(val) {
    this.customize.setLayoutVersion(val);
    this.layoutType = val;
  }

  customizeLayoutType(val) {
    this.customize.setLayoutType(val);
    this.layoutType = val;
  }

  customizeLanguage(val) {
    if (val === 'en' || val === 'fr') {
      this.customize.setLanguage(val);
      /* Refresh page */
      window.location.reload();
    }
  }
}
