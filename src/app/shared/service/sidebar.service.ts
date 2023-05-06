import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private subject = new Subject<any>();

  sendClickEvent(value) {
    this.subject.next(value);
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}
