import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherOptionsComponent } from './dispatcher-options.component';

describe('DispatcherOptionsComponent', () => {
  let component: DispatcherOptionsComponent;
  let fixture: ComponentFixture<DispatcherOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatcherOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatcherOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
