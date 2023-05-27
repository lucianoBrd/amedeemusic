import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Output() 
  public onSearch = new EventEmitter<string>();
  
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
      let search: string = data;
      if (!search) {
        search = '';
      }
      this.get(this.route + '?' + this.filterName + '=' + search + '&' + this.filters);
      this.onSearch.emit(search);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  filterProjects() {
    let search: string = this.search.value;
    if (!search) {
      search = '';
    }
    this.get(this.route + '?' + this.filterName + '=' + search + '&' + this.filters);
  }

}
