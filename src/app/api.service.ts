import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Credentials, RegisterData } from './models';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  private getHttpOptions() {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    })

    return { headers }
  }

  getEquipos(): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<any>('/api/equipos', httpOptions)
  }

  getJugadores(): Observable<any> {
    const httpOptions = this.getHttpOptions();
    return this.http.get<any>('/api/jugadores', httpOptions)
  }


  register(creds: RegisterData) {
    return this.http.post('/api/auth/register', creds, {
      observe: 'response'
    })

  }


  login(creds: Credentials) {
    return this.http.post('/api/auth/login', creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const token = body.token;
      if (token) {
        const expirationTime = new Date();

        expirationTime.setMinutes(expirationTime.getMinutes() + 30);

        this.cookieService.set('token', token, expirationTime, '/');
        this.cookieService.set('username', body.username, expirationTime, '/');
        this.cookieService.set('roleId', JSON.stringify(body.role.roleId), expirationTime, '/');
        this.cookieService.set('authority', body.role.authority, expirationTime, '/');
        this.cookieService.set('token_expiration', expirationTime.toISOString(), expirationTime, ('/'))
      }
      return body;
    }))

  }


  getToken() {
    return this.cookieService.get('token');
  }

  getUserDetails() {
    const username = this.cookieService.get('username');
    const roleId: number = parseInt(this.cookieService.get('roleId'));
    const authority = this.cookieService.get('authority');

    const UserDetails = {
      "username": username,
      "roleId": roleId,
      "authority": authority
    }

    return UserDetails;
  }

  logout() {
    this.cookieService.deleteAll('/');
    localStorage.clear();
  }
}
