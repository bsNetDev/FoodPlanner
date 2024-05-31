import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FoodPlannerservice } from '../foodplannerservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  constructor(private builder: FormBuilder, private service: FoodPlannerservice) {
    
  }
  message: string = "Please enter email and password."
  returnMessage: string = "";
  createUserForm = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  async createUser() {
    console.log('in create user');
    let email: string | null = this.createUserForm.controls.email.value!;
    let password: string | null = this.createUserForm.controls.password.value!;

    try {
      this.service.createUser(email, password).subscribe(
        (response) => {this.returnMessage = `The following user was created: ${JSON.stringify(response)}`},
        (error) => { console.log(error) }
      );;
    } catch(e) {
      console.error(e);
      return;
    }
  }
}
