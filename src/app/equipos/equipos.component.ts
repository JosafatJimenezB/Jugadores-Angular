import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserDetails } from '../models';

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
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {

    this.UserDetails()

    this.apiService.getEquipos().subscribe(
      (response: any) => {
        console.log('Equipos: ', response)
        this.equipos = response;
        this.loading = false;
        console.log(this.authority)
      },
      (error: any) => {
        console.log('Error: ', error)
        this.loading = false
      }
    )
  }


  UserDetails(): void {
    const data = this.apiService.getUserDetails();
    const userdetails = JSON.parse(JSON.stringify(data));
    this.authority = userdetails.authority;
  }

}
