import { Injectable, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private router: Router) {}

  users = [];

  getLocalStorageData() {
    return JSON.parse(localStorage.getItem('userData'));
  }

  registerUser(user: User) {
    const array = [];
    if (localStorage.getItem('users') == null) {
      array.push(JSON.stringify(user));
      console.log(array);
      // @ts-ignore
      localStorage.setItem('users', array);
    } else {
      const users = JSON.parse(localStorage.getItem('users'));
      console.log(users);
      array.push(JSON.stringify([users, user]));
      // @ts-ignore

      localStorage.setItem('users', array);
    }

    this.router.navigate(['/login']);
  }

  loginUser(login: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    users.map(item => {
      if (item.login === login && item.password === password) {
        const createToken = (Math.random() * 100000).toString().substring(0, 5);
        console.log(createToken);
        localStorage.setItem('currentUser', createToken);
        item.token = createToken;
        console.log(item);
        users.map(user => {
          if (user.login === login && user.password === password) {
            return item;
          }
        });
        localStorage.setItem('users', JSON.stringify(users));
        this.router.navigate(['/my-profile']);
      }
    });
  }

  ShowUserInfo() {
    let loggedUser;
    const users = JSON.parse(localStorage.getItem('users'));
    const currentUser = localStorage.getItem('currentUser');
    users.map(user => {
      if (user.token === currentUser) {
        loggedUser = user;
      }
    });
    return loggedUser;
  }

  showUserDogs() {
    const users = JSON.parse(localStorage.getItem('users'));
    const currentUser = localStorage.getItem('currentUser');
    console.log(users);
    return users.find(user => user.token === currentUser).dogs;
  }
}
