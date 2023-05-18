import { Injectable } from '@angular/core';
import { ConfigDB } from '../data/config';
import { List } from '../models/list.interface';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  getTotalPageNumber<T>(list: List<T>): number {
    if (list['hydra:view']) {
      if (list['hydra:view']['hydra:last']) {
        return this.getPageNumber(list['hydra:view']['hydra:last']);
      }
    }
    return undefined;
  }

  checkPageNumber(number: number, totalPage: number): boolean {
    return (number > 0 && number <= totalPage);
  }

  getPageNumber(route: string): number {
    if (!route.includes('?')) {
      return 1;
    }
    let url: URL = new URL(ConfigDB.data.apiServer + route);
    let page = url.searchParams.get('page');

    return Number(page);
  }

}
