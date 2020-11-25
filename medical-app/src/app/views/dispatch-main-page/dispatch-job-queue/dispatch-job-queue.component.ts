import { Component, Input, OnInit } from '@angular/core';
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
  public job1: Job;
  public job2: Job;
  public job3: Job;
  public jobs: Job[];
  //all buttons must have diffrent status values.
  driverstatus: string ='Needs Assignment';

  driver2status: string ='Rolling';

  driver3status: string ='Clear';
//This is where the data for the buttons will be taken and given to the html file.

  constructor(private router: Router) {
    this.job1 ={
      jobId:9,
      destinationAddress: '64 Stone Rd',
      pickupAddress: '1242 Thing Ave',
      pickupTime: '6:40 PM',
      dropOffTime: '7:00 PM',
      dropOffDetails: 'null',
      tripDistance: 6,
      numPassengers: 1,
      vehicleType: null,
      notes: null
    };
    this.job2 ={
      jobId:10,
      destinationAddress: '125 University Ave',
      pickupAddress: '295 Robin Rd',
      pickupTime: '8:25 AM',
      dropOffTime: '9:00 AM',
      dropOffDetails: 'null',
      tripDistance: 10,
      numPassengers: 1,
      vehicleType: null,
      notes: null
    };
    this.job3 ={
      jobId:11,
      destinationAddress: '385 W.Main St',
      pickupAddress: '249 Yellow Rock Dr',
      pickupTime: '2:15 PM',
      dropOffTime: '2:30 PM',
      dropOffDetails: 'null',
      tripDistance: 2,
      numPassengers: 1,
      vehicleType: null,
      notes: null
    };
    //These are the "properties" of the three job buttons. 
    //By using this method with JSON, these properties can be called from anywhere
    this.jobs =[this.job1,this.job2,this.job3];
  }
  ngOnInit(): void {
  }
  navigateToDispatcherOptions(): void{
    this.router.navigate(['./dispatcher-options']);
  }

}
