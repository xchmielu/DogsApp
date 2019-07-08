import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/user.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');

  matcher = new MyErrorStateMatcher();

  constructor(private userDataService: UserDataService) {}

  onSubmit() {
    const login = this.nameFormControl.value;
    const email = this.emailFormControl.value;
    const pass = this.passwordFormControl.value;
    const user = new User(login, email, pass);
    this.userDataService.registerUser(user);
  }
}
