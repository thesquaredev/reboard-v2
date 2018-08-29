import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDialogComponent } from './repo-dialog.component';

describe('RepoDialogComponent', () => {
  let component: RepoDialogComponent;
  let fixture: ComponentFixture<RepoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
