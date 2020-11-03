import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AboutPageComponent } from './about-page/about-page.component';
import { FlightPriceComponent } from './flight-price/flight-price.component';

const routes: Routes = [
  {path: 'about-page', component: AboutPageComponent},
  {path: 'flight-price', component: FlightPriceComponent},
  {path: '', pathMatch: 'full', redirectTo: 'about'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    FlightPriceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
