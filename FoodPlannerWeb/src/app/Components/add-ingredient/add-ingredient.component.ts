import { Component } from '@angular/core';
import { FoodPlannerservice } from '../foodplannerservice.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent {
  constructor(private service: FoodPlannerservice, private builder: FormBuilder) {}
  message = "Add an ingredient.";
  returnMessage: string = "";
  addIngredientForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    measurement: this.builder.control('', Validators.required)
  });

  addIngredient() {
    let name: string = this.addIngredientForm.controls.name.value!;
    let measurement: string = this.addIngredientForm.controls.measurement.value!;

    try {
      this.service.addIngredient(name, measurement).subscribe({
        next: (response) => {this.returnMessage = `The following ingredient was created: ${JSON.stringify(response)}`},
        error: (error) => { console.log(error) }
      });;
    } catch(e) {
      console.error(e);
      return;
    }
  }
}
