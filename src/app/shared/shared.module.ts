import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";
import { RepoDialogComponent } from "./components/repo-dialog/repo-dialog.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    LayoutModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [LayoutComponent, RepoDialogComponent],
  exports: [LayoutComponent, RepoDialogComponent],
  entryComponents: [RepoDialogComponent]
})
export class SharedModule {}
