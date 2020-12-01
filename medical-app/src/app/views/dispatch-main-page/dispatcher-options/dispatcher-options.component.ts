import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DriverStatusService} from '../../../services/driver-status.service';
import {JobSelectorService} from '../../../services/job-selector.service';
import {Job} from '../../../classes/job';

@Component({
  selector: 'app-dispatcher-options',
  templateUrl: './dispatcher-options.component.html',
  styleUrls: ['./dispatcher-options.component.less']
})

export class DispatcherOptionsComponent implements OnInit {

public job: Job;

  constructor(private jobSelectorService: JobSelectorService, private router: Router, public driverStatus: DriverStatusService) { }

  ngOnInit(): void {
    this.job = history.state.data;
  }

  navigateToDispatchMainPageComponent(): void{
    this.router.navigate(['./dispatch']);
  }

}
