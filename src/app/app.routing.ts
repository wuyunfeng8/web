import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './page/home/home.component'
import { StudyComponent } from './page/study/study.component'
import { ProjectInfoComponent } from './page/project-info/project-info.component'
import { LoginComponent } from './page/login/login.component'
export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'study', component: StudyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'study/:name', component: ProjectInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
]
