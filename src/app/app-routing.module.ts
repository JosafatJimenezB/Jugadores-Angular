import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { authExpirationGuard } from './helpers/auth-expiration.guard';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NuevoequipoComponent } from './components/nuevoequipo/nuevoequipo.component';
import { ViewequipoComponent } from './components/viewequipo/viewequipo.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard, authExpirationGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'equipos/nuevo',
    component: NuevoequipoComponent,
    canActivate: [AuthGuard, authExpirationGuard]
  },
  {
    path: 'equipos/:id',
    component: ViewequipoComponent,
    canActivate: [AuthGuard, authExpirationGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
