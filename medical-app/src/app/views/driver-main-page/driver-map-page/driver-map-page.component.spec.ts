import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMapPageComponent } from './driver-map-page.component';

describe('DriverMapPageComponent', () => {
  let component: DriverMapPageComponent;
  let fixture: ComponentFixture<DriverMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverMapPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
