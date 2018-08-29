import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { RepoInfo } from "../../model/info.interface";
import { Participation } from "../../model/participation.interface";
import { Contributor } from "../../model/contributors.interface";
import { Languages } from "../../model/languages.interface";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepoInfo(repo: string): Observable<RepoInfo> {
    return this.http.get<RepoInfo>(`${environment.githubApi.reposUrl}${repo}`);
  }

  getCommits(repo: string): Observable<Participation> {
    return this.http.get<Participation>(
      `${environment.githubApi.reposUrl}${repo}/stats/participation`
    );
  }

  getLanguages(repo: string): Observable<Languages> {
    return this.http.get<Languages>(`${environment.githubApi.reposUrl}${repo}/languages`);
  }

  getContributors(repo: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(`${environment.githubApi.reposUrl}${repo}/contributors`);
  }

  getIssues(repo: string, state: string): Observable<any> {
    return this.http.get<RepoInfo>(
      `${environment.githubApi.reposUrl}${repo}/issues?state=${state}`
    );
  }

  repoExists(repo: string): Observable<any> {
    return this.http.get(environment.githubApi.reposUrl + repo);
  }
}
