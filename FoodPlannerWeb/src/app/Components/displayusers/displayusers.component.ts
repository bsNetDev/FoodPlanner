import { Component, OnInit } from '@angular/core';
import { FoodPlannerservice } from '../foodplannerservice.service';

@Component({
  selector: 'displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayUsersComponent implements OnInit {
  constructor(private service: FoodPlannerservice) {}
  users: any; 

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(
      (response) => {this.users = response; console.log(response) },
      (error) => { console.log(error) }
    );
  }
}
