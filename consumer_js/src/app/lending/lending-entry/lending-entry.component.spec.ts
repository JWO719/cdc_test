import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingEntryComponent } from './lending-entry.component';

describe('LendingEntryComponent', () => {
  let component: LendingEntryComponent;
  let fixture: ComponentFixture<LendingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
