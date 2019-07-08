import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../services/dog-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dog-creator',
  templateUrl: './dog-creator.component.html',
  styleUrls: ['./dog-creator.component.scss']
})
export class DogCreatorComponent implements OnInit {
  profileForm = new FormGroup({
    dogName: new FormControl(''),
    dogBread: new FormControl(''),
    owner: new FormControl('')
  });
  public DogDataService: any;

  users = JSON.parse(localStorage.getItem('users')).map(user => user.login);

  dogURL = '';
  currentDog = '';
  dogsList = [];

  constructor(private dogDataService: DogDataService) {
    this.dogDataService.getAllDogs();
  }
  dogs = this.dogDataService.dogsList;

  onSubmit() {
    const dog = this.profileForm.value.dogBread;
    this.dogDataService.getDogImage(dog).subscribe(dog => {
      this.dogURL = dog;
    });
    this.currentDog = dog;
    this.dogURL = this.dogDataService.dogURL;
    console.log(this.dogURL);
    this.dogURL = this.dogDataService.dogURL;
    const users = JSON.parse(localStorage.getItem('users'));
    this.dogsList.push({
      dogName: this.profileForm.value.dogName,
      dogBread: this.profileForm.value.dogBread,
      owner: this.profileForm.value.owner,
      dogUrl: this.dogURL
    });
    console.log(this.dogsList);
    // users.map(user => {
    //   user.dogs =
    // })
    localStorage.getItem('currentUser');
  }

  ngOnInit() {}
}
