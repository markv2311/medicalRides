import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailsPageComponent } from './driver-details-page.component';

describe('DriverDetailsPageComponent', () => {
  let component: DriverDetailsPageComponent;
  let fixture: ComponentFixture<DriverDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
