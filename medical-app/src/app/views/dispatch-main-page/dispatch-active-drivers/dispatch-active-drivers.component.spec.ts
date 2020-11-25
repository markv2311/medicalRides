import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchActiveDriversComponent } from './dispatch-active-drivers.component';

describe('DispatchActiveDriversComponent', () => {
  let component: DispatchActiveDriversComponent;
  let fixture: ComponentFixture<DispatchActiveDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchActiveDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchActiveDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
