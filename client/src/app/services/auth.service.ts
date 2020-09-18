import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    base_url: string = "http://127.0.0.1:8000/api";
    constructor(private http: HttpClient) {
    }

    auth_login(data): Observable<any> {
        return this.http.post(`${this.base_url}/auth/login/`, data);
    }

    auth_me(): Observable<any> {
        return this.http.get(`${this.base_url}/auth/me/`);
    }

    auth_token() {
        return localStorage.getItem('token');
    }

    isLogged(): boolean {
        if (localStorage.getItem('token')) return true;
    }

    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('current_user');
    }
}
