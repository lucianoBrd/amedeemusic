import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';
import { Politic } from 'src/app/shared/models/politic.interface';
import { PoliticService } from 'src/app/shared/service/politic.service';

@Component({
  selector: 'app-page-privacy-policy',
  templateUrl: './page-privacy-policy.component.html',
  styleUrls: ['./page-privacy-policy.component.scss'],
})
export class PagePrivacyPolicyComponent implements OnInit, OnDestroy {
  public language: Language;
  public politic: Politic;

  private destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private metaService: MetaService, 
    private politicService: PoliticService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.privacyPolicy);
    this.metaService.setKeywords(this.language.privacyPolicy);
    this.metaService.setDescription(this.language.privacyPolicy);

    this.politicService.loadedPolitic$.pipe(takeUntil(this.destroy$)).subscribe((data: Politic) => {
      this.politic = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
