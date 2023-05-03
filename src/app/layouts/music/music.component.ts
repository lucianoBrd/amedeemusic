import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/shared/models/language.interface';
import { MetaService } from 'src/app/shared/service/meta.service';
import { TextService } from 'src/app/shared/service/text.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  public language: Language;
  
  constructor(private metaService: MetaService, private textService: TextService) {
    this.language = this.textService.getTextByLocal();
  }

  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);
  }

}
