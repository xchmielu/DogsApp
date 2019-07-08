import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  constructor(private userDataService: UserDataService) {}
  dogs = this.userDataService.showUserDogs();
  onClick() {
    console.log(this.userDataService.showUserDogs());
  }
}
