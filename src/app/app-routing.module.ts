import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/components/home/home.component";
import { IssuesComponent } from "./issues/components/issues/issues.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "issues", component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
