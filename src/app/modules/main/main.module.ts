import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from '../../components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  exports: [DashboardComponent],
})
export class MainModule {}
