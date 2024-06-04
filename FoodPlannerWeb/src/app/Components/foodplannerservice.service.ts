import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodPlannerservice {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  returnMessage: Object = "";

  createUser(email: string, password: string) {

    let newUser = {
      "email": email,
      "password": password
    };

    let url = "http://localhost:5241/createUser";
    return this.http.post(url, newUser);
  }

  getUsers() {
    console.log("in getUsers");
    let url = "http://localhost:5241/getUsers"
    return this.http.get(url);
  }

  addIngredient(name: string, measurement: string) {

    let newIngredient = {
      "name": name,
      "measurement": measurement
    };

    let url = "http://localhost:5241/addIngredient";
    return this.http.post(url, newIngredient);
  }
}
