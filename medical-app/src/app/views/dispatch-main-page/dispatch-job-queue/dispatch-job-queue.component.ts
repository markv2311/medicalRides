import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dispatch-job-queue',
  templateUrl: './dispatch-job-queue.component.html',
  styleUrls: ['./dispatch-job-queue.component.less']
})
export class DispatchJobQueueComponent implements OnInit {
  status: boolean = true;
  @Input() pickup: 'pikachu'|'keep going';
  constructor() { }
  ngOnInit(): void {
  }


}
