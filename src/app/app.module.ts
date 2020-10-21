import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { CardSwipeComponent } from './card-swipe/card-swipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    FilterComponent,
    HomeComponent,
    CardSwipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
