import { Injectable } from '@angular/core';
import {Job} from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class JobSelectorService {

  // Adds three sample jobs that can be used within the application
  jobOne: Job;
  jobTwo: Job;

  constructor() {
    /** TECHNIQUE 1: Create object using OOP techniques */
    this.jobOne = new Job();
    this.jobOne.destinationAddress = 'Unity Hospital';
    this.jobOne.pickupAddress = '123 Generic Lane';
    this.jobOne.pickupTime = '2:30 PM';
    this.jobOne.dropOffTime = '3:30 PM';
    /** TECHNIQUE 2: Use JSON */
    this.jobTwo = {
      destinationAddress: 'Rochester Regional Hospital',
      pickupAddress: '43 Rainbow Road',
      pickupTime: '12:00 PM',
      dropOffTime: '1:00 PM'
    };
  }

  /**
   *
   */
  getCurrentJob(): Job {

  }
}
