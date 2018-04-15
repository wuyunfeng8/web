import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './page/home/home.component'
import { StudyComponent } from './page/study/study.component'
import { ProjectInfoComponent } from './page/project-info/project-info.component'
import { LoginComponent } from './page/login/login.component'
import { AddPostComponent } from './page/add-post/add-post.component'
import { PostsComponent } from './page/posts/posts.component'
import { AboutComponent } from './page/about/about.component'
import { PostInfoComponent } from './page/post-info/post-info.component'
export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'study', component: StudyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'post-list', component: PostsComponent },
  { path: 'post-list/:id', component: PostInfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'study/:name', component: ProjectInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
]
