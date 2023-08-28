import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-viewequipo',
  templateUrl: './viewequipo.component.html',
  styleUrls: ['./viewequipo.component.css']
})
export class ViewequipoComponent {

  id: number = 0
  equipo: any


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private equipoService: EquipoService
  ) {

    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }


  ngOnInit(): void {
    this.GetEquipoById();
  }

  GetEquipoById() {
    this.equipoService.getEquipo(this.id).subscribe(
      (response: any) => {
        this.equipo = response.body
        console.log(this.equipo)
      },
      (error: any) => {
        console.log('Error: ', error)
      }
    )
  }

}
