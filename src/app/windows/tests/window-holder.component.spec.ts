import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowHolderComponent } from './window-holder.component';

describe('WindowHolderComponent', () => {
  let component: WindowHolderComponent;
  let fixture: ComponentFixture<WindowHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
