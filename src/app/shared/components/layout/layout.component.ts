import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatDialog } from "@angular/material";
import { RepoDialogComponent } from "../repo-dialog/repo-dialog.component";
import { SharedState } from "../../store/shared.state";
import { Select } from "@ngxs/store";

@Component({
  selector: "app-shared/components/layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  @Select(SharedState.repo)
  repo: Observable<string>;
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(RepoDialogComponent, {
      width: "250px"
    });
  }
}
