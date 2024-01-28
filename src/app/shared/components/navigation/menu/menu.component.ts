import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../service/nav.service';
import { Router } from '@angular/router';
import { TextService } from 'src/app/shared/service/text.service';
import { Language } from 'src/app/shared/models/language.interface';
import { Menu } from '../../../models/menu.interface';
import { Subject, takeUntil } from 'rxjs';
import { MobileService } from 'src/app/shared/service/mobile.service';
import { LocaleService } from 'src/app/shared/service/locale.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  public menuItems: Menu[];
  public openSide: boolean = false;
  public activeItem: string = 'home';
  public active: boolean = false;
  public activeChildItem: string = ''
  public overlay: boolean = false;
  public url: string = "";
  public mobile: boolean = false;
  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public navServices: NavService, 
    private router: Router,
    private mobileService: MobileService,
    private localeService: LocaleService,
  ) {
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.navServices.updateMenuItems(data);
    });

    this.url = this.router.url;
    this.mobile = this.mobileService.isMobile();
    this.navServices.items.pipe(takeUntil(this.destroy$)).subscribe(menuItems => {
      this.menuItems = menuItems
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleSidebar() {
    this.openSide = !this.openSide
  }

  closeOverlay() {
    this.openSide = false
  }

  //For Active Main menu in Mobile View
  setActive(menuItem) {
    if (this.activeItem === menuItem) {
      this.activeItem = ''
    } else {
      this.activeItem = menuItem
    }
  }

  isActive(item) {
    return this.activeItem === item
  }

  // For Active Child Menu in Mobile View
  setChildActive(subMenu) {
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = ''
    } else {
      this.activeChildItem = subMenu
    }
  }

  ischildActive(subMenu) {
    return this.activeChildItem === subMenu
  }


}
