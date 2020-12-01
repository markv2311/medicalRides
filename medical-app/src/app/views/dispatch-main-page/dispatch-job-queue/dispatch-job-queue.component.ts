import { Component, Input, OnInit } from '@angular/core';
import {JobSelectorService} from '../../../services/job-selector.service';
import { Job } from 'src/app/classes/job';
import {Router} from '@angular/router';

@Component({
  selector: 'dispatch-job-queue',
  templateUrl: './dispatch-job-queue.component.html',
  styleUrls: ['./dispatch-job-queue.component.less']
})
export class DispatchJobQueueComponent implements OnInit {
  status = true;
  status2 = false;
  status3 = true;
  statuses: boolean[];
  public jobs: Job[];
// This is where the data for the buttons will be taken and given to the html file.
  constructor(private router: Router, private jobSelectorService: JobSelectorService) {
    // These are the "properties" of the three job buttons.
    this.jobs = jobSelectorService.getJobs();
    // TODO: Replace this eventually with a more dynamic solution
    this.statuses = [this.status, this.status2, this.status3];
  }
  ngOnInit(): void {}

  /**
   * Sends the user to the dispatcher options page
   */
  navigateToDispatcherOptions(job: Job): void{
    this.router.navigate(['./dispatcher-options'], {state: {data: job}});
  }
}
