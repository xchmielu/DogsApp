import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthService } from './services/auth/auth.service';
import { DogCreatorComponent } from './dog-creator/dog-creator.component';
import { DogListComponent } from './dog-list/dog-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'my-profile',
    component: UserDetailsComponent,
    pathMatch: 'full',
    canActivate: [AuthService]
  },
  {
    path: 'dog-creator',
    component: DogCreatorComponent,
    pathMatch: 'full',
    canActivate: [AuthService]
  },
  {
    path: 'dog-list',
    component: DogListComponent,
    pathMatch: 'full',
    canActivate: [AuthService]
  }
];
