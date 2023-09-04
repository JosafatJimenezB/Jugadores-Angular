import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UpdateEquipo } from 'src/app/models';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-updateequipo',
  templateUrl: './updateequipo.component.html',
  styleUrls: ['./updateequipo.component.css']
})

export class UpdateequipoComponent implements OnInit {

  id: number = 0;
  equipo: any


  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private router: Router
  ) {

    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }


  ngOnInit(): void {
    this.getEquipoFromId(this.id)
  }

  getEquipoFromId(id: number) {
    this.equipoService.getEquipo(id)
      .subscribe(res => {
        this.equipo = res.body
      },
        error => {
          console.log(error)
        })
  }

  updateEquipo(form: NgForm) {
    this.equipoService.UpdateEquipo(this.id, this.equipo)
      .subscribe(response => {
        this.router.navigate(['/'])
      })
  }




}
