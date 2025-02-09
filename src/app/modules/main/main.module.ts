import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from '../../components/form/form.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [DashboardComponent]
})
export class MainModule { }
