import { State, Action, StateContext, Selector, Store } from "@ngxs/store";
import { ChangeRepo } from "./shared.actions";
import { GithubService } from "../services/github/github.service";
import { take, catchError, tap } from "rxjs/operators";
import { GetCommits, GetLanguages, GetContributors } from "../../home/store/home.actions";
import { GetIssues } from "../../issues/store/issues.actions";
import { RepoInfo } from "../model/info.interface";

export interface SharedStateModel {
  loading: boolean;
  repo: string;
  info: RepoInfo;
}

@State<SharedStateModel>({
  name: "shared",
  defaults: { loading: false, repo: "", info: null }
})
export class SharedState {
  constructor(private githubService: GithubService, private store: Store) {}

  @Selector()
  static repo(state: SharedStateModel): string {
    return state.repo;
  }

  @Selector()
  static loading(state: SharedStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static info(state: SharedStateModel): RepoInfo {
    return state.info;
  }

  @Action(ChangeRepo)
  changeRepo(ctx: StateContext<any>, { repo }: ChangeRepo) {
    // check if repo exists
    return this.githubService.repoExists(repo).pipe(
      take(1),
      tap(
        info => {
          ctx.patchState({ repo, info });
          this.dispatchActions(repo);
        },
        e => {
          ctx.patchState({ repo: null });
          console.warn(e);
        }
      )
    );
  }

  private dispatchActions(repo: string) {
    this.store.dispatch(new GetCommits(repo));
    this.store.dispatch(new GetLanguages(repo));
    this.store.dispatch(new GetContributors(repo));
    this.store.dispatch(new GetIssues(repo, "open"));
    this.store.dispatch(new GetIssues(repo, "closed"));
  }
}
