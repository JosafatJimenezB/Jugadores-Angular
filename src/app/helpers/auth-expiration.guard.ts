import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class authExpirationGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const tokenExists = this.cookieService.check('token');

    if (!tokenExists) {
      this.cookieService.deleteAll('/')
      this.router.navigate(['login']);
      return false;
    }

    const expirationTime = 30 * 60 * 1000; // 30 minutos en milisegundos
    const tokenSetTime = parseInt(this.cookieService.get('token_expiration'), 10); // Obtener el tiempo en milisegundos en que se estableció el token
    const currentTime = new Date().getTime();
    const timeRemaining = tokenSetTime + expirationTime - currentTime;

    const timeRemainingInSeconds = Math.floor(timeRemaining / 1000);
    const hours = Math.floor(timeRemainingInSeconds / 3600);
    const minutes = Math.floor((timeRemainingInSeconds % 3600) / 60);
    const seconds = Math.floor(timeRemainingInSeconds % 60);

    console.log(`Tiempo restante del token: ${hours} horas, ${minutes} minutos, ${seconds} segundos`);


    return true;
  }
}