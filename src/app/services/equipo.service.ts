import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CrearEquipo, UpdateEquipo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }


  createEquipo(equipo: CrearEquipo) {
    return this.http.post('/api/equipos', equipo, {
      observe: 'response'
    })
  }

  getEquipo(id: number) {
    return this.http.get('/api/equipos/' + id, {
      observe: 'response'
    })
  }

  UpdateEquipo(id: number, equipo: UpdateEquipo) {
    return this.http.put('/api/equipos/' + id, equipo, {
      observe: 'response'
    })
  }
}
