import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IssuesComponent } from "./components/issues/issues.component";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  imports: [CommonModule, MatTabsModule],
  declarations: [IssuesComponent],
  exports: [IssuesComponent]
})
export class IssuesModule {}
