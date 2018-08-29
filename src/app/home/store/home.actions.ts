export class GetRepoInfo {
  static readonly type = "[Home] Get Repo Info";
  constructor(public repo: string) {}
}

export class GetCommits {
  static readonly type = "[Home] Get Commits";
  constructor(public repo: string) {}
}

export class GetLanguages {
  static readonly type = "[Home] Get Languages";
  constructor(public repo: string) {}
}

export class GetContributors {
  static readonly type = "[Home] Get Contributors";
  constructor(public repo: string) {}
}
