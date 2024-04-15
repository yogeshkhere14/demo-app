import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  { path: "", component: DashboardComponent ,
children:[
  {
    path: "", component: HomeComponent,
    canActivate: [AuthGuard],
  }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
