import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dispatch-job-queue',
  templateUrl: './dispatch-job-queue.component.html',
  styleUrls: ['./dispatch-job-queue.component.less']
})
export class DispatchJobQueueComponent implements OnInit {
  pickup: string = 'Pikachu';
  status: string;
  constructor() { }

  ngOnInit(): void {
  }


}
