import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWindowComponent } from './background-window.component';

describe('BackgroundWindowComponent', () => {
  let component: BackgroundWindowComponent;
  let fixture: ComponentFixture<BackgroundWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
