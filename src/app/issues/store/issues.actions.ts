export class GetIssues {
  static readonly type = "[Issues] Get Issues";
  constructor(public repo: string, public state: string) {}
}
