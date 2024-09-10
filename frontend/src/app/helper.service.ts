import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './env/env';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
    url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendContactForm(data: any) {
    return this.http.post(`${this.url}/contact/query`, data,{
      observe:'body',
      headers: new HttpHeaders().set('Content-Type','application/json'),
      responseType: 'text' as 'json' // Add this line to expect a text response
    }
    );
    }
  }