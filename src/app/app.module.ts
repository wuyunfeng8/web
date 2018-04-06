import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { routes } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { StudyComponent } from './study/study.component';
import { ProjectInfoComponent } from './project-info/project-info.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, StudyComponent, ProjectInfoComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
