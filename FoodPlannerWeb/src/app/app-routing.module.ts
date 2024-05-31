import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreateuserComponent } from './Components/createuser/createuser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
