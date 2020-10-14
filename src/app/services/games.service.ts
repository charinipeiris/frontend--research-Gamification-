import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public showSpinner: boolean = false;
  private url: string = "http://localhost:8080/api/users/savemarks/";

  constructor(private http: HttpClient) { }

  submitGame(body: any, username: string) {
    console.log('hit:', body)
    return this.http.post(this.url + username, body);
  }


}
