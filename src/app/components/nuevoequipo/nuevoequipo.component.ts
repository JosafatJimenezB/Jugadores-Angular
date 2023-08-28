import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CrearEquipo } from 'src/app/models';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-nuevoequipo',
  templateUrl: './nuevoequipo.component.html',
  styleUrls: ['./nuevoequipo.component.css']
})
export class NuevoequipoComponent {

  equipo: CrearEquipo = {
    nombre: ''
  }

  constructor(
    private equipoService: EquipoService,
    private apiService: ApiService,
    private router: Router
  ) { }

  crearEquipo(form: NgForm) {
    this.equipoService.createEquipo(this.equipo)
      .subscribe(response => {
        console.log(response)
        this.router.navigate(['/'])
      })
  }

}
