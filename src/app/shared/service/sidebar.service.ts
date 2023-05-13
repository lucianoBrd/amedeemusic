import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebar$ = new BehaviorSubject<any>(undefined);
  project$ = this.sidebar$.asObservable();
  constructor() {}

  setProject(project: Project) {
    this.sidebar$.next(project);
  }

}
