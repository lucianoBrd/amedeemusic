import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Politic } from '../models/politic.interface';

@Injectable({
  providedIn: 'root'
})
export class PoliticService {
  private politic$ = new BehaviorSubject<Politic|undefined>(undefined);
  loadedPolitic$ = this.politic$.asObservable();
  constructor() {}

  setPolitic(politic: Politic) {
    this.politic$.next(politic);
  }

}
