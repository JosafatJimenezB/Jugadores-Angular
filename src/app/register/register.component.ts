import { Component } from '@angular/core';
import { RegisterData } from '../models';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  creds: RegisterData = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }


  register(form: NgForm) {

    this.apiService.register(this.creds)
      .subscribe((response: HttpResponse<any>) => {
        console.log(response)
        this.router.navigate(['login'])
      },
        (error) => {
          console.log('Error', error);
        }
      )
  }

}
