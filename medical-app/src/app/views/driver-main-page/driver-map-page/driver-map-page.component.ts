import { Component, OnInit } from '@angular/core';
import {JobSelectorService} from '../../../services/job-selector.service';
import {Job} from '../../../classes/job';

@Component({
  selector: 'driver-map-page',
  templateUrl: './driver-map-page.component.html',
  styleUrls: ['./driver-map-page.component.less']
})
export class DriverMapPageComponent implements OnInit {
  //latitude and longitute for map center
  latitude = 43.1566;
  longitude = -77.6088;
  public job: Job;
  //origin and destination for map routing
  public origin: any;
  public destination: any;


  constructor(private jobSelectorService: JobSelectorService) { }

  ngOnInit(): void {
    this.job = this.jobSelectorService.getCurrentJob();
    this.getDirection();
  }
  getDirection(){
    //origin will be set somewhere random ig since we wont have actual van location
    this.origin = '420 Monroe Avenue Rochester';
    //destination rn set to cordinates
    this.destination = this.job.destinationAddress;
  }

}
