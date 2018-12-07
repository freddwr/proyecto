import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavStComponent } from './nav-st/nav-st.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavStComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
