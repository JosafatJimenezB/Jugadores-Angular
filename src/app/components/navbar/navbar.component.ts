import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string = ''
  roleId: number = 0
  authority: string = ''

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.userDetails()
  }

  userDetails() {
    const data = this.apiService.getUserDetails();
    const userdetails = JSON.parse(JSON.stringify(data));
    console.log(userdetails);

    this.username = userdetails.username;
    this.roleId = userdetails.roleId;
    this.authority = userdetails.authority
  }


  logout() {
    this.apiService.logout();
  }

}
