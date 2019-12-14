import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = 'http://localhost:3000/ps6';
  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(this.SERVER_URL);
  }
}
