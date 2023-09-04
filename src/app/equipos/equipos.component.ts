import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: any[] = []
  loading: boolean = true
  authority: string = '';



  constructor(
    private apiService: ApiService,
    private equipoService: EquipoService
  ) {
  }

  ngOnInit(): void {

    this.UserDetails()

    this.getEquipos()
  }

  getEquipos(){
    this.apiService.getEquipos().subscribe(
      (res: any) => {
        this.equipos = res;
        this.loading = false;
      },
      (error: any) => {
        console.log('Error: ', error)
        this.loading = false
      }
    )
  }


  UserDetails(): any {
    const data = this.apiService.getUserDetails();
    const userdetails = JSON.parse(JSON.stringify(data));
    this.authority = userdetails.authority;
  }

  deleteEquipo(id: number){
    this.equipoService.deleteEquipo(id).subscribe(
      (res: any) => {
        this.getEquipos()
      },(error) => 
      console.log(error) 
    );
  }

}
