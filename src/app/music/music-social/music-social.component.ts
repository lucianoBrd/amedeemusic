import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { LocaleService } from 'src/app/shared/service/locale.service';
import { SocialService } from 'src/app/shared/service/social.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-social',
  templateUrl: './music-social.component.html',
  styleUrls: ['./music-social.component.scss']
})
export class MusicSocialComponent implements OnInit, OnDestroy {
  public socials: Social[];
  public locale: string;
  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private socialService: SocialService,
    private localeService: LocaleService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.locale = data;
    });

    this.socialService.loadedSocials$.pipe(takeUntil(this.destroy$)).subscribe((data: Social[]) => {
      this.socials = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
