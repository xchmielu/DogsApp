import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../services/dog-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dog-creator',
  templateUrl: './dog-creator.component.html',
  styleUrls: ['./dog-creator.component.scss']
})
export class DogCreatorComponent {
  profileForm = new FormGroup({
    dogName: new FormControl(''),
    dogBread: new FormControl(''),
    owner: new FormControl('')
  });
  public DogDataService: any;

  users = JSON.parse(localStorage.getItem('users')).map(user => user.login);

  constructor(private dogDataService: DogDataService) {
    this.dogDataService.getAllDogs();
  }
  dogs = this.dogDataService.dogsList;

  onSubmit() {
    const token = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users'));

    const dog = this.profileForm.value.dogBread;
    this.dogDataService.getDogImage(dog).subscribe(dog => {
      users.map(user => {
        if (user.token === token) {
          if (user.dogs === undefined) {
            user.dogs = [];
          }
          user.dogs.push({
            dogName: this.profileForm.value.dogName,
            dogBread: this.profileForm.value.dogBread,
            owner: this.profileForm.value.owner,
            dogUrl: dog
          });
        }
      });
      localStorage.setItem('users', JSON.stringify(users));
    });
  }
}
