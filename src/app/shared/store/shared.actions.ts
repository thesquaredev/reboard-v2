export class ChangeRepo {
  static readonly type = "[Shared] Change Repo";
  constructor(public repo: string) {}
}
