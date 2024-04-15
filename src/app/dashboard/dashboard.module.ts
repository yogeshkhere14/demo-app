import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../_modules/angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { PathModalComponent } from './path-modal/path-modal.component';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidebarNavComponent,
    PathModalComponent,
    UploadModalComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class DashboardModule { }
