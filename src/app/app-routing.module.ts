import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'delete',component:DeleteComponent
  },
  {
    path:'userlist',component:UserlistComponent
  },
  {
    path:'productlist',component:ProductlistComponent
  },
  {
    path:'userdetail',component:UserdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
