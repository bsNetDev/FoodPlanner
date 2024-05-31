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
    console.log("in createUser in service");

    let newUser = {
      "email": email,
      "password": password
    };

    let url = "http://localhost:5241/createUser";
    return this.http.post(url, newUser);
  }
}
