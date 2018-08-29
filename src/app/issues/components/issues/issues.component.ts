import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { IssuesState } from "../../store/issues.state";
import { Observable } from "rxjs";
import { Issue } from "../../../shared/model/issues.interface";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"]
})
export class IssuesComponent implements OnInit {
  @Select(IssuesState.open)
  openIssues$: Observable<Issue>;
  @Select(IssuesState.closed)
  closedIssues$: Observable<Issue>;

  constructor() {}

  ngOnInit() {}
}
