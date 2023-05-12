import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { Social } from 'src/app/shared/models/social.interface';
import { SocialService } from 'src/app/shared/service/social.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music-social',
  templateUrl: './music-social.component.html',
  styleUrls: ['./music-social.component.scss']
})
export class MusicSocialComponent implements OnInit {
  public socials: Social[];
  public language: Language;

  constructor(
    private textService: TextService, 
    private socialService: SocialService,
  ) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    this.socialService.loadedSocials$.subscribe((data: Social[]) => {
      this.socials = data;
    });
  }
}
