import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  constructor(private userDataService: UserDataService, private router: Router) {}

  userData = this.userDataService.ShowUserInfo();

  deleteAcc() {
    let users = JSON.parse(localStorage.getItem('users'));
  }
}
