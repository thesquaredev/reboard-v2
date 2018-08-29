import { Component, OnInit, Input } from "@angular/core";
import { RepoInfo } from "../../../shared/model/info.interface";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  @Input()
  info: RepoInfo;
  constructor() {}

  ngOnInit() {}
}
