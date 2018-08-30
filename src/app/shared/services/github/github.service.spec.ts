import { TestBed, inject, getTestBed } from "@angular/core/testing";

import { GithubService } from "./github.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../../../environments/environment";
import * as mocks from "./github.service.mocks";

describe("GithubService", () => {
  let injector: TestBed;
  let service: GithubService;
  let httpMock: HttpTestingController;
  const dummyUrl = `${environment.githubApi.reposUrl}${mocks.dummyRepo}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    injector = getTestBed();
    service = injector.get(GithubService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it("should be created", inject([GithubService], (service: GithubService) =>
    expect(service).toBeTruthy()
  ));

  it("should get commits", inject([GithubService], (service: GithubService) => {
    service.getCommits(mocks.dummyRepo).subscribe(d => expect(d).toBe(mocks.dummyCommits));

    const req = httpMock.expectOne(`${dummyUrl}/stats/participation`);
    expect(req.request.method).toBe("GET");
    req.flush(mocks.dummyCommits);
  }));

  it("should get contributors", inject([GithubService], (service: GithubService) => {
    service
      .getContributors(mocks.dummyRepo)
      .subscribe(d => expect(d).toBe(mocks.dummyContributors));

    const req = httpMock.expectOne(`${dummyUrl}/contributors`);
    expect(req.request.method).toBe("GET");
    req.flush(mocks.dummyContributors);
  }));

  it("should get issues", inject([GithubService], (service: GithubService) => {
    const state = "open";
    service.getIssues(mocks.dummyRepo, state).subscribe(d => expect(d).toBe(mocks.dummyIssues));

    const req = httpMock.expectOne(`${dummyUrl}/issues?state=${state}`);
    expect(req.request.method).toBe("GET");
    req.flush(mocks.dummyIssues);
  }));

  it("should get repo info", inject([GithubService], (service: GithubService) => {
    service.getRepoInfo(mocks.dummyRepo).subscribe(d => expect(d).toBe(mocks.dummyReepoInfo));

    const req = httpMock.expectOne(dummyUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mocks.dummyReepoInfo);
  }));
});
