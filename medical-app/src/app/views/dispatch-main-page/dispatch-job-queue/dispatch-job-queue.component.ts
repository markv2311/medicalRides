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
  status: boolean = true;
  status2: boolean = false;
  status3: boolean = true;
  public job: Job;
  statuses: boolean[];
  public jobs: Job[];
  // All buttons must have different status values.
  driverstatus: string ='Needs Assignment';

  driver2status: string ='Rolling';

  driver3status: string ='Clear';
  driverStatuses: string[];
// This is where the data for the buttons will be taken and given to the html file.
  constructor(private router: Router, private jobSelectorService: JobSelectorService) {
    // These are the "properties" of the three job buttons.
    this.jobs = jobSelectorService.getJobs();

    // TODO: Replace this eventually with a more dynamic solution
    this.driverStatuses = [this.driverstatus, this.driver2status, this.driver3status];
    this.statuses = [this.status, this.status2, this.status3];
  }
  ngOnInit(): void {
    this.job = this.jobSelectorService.getCurrentJob();
  }

  /**
   * Sends the user to the dispatcher options page
   */
  navigateToDispatcherOptions(): void{
    this.router.navigate(['./dispatcher-options']);
  }
}
