import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { appRoutes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DogCreatorComponent } from './dog-creator/dog-creator.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { DogListComponent } from './dog-list/dog-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    HomeComponent,
    DogCreatorComponent,
    ProfileNavComponent,
    DogListComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
  constructor() {}
}
