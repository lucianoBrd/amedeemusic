import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, ParamMap, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../shared/service/language.service';
import { CustomizerService } from '../shared/service/customizer.service';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit, OnDestroy {

  public url : any;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public customize: CustomizerService,
  ) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params: ParamMap) => {
      /* Get locale */
      let locale: string = params.get('locale');
      
      if (locale) {
        if (locale !== LanguageService.getLanguageCodeOnly()) {
          let result:boolean = this.customize.setLanguage(locale);

          if (!result) {
            this.router.navigate(['']);
          } else {
            /* Refresh page */
            window.location.reload();
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
