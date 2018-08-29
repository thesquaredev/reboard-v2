import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { SharedState } from "../../../shared/store/shared.state";
import { HomeState } from "../../store/home.state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  @Select(SharedState.repo)
  repo: string;
  @Select(HomeState.contributors)
  contributors;
  @Select(HomeState.languages)
  languages;
  @Select(HomeState.participation)
  participation;
}
