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

  public PARAMS = null;

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  public sendGetRequest(page: string){
    if (page){
      if(this.PARAMS){
        return this.httpClient.post(
          this.REST_API_SERVER + page, 
          JSON.stringify(this.PARAMS)
        ).pipe(
          retry(3), 
          catchError(this.handleError)
        );
      }
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
        retry(3), 
        catchError(this.handleError),
      );
    }
  }
}
