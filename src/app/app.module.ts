import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { routes } from './app.routing'

import { AppComponent } from './app.component'
import { HomeComponent } from './page/home/home.component'
import { HeaderComponent } from './layout/header/header.component'
import { StudyComponent } from './page/study/study.component'
import { ProjectInfoComponent } from './page/project-info/project-info.component'
import { AboutComponent } from './page/about/about.component'
import { HomeService } from './server/home.service'
import { LoginComponent } from './page/login/login.component'
import { AddPostComponent } from './page/add-post/add-post.component'
import { PostService } from './server/post.service'
import { PostsComponent } from './page/posts/posts.component';
import { PostInfoComponent } from './page/post-info/post-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudyComponent,
    ProjectInfoComponent,
    AboutComponent,
    LoginComponent,
    AddPostComponent,
    PostsComponent,
    PostInfoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [HomeService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
