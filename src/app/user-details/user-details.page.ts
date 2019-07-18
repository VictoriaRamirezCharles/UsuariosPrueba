import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  details: [];
  constructor(public userService: UserServiceService) { }

  ngOnInit() {
  this.userService.getUsersDetails().subscribe(
    (data: any ) => {
      this.details = data.results;
    },
    (error) => {
      console.error(error);
    });
}
}