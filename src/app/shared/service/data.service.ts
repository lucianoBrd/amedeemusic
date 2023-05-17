import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ConfigDB } from '../data/config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = ConfigDB.data.apiServer;

  constructor(private httpClient: HttpClient) { 
    
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  public sendGetRequest(page: string){
    if (page){
      return this.httpClient.get(
        this.REST_API_SERVER + page, 
        { 
          headers: new HttpHeaders(
            {
              'Accept':  'application/ld+json'
            }
          )
        }
      ).pipe(
        //retry(3), 
        catchError(this.handleError),
      );
    }
  }

  /**
   * 
   * @param page 
   * @param body 
   * const body = new HttpParams()
   *  .set('username', 'test@test.com')
   *  .set('password', 'Password1')
   *  .set('rolename', 'Admin');
   * @returns 
   */
  public sendPostRequest(page: string, body: HttpParams){
    if (page){
      return this.httpClient.post(
        this.REST_API_SERVER + page,
        body,
        { 
          headers: new HttpHeaders(
            {
              'Accept':  'application/ld+json'
            }
          )
        }
      ).pipe(
        retry(3), 
        catchError(this.handleError),
      );
    }
  }
}
