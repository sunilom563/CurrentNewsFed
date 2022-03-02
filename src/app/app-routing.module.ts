import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import {BuisnessComponent} from './buisness/buisness.component'

const routes: Routes = [
  {path: '', component: TopheadingComponent},     //home
  {path: 'tech', component: TechnewsComponent},  //technews
  {path: 'busine', component: BuisnessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
