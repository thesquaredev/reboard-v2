import { Component, OnInit, Input } from "@angular/core";
import { RepoInfo } from "../../../shared/model/info.interface";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  @Input()
  info: RepoInfo;
  constructor() {}

  ngOnInit() {}
}
