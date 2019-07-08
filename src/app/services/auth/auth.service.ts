import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('currentUser');

    if (token !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
