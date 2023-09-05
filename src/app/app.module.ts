import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { ProjectsComponent } from './comps/projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactmeComponent } from './comps/contactme/contactme.component';
import { FooterComponent } from './comps/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './comps/skills/skills.component';
import { OtherComponent } from './comps/other/other.component';
import { InfoComponent } from './comps/info/info.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactmeComponent,
    FooterComponent,
    SkillsComponent,
    OtherComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
