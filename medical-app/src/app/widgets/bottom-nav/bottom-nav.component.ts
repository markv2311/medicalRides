import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JobSelectorService} from "../../services/job-selector.service";

@Component({
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.less']
})
export class BottomNavComponent implements OnInit {
  // Determines if the user has dispatch view
  hasDispatchView = true;

  constructor(
      private router: Router,
      private jobSelectorService: JobSelectorService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Function opens the dispatcher view route
   */
  openDispatchView(): void {
    this.router.navigate(['./dispatch']);
  }

  /**
   * Function opens the driver view route
   */
  openDriverView(): void {
    this.router.navigate(['./driver']);
  }

  /**
   * Function toggles between the active job
   */
  toggleJob(): void {
    // Toggle the job
    this.jobSelectorService.toggleJob();
    console.log('Job toggled!');
  }
}
