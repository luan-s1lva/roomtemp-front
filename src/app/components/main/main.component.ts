import { Component } from '@angular/core';
import { MainModule } from '../../modules/main/main.module';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainModule, FormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
