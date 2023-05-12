import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebar = new Subject<any>();

  sendClickEvent(idProject: number) {
    this.sidebar.next(idProject);
  }

  getClickEvent(): Observable<any>{ 
    return this.sidebar.asObservable();
  }

}
