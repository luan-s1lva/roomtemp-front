import { Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'author', component: AuthorComponent },
];
