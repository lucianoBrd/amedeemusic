import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router, Scroll } from '@angular/router';
import { Subject, map } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TextService } from '../../service/text.service';
import { Language } from '../../models/language.interface';
import { LocaleService } from '../../service/locale.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public locale: string;
  public url: any;
  public breadcrumbs;
  public title: string;
  public language: Language;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private localeService: LocaleService,
  ) {
    this.language = TextService.getTextByLocal(); 
    this.router.events
      .pipe(filter((event) => {
        if (event instanceof NavigationEnd) {
          this.url = event.url;
          return true;
        } else if (event instanceof Scroll && event.routerEvent instanceof NavigationEnd) {
          this.url = event.routerEvent.url;
          return true;
        }
        return false;
      }))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(event => {
        let title = event.snapshot.data['title'];
        let parent = event.parent.snapshot.data['breadcrumb'];
        let parentPath = event.parent.snapshot.data['path'];
        let child = event.snapshot.data['breadcrumb'];
        this.breadcrumbs = {};
        this.title = title;
        this.breadcrumbs = {
          'parentBreadcrumb': parent,
          'parentPath': this.locale ? '/' + this.locale + parentPath : parentPath,
          'childBreadcrumb': child
        }
      });
  }

  ngOnInit() {
    this.localeService.loadedLocale$.pipe(takeUntil(this.destroy$)).subscribe((data: string) => {
      this.locale = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
