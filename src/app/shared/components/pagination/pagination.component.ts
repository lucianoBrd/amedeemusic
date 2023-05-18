import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../models/list.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent<T> implements OnInit {

  @Input()
  public currentPage: number;
  @Input()
  public totalPage: number;
  @Input()
  public list: List<T>;
  @Input()
  public get: (route: string) => void;

  constructor() {
    
  }

  ngOnInit() { }

}
