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

      this.updateMenuItems();

      // Array
      this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   }

   updateMenuItems(locale: string|null = null) {
      this.MENUITEMS = [
         { path: (locale ? '/' + locale + '/' : '/'), title: this.language.home, type: 'link' },
         {
            title: this.language.pages, type: 'sub', children: [
               { path: (locale ? '/' + locale + '/page/project' : '/page/project'), title: this.language.myProjects, type: 'link' },
               { path: (locale ? '/' + locale + '/page/social' : '/page/social'), title: this.language.listenToMe, type: 'link' },
               { path: (locale ? '/' + locale + '/page/about' : '/page/about'), title: this.language.about, type: 'link' },
               { path: (locale ? '/' + locale + '/page/gallery' : '/page/gallery'), title: this.language.gallery, type: 'link' },
               { path: (locale ? '/' + locale + '/page/event' : '/page/event'), title: this.language.listOfEvents, type: 'link' },
               { path: (locale ? '/' + locale + '/page/testimonial' : '/page/testimonial'), title: this.language.referringToMe, type: 'link' },
               { path: (locale ? '/' + locale + '/page/contact' : '/page/contact'), title: this.language.contact, type: 'link' },
            ],
         },
         {
            title: this.language.blog, type: 'sub', children: [
               { path: (locale ? '/' + locale + '/blog/list' : '/blog/list'), title: this.language.articleList, type: 'link' },
            ],
         },
      ];

      if(this.items !== undefined) {
         this.items.next(this.MENUITEMS);
      }
   }

}
