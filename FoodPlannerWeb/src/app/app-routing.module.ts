import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreateuserComponent } from './Components/createuser/createuser.component';
import { DisplayUsersComponent } from './Components/displayusers/displayusers.component';
import { AddIngredientComponent } from './Components/add-ingredient/add-ingredient.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  },
  {
    path: 'getUsers',
    component: DisplayUsersComponent
  },
  {
    path: 'addIngredient',
    component: AddIngredientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
