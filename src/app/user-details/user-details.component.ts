import { Component } from '@angular/core';
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
    const token = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users'));
    const filtredUsers = users.filter(user => {
      if (user.token !== token) {
        return user;
      }
    });
    console.log(filtredUsers);
    localStorage.setItem('users', JSON.stringify(filtredUsers));
    this.router.navigate(['/register']);
  }
}
