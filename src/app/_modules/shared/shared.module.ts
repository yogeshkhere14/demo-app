import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropDirective } from 'src/app/_directives/drag-and-drop.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/_components/login/login.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    DragAndDropDirective,
    LoginComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AngularMaterialModule],
  exports: [
    DragAndDropDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
