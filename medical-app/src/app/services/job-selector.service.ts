import { Injectable } from '@angular/core';
import {Job} from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class JobSelectorService {

  // Adds three sample jobs that can be used within the application
  private readonly jobOne: Job; // These are readonly as they are assigned in the constructor and nowhere else
  private readonly jobTwo: Job;
  private currentJob: Job;

  constructor() {
    /** TECHNIQUE 1: Create object using OOP techniques */
    this.jobOne = new Job(); // Create job
    this.jobOne.destinationAddress = 'Unity Hospital'; // Define properties
    this.jobOne.pickupAddress = '123 Generic Lane';
    this.jobOne.pickupTime = '2:30 PM';
    this.jobOne.dropOffTime = '3:30 PM';
    /** TECHNIQUE 2: Use JSON (preferred approach) */
    this.jobTwo = {
      destinationAddress: 'Rochester Regional Hospital',
      pickupAddress: '43 Rainbow Road',
      pickupTime: '12:00 PM',
      dropOffTime: '1:00 PM'
    };
    // By default, the current job will initialize to jobOne
    this.currentJob = this.jobOne;
  }

  /**
   * Function retrieves the active job
   *
   * @return - Returns the current job
   */
  getCurrentJob(): Job {
    return this.currentJob;
  }

  /**
   * Toggles the jobs
   */
  toggleJob(): void {
    // Toggle the job from one to two when this function is run
    this.currentJob = (this.currentJob === this.jobOne) ? this.jobOne : this.jobTwo;
  }
}
