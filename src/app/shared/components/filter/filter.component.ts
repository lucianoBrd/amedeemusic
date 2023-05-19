import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, debounceTime, takeUntil } from 'rxjs';
import { TextService } from '../../service/text.service';
import { Language } from '../../models/language.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent<T> implements OnInit, OnDestroy {
  @Input()
  public get: (route: string) => void;
  @Input()
  public route: number;
  @Input()
  public filterName: string;
  @Input()
  public filters: string = '';
  
  public search = new FormControl();
  private search$: Observable<string> = this.search.valueChanges;
  public language: Language;
  
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
  ) {   
    this.language = TextService.getTextByLocal();
  }

  ngOnInit() {
    this.search$.pipe(debounceTime(700), takeUntil(this.destroy$)).subscribe((data: string) => {
      this.get(this.route + '?' + this.filterName + '=' + data + '&' + this.filters);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  filterProjects() {
    this.get(this.route + '?' + this.filterName + '=' + this.search.value + '&' + this.filters);
  }

}
