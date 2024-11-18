import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'introduction', component: IntroductionComponent },
];
