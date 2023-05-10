import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ConfigDB } from '../data/config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "https://api." + ConfigDB.data.serverName;

  constructor(private httpClient: HttpClient) { 
    if (isDevMode()) {
      this.REST_API_SERVER = 'http://127.0.0.1:8000';
    }
  }

  

  public PAGE = null;

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

  public sendGetRequest(){
    if (this.PAGE){
      if(this.PARAMS){
        return this.httpClient.post(
          this.REST_API_SERVER + this.PAGE, 
          JSON.stringify(this.PARAMS)
        ).pipe(
          retry(3), 
          catchError(this.handleError)
        );
      }
      return this.httpClient.get(
        this.REST_API_SERVER + this.PAGE, 
        { 
          headers: new HttpHeaders(
            {
              'Accept':  'application/json'
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
