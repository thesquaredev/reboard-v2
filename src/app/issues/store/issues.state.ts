import { Issue } from "../../shared/model/issues.interface";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { GithubService } from "../../shared/services/github/github.service";
import { GetIssues } from "./issues.actions";
import { Observable } from "rxjs";
import { take, tap } from "rxjs/operators";

export interface IssuesStateModel {
  open: Issue[];
  closed: Issue[];
}

@State<IssuesStateModel>({
  name: "issues",
  defaults: { open: [], closed: [] }
})
export class IssuesState {
  constructor(private githubService: GithubService) {}

  @Selector()
  static open(state: IssuesStateModel): Issue[] {
    return state.open;
  }

  @Selector()
  static closed(state: IssuesStateModel): Issue[] {
    return state.closed;
  }

  @Action(GetIssues)
  getCommits(ctx: StateContext<any>, { repo, state }: GetIssues): Observable<Issue[]> {
    return this.githubService.getIssues(repo, state).pipe(
      take(1),
      tap(issues => ctx.patchState({ [state]: issues }), e => console.warn(e))
    );
  }
}
