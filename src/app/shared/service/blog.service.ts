import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor() {
  }

  plainText(content: string) {
    return (content.replace(/<[^>]*>/g, ' ').slice(0, 100) + '...');
  }

}
