import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchMainPageComponent } from './dispatch-main-page.component';

describe('DispatchMainPageComponent', () => {
  let component: DispatchMainPageComponent;
  let fixture: ComponentFixture<DispatchMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
