import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './comps/contactme/contactme.component';
import { HomeComponent } from './comps/home/home.component';
import { ProjectsComponent } from './comps/projects/projects.component';

const routes: Routes = [
  {path:'contact',component:ContactmeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
