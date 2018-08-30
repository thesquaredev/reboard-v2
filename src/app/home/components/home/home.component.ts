import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { SharedState } from "../../../shared/store/shared.state";
import { HomeState } from "../../store/home.state";
import { Observable } from 'rxjs';
import { RepoInfo } from '../../../shared/model/info.interface';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  @Select(SharedState.info)
  info$: Observable<RepoInfo>;
  @Select(SharedState.repo)
  repo: string;
  @Select(HomeState.contributors)
  contributors;
  @Select(HomeState.languages)
  languages;
  @Select(HomeState.participation)
  participation;
}
