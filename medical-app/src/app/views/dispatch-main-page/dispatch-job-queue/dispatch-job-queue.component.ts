import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/classes/job';
import {Router} from '@angular/router';
import {JobSelectorService} from "../../../services/job-selector.service";

@Component({
  selector: 'dispatch-job-queue',
  templateUrl: './dispatch-job-queue.component.html',
  styleUrls: ['./dispatch-job-queue.component.less']
})
export class DispatchJobQueueComponent implements OnInit {
  status: boolean = true;
  status2: boolean = false;
  status3: boolean = true;
  public job1: Job;
  public job2: Job;
  public job3: Job;
  public jobs: Job[];
  //all buttons must have diffrent status values.
  driverstatus: string ='Needs Assignment';

  driver2status: string ='Rolling';

  driver3status: string ='Clear';
//This is where the data for the buttons will be taken and given to the html file.

  constructor(private router: Router, jobSelectorService: JobSelectorService) {
    //These are the "properties" of the three job buttons. 
    //By using this method with JSON, these properties can be called from anywhere
    //TODO: Make this dynamic
    this.jobs = jobSelectorService.getJobs();
    this.job1 = this.jobs[0];
    this.job2 = this.jobs[1];
    this.job3 = this.jobs[2];
  }
  ngOnInit(): void {
  }
  navigateToDispatcherOptions(): void{
    this.router.navigate(['./dispatcher-options']);
  }

}
