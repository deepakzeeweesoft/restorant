import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddRestroComponent} from './add-restro/add-restro.component';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {LoginRestroComponent} from './login-restro/login-restro.component';
import {RegisterRestroComponent} from './register-restro/register-restro.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component'

const routes: Routes = [
  {
    path:'add',
    component:AddRestroComponent
  } ,
  

  {
    path:'login',
    component:LoginRestroComponent
  } ,
   
  {
    path:'register',
    component:RegisterRestroComponent
  } ,

  {
    path:'update/:id',
    component:UpdateRestroComponent
  },
  
  
  {
    path:'',
    component:ListRestroComponent
  } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
