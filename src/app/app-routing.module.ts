import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { CardSwipeComponent } from './card-swipe/card-swipe.component';

import { HammerModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'card-swipe', component: CardSwipeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HammerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
