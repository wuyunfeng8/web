import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { routes } from './app.routing'

import { AppComponent } from './app.component'
import { HomeComponent } from './page/home/home.component'
import { HeaderComponent } from './layout/header/header.component'
import { StudyComponent } from './page/study/study.component'
import { ProjectInfoComponent } from './page/project-info/project-info.component'
import { AboutComponent } from './page/about/about.component'
import { HomeService } from './server/home.service';
import { LoginComponent } from './page/login/login.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, StudyComponent, ProjectInfoComponent, AboutComponent, LoginComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
