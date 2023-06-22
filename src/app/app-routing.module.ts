import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './comps/contactme/contactme.component';
import { HomeComponent } from './comps/home/home.component';

const routes: Routes = [
  {path:'contact',component:ContactmeComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
