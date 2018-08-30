
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './board.component';

describe('BoardComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
