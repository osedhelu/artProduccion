import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevexpressModule } from '../devexpress/devexpress.module';
import { NavigationCrudComponent } from './navigation-crud/navigation-crud.component';

@NgModule({
  declarations: [NavigationCrudComponent],
  exports: [NavigationCrudComponent],
  imports: [
    CommonModule,
    DevexpressModule
  ]
})

export class SharedModule { }
