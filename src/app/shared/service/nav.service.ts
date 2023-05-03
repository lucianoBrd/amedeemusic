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

   constructor(private textService: TextService) {
      this.language = this.textService.getTextByLocal();
      this.MENUITEMS = [
         { path: '/', title: this.language.home, type: 'link' },
         { path: '/contact', title: this.language.contact, type: 'link' },
         { path: '/about-me', title: this.language.about, type: 'link' },
      ];

      // Array
      this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
   }

}
