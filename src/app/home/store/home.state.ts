import { State, Action, StateContext, Selector } from "@ngxs/store";
import { GetRepoInfo, GetCommits, GetLanguages, GetContributors } from "./home.actions";
import { Participation } from "../../shared/model/participation.interface";
import { Contributor } from "../../shared/model/contributors.interface";
import { GithubService } from "../../shared/services/github/github.service";
import { take, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Languages } from "../../shared/model/languages.interface";
import { ChartData, LineChartData } from "../../shared/model/charts.interface";

export interface HomeStateModel {
  participation: Participation;
  contributors: Contributor[];
  languages: Languages;
}

@State<HomeStateModel>({
  name: "home",
  defaults: { participation: null, contributors: [], languages: null }
})
export class HomeState {
  constructor(private githubService: GithubService) {}

  @Selector()
  static participation(state: HomeStateModel): LineChartData[] {
    return [
      {
        name: "Commits",
        series: state.participation.all.map((num, index) => ({
          name: index.toString(),
          value: num
        }))
      }
    ];
  }

  @Selector()
  static contributors(state: HomeStateModel): ChartData[] {
    return state.contributors.map(c => ({ name: c.login, value: c.contributions }));
  }

  @Selector()
  static languages(state: HomeStateModel): ChartData[] {
    const languagesArray = [];
    for (let prop in state.languages) {
      languagesArray.push({ name: prop, value: state.languages[prop] });
    }
    return languagesArray;
  }

  @Action(GetCommits)
  getCommits(ctx: StateContext<any>, { repo }: GetCommits): Observable<Participation> {
    return this.githubService.getCommits(repo).pipe(
      take(1),
      tap(participation => ctx.patchState({ participation }), e => console.warn(e))
    );
  }

  @Action(GetLanguages)
  getLanguages(ctx: StateContext<any>, { repo }: GetLanguages): Observable<Languages> {
    return this.githubService.getLanguages(repo).pipe(
      take(1),
      tap(languages => ctx.patchState({ languages }), e => console.warn(e))
    );
  }

  @Action(GetContributors)
  getContributors(ctx: StateContext<any>, { repo }: GetContributors): Observable<Contributor[]> {
    return this.githubService.getContributors(repo).pipe(
      take(1),
      tap(contributors => ctx.patchState({ contributors }), e => console.warn(e))
    );
  }
}
