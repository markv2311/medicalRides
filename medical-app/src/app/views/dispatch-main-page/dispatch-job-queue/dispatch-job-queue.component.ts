import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/classes/job';

@Component({
  selector: 'dispatch-job-queue',
  templateUrl: './dispatch-job-queue.component.html',
  styleUrls: ['./dispatch-job-queue.component.less']
})
export class DispatchJobQueueComponent implements OnInit {
  status: boolean = true;
  status2: boolean = false;
  status3: boolean = true;
  private job1: Job;
  //all buttons must have diffrent status values.

  pickup: string ='1242 Thing Ave';
  destination: string ='64 Stone Rd';
  driver: string ='Needs Assignment';

  pickup2: string ='295 Robin Rd';
  destination2: string ='125 University Ave';
  driver2: string ='Rolling';

  pickup3: string ='249 Yellow Rock Dr';
  destination3: string ='385 W.Main St';
  driver3: string ='Clear';
//This is where the data for the buttons will be taken and given to the html file.

  constructor() {
    this.job1 ={
      jobId:1,
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
    }
  ngOnInit(): void {
  }


}
