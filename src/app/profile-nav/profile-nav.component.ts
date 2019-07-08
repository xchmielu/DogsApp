import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent {
  constructor(private router: Router) {}

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
