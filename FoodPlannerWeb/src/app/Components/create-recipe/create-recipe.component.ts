import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FoodPlannerservice } from '../foodplannerservice.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  constructor(private builder: FormBuilder, private service: FoodPlannerservice) {
    
  }

  createRecipeForm = this.builder.group({
    recipeName: this.builder.control('', Validators.required),
    userId: this.builder.control('', Validators.required),
    ingredientId: this.builder.control('', Validators.required),
    measurement: this.builder.control('', Validators.required),
    number: this.builder.control('', Validators.required)
  });

  users: any;
  ingredients: any;
  message = "Plese fill out the form to create a recipe.";
  returnMessage = "";
  selectedIngredient = "";
  recipeItems: any[] = [];
  itemsForCreate: any[] = [];
  ngOnInit(): void {
    this.getUsers();
    this.getIngredients();
  }

  getUsers() {
    this.service.getUsers().subscribe( {
      next: (res) => { this.users = res; },
      error: (error) => { console.log(error) },
      complete: () => { console.log('complete') }
    });
  }

  getIngredients() {
    this.service.getIngredients().subscribe( {
      next: (res) => { this.ingredients = res; },
      error: (error) => { console.log(error) },
      complete: () => { console.log('complete') }
    });
  }

  addToRecipe() {
    console.log('in add to recipe.');
    var ing = this.ingredients.find((i: any) => i.ingredientId === this.createRecipeForm.controls.ingredientId.value);

    console.log(ing);
    let listIng = {
      "name": ing.name,
      "number": this.createRecipeForm.controls.number.value,
      "measurement": ing.measurement
    }

    console.log(listIng);
    this.recipeItems.push(listIng);

    var recipe = {
      "userId": this.createRecipeForm.controls.userId.value,
      "recipeName": this.createRecipeForm.controls.recipeName.value,
      "ingredientId": this.createRecipeForm.controls.ingredientId.value,
      "number": listIng.number
    }

    console.log(recipe);
    this.itemsForCreate.push(recipe);
    console.log(this.itemsForCreate);
  }

  createRecipe() {
    if (this.itemsForCreate.length == 0)
      this.message = "Please add some ingredients to the recipe.";

    this.service.addRecipe(this.itemsForCreate).subscribe({
      next: (response) => {this.returnMessage = `The following recipe was created: ${JSON.stringify(response)}`},
      error: (error) => { console.log(error) }
    });;
  }
}
