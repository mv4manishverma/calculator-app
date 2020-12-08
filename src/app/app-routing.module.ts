import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCalComponent } from './about-cal/about-cal.component';
import { ScientificCalComponent } from './scientific-cal/scientific-cal.component';
import { SimpleCalComponent } from './simple-cal/simple-cal.component';

const routes: Routes = [
  {path: "simple", component: SimpleCalComponent},
  {path: "scientific", component: ScientificCalComponent},
  {path: "about", component: AboutCalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SimpleCalComponent, ScientificCalComponent, AboutCalComponent]
