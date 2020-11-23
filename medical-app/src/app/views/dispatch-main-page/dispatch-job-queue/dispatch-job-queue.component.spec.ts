import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchJobQueueComponent } from './dispatch-job-queue.component';

describe('DispatchJobQueueComponent', () => {
  let component: DispatchJobQueueComponent;
  let fixture: ComponentFixture<DispatchJobQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchJobQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchJobQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
