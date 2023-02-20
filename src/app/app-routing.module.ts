import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFootwareComponent } from './create-footware/create-footware.component';
import { FootwearDetailsComponent } from './footwear-details/footwear-details.component';
import { FootwearListComponent } from './footwear-list/footwear-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateFootwearComponent } from './update-footwear/update-footwear.component';

const routes: Routes = [
  { path:'footwears',component: FootwearListComponent},
  {path:'create-footwear', component: CreateFootwareComponent},
  { path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'update-footwear/:batchid',component: UpdateFootwearComponent},
  {path: 'footwear-details/:batchid', component:FootwearDetailsComponent},
  {path: 'login',component: LoginComponent},
  {path: 'Signup',component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
