import { Component, OnInit } from '@angular/core';
import {JobSelectorService} from '../../../services/job-selector.service';
import {Job} from '../../../classes/job';

@Component({
  selector: 'app-driver-details-page',
  templateUrl: './driver-details-page.component.html',
  styleUrls: ['./driver-details-page.component.less']
})
export class DriverDetailsPageComponent implements OnInit {

  public job: Job;

  constructor(private jobSelectorService: JobSelectorService) { }

  ngOnInit(): void {
    // Assign the job to the current job that the service sees
    this.job = this.jobSelectorService.getCurrentJob();
  }

}
