import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Store, Select } from "@ngxs/store";
import { ChangeRepo } from "../../store/shared.actions";
import { SharedState } from "../../store/shared.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-repo-dialog",
  templateUrl: "./repo-dialog.component.html",
  styleUrls: ["./repo-dialog.component.css"]
})
export class RepoDialogComponent {
  @Select(SharedState.repo)
  repo: Observable<string>;
  repoName: string = "";

  constructor(public dialogRef: MatDialogRef<RepoDialogComponent>, private store: Store) {
    this.repo.subscribe((v: string) => (this.repoName = v));
  }

  onNoClick(): void {
    if (this.repoName.length) {
      console.log(this.repoName.length);
      this.dialogRef.close();
    }
  }

  changeRepo() {
    this.store.dispatch(new ChangeRepo(this.repoName));
  }
}
