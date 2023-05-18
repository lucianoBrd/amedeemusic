import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../models/list.interface';
import { PaginationService } from '../../service/pagination.service';

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
  @Input()
  public route: number;

  constructor(
    private paginationService: PaginationService,
  ) {
    
  }

  ngOnInit() { }

  onFocusOutEvent(event: any){
    let number: number = event.target.value;
    if (this.paginationService.checkPageNumber(number, this.totalPage)) {
      this.get(this.route + '?page=' + number);
    }
  }

}
