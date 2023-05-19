import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/language.interface';
import { TextService } from './text.service';
import { Menu } from '../models/menu.interface';

@Injectable({
   providedIn: 'root'
})
export class NavService {
   public language: Language;
   public MENUITEMS: Menu[];
   public items: BehaviorSubject<Menu[]>;

   constructor() {
      this.language = TextService.getTextByLocal();
      this.MENUITEMS = [
         { path: '/', title: this.language.home, type: 'link' },
         {
            title: this.language.pages, type: 'sub', children: [
               { path: '/page/project', title: this.language.myProjects, type: 'link' },
               { path: '/page/gallery', title: this.language.gallery, type: 'link' },
               { path: '/page/contact', title: this.language.contact, type: 'link' },
            ],
         },
         {
            title: this.language.blog, type: 'sub', children: [
               { path: '/blog/list', title: this.language.articleList, type: 'link' },
            ],
         },
      ];

      // Array
      this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   }

}
