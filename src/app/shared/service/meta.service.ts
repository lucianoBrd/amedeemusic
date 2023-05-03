import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Language } from '../models/language.interface';
import { TextService } from './text.service';
import { ConfigDB } from '../data/config';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  public language: Language;

  constructor(private titleService: Title, private metaService: Meta, private textService: TextService) {
    this.language = this.textService.getTextByLocal();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + ' | ' + ConfigDB.data.appName);
  }

  public setDescription(newDesc: string) {
    this.metaService.updateTag(
      {
        name: 'description',
        content: newDesc
      }
    );
  }

  public setKeywords(newKw: string) {
    this.metaService.updateTag(
      {
        name: 'keywords',
        content: this.language.keywords + newKw
      }
    );
  }

}
