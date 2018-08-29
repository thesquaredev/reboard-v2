import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/components/home/home.component";
import { IssuesComponent } from "./issues/components/issues/issues.component";
import { AboutComponent } from "./about/components/about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "issues", component: IssuesComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
