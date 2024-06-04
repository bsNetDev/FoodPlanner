import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodPlannerMenu } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card } from './Components/card/card.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './Components/home/home.component';
import { CreateuserComponent } from './Components/createuser/createuser.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayUsersComponent } from './Components/displayusers/displayusers.component';
import { CreateRecipeComponent } from './Components/create-recipe/create-recipe.component';
import { AddIngredientComponent } from './Components/add-ingredient/add-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodPlannerMenu,
    Card,
    HomeComponent,
    CreateuserComponent,
    DisplayUsersComponent,
    CreateRecipeComponent,
    AddIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
