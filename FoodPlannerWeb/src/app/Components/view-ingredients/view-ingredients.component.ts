import { Component, OnInit } from '@angular/core';
import { FoodPlannerservice } from '../foodplannerservice.service';

@Component({
  selector: 'app-view-ingredients',
  templateUrl: './view-ingredients.component.html',
  styleUrls: ['./view-ingredients.component.css']
})
export class ViewIngredientsComponent implements OnInit {
  constructor(private service: FoodPlannerservice) {}
  ingredients: any; 
  
  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.service.getIngredients().subscribe( {
      next: (res) => { this.ingredients = res; },
      error: (error) => { console.log(error) },
      complete: () => { console.log('complete') }
    });
  }
}
