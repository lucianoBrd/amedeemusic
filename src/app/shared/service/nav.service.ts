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
               { path: '/page/contact', title: this.language.contact, type: 'link' },
               { path: '/page/gallery', title: this.language.gallery, type: 'link' },
            ],
       },
      ];

      // Array
      this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   }

}
