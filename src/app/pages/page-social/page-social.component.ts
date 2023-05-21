import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { SocialService } from 'src/app/shared/service/social.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-page-social',
  templateUrl: './page-social.component.html',
  styleUrls: ['./page-social.component.scss'],
})
export class PageSocialComponent implements OnInit, OnDestroy {
  public socials: Social[];
  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private metaService: MetaService, 
    private socialService: SocialService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.listenToMe);
    this.metaService.setKeywords(this.language.listenToMe);
    this.metaService.setDescription(this.language.listenToMe);

    this.socialService.loadedSocials$.pipe(takeUntil(this.destroy$)).subscribe((data: Social[]) => {
      this.socials = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
