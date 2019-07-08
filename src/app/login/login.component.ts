import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');

  constructor(private userDataService: UserDataService) {}

  onSubmit() {
    const login = this.nameFormControl.value;
    const pass = this.passwordFormControl.value;

    this.userDataService.loginUser(login, pass);
  }

  ngOnInit() {}
}
