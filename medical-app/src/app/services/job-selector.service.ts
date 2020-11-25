import { Injectable } from '@angular/core';
import {Job} from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class JobSelectorService {

  // Adds three sample jobs that can be used within the application
  private readonly jobOne: Job; // These are readonly as they are assigned in the constructor and nowhere else
  private readonly jobTwo: Job;
  private readonly jobThree: Job;
  private currentJob: Job;

  constructor() {
    /** TECHNIQUE 1: Create object using OOP techniques */
    this.jobOne = new Job(); // Create job
    this.jobOne.jobId = 0;
    this.jobOne.destinationAddress = 'Unity Hospital'; // Define properties
    this.jobOne.pickupAddress = '123 Generic Lane';
    this.jobOne.pickupTime = '2:30 PM';
    this.jobOne.dropOffTime = '3:30 PM';
    this.jobOne.dropOffDetails = 'Main Entrance';
    this.jobOne.tripDistance = 5.7;
    this.jobOne.numPassengers = 1;
    this.jobOne.vehicleType = 'Double';
    this.jobOne.notes = 'The pickup location is farther than normal.  Arrive earlier than normal to account for traffic.';
    /** TECHNIQUE 2: Use JSON (preferred approach) */
    this.jobTwo = {
      jobId: 1,
      destinationAddress: 'Rochester Regional Hospital',
      pickupAddress: '43 Rainbow Road',
      pickupTime: '12:00 PM',
      dropOffTime: '1:00 PM',
      dropOffDetails: 'Back Service Gate',
      tripDistance: 5.5,
      numPassengers: 0,
      vehicleType: 'Single',
      notes: 'Passenger tends to run late.  Arrive extra early.'
    };
    this.jobThree = {
      jobId: 11,
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
    // Check if the job was cached
    if (!localStorage.getItem('currentJobId')) {
      // By default, the current job will initialize to jobOne
      this.currentJob = this.jobOne;
    } else {
      this.currentJob = this.retrieveJobFromCache();
    }
  }

  /**
   * Figures out which job is being used based off of a cached value
   *
   * @return - Returns the active job
   */
  retrieveJobFromCache(): Job {
    if (Number(localStorage.getItem('currentJobId')) === 0) {
      return this.jobOne;
    } else {
      return this.jobTwo;
    }
  }

  /**
   * Function retrieves the active job
   *
   * @return - Returns the current job
   */
  getCurrentJob(): Job {
    // Check if the cached value exists
    if (localStorage.getItem('currentJobId')) {
      // If it does, check which job is present
      return this.retrieveJobFromCache();
    } else {
      return this.currentJob;
    }
  }

  /**
   * Toggles the jobs
   */
  toggleJob(): void {
    // Toggle the job from one to two when this function is run
    this.currentJob = (this.currentJob === this.jobOne) ? this.jobTwo : this.jobOne;
    // Cache the value
    localStorage.setItem('currentJobId', this.currentJob.jobId.toString());
  }

  /**
   * Gets the list of jobs
   *
   * @return - Returns the list of jobs as an array
   */
  getJobs(): Job[] {
    return [this.jobOne, this.jobTwo, this.jobThree];
  }
}
