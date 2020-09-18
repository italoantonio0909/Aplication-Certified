import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  base_url: string = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  get_citizen(): Observable<any> {
    return this.http.get(`${this.base_url}/citizen/`);
  }

  create_citizen(data): Observable<any> {
    return this.http.post(`${this.base_url}/citizen/`, data);
  }

  get_category(): Observable<any> {
    return this.http.get(`${this.base_url}/category/`);
  }

  create_category(data): Observable<any> {
    return this.http.post(`${this.base_url}/category/`, data);
  }

  create_option(data): Observable<any> {
    return this.http.post(`${this.base_url}/option/`, data);
  }

  get_administrator(): Observable<any> {
    return this.http.get(`${this.base_url}/auth/users/`);
  }

  create_administrator(data: any): Observable<any> {
    return this.http.post(`${this.base_url}/auth/registration/complete/`, data);
  }

  create_category_certified(data): Observable<any> {
    return this.http.post(`${this.base_url}/category_certified/`, data);
  }

  get_category_certified(): Observable<any> {
    return this.http.get(`${this.base_url}/category_certified/`);
  }
}
