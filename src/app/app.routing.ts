import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StudyComponent } from "./study/study.component";
import { ProjectInfoComponent } from "./project-info/project-info.component";
export const routes = [
  { path: "home", component: HomeComponent },
  { path: "study", component: StudyComponent },
  { path: "study/:name", component: ProjectInfoComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
];
