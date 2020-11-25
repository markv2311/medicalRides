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
   * TODO: Function opens the dispatcher view
   */
  openDispatchView(): void {
    this.router.navigate(['./dispatch']);
  }

  /**
   * TODO: Function opens the driver view
   */
  openDriverView(): void {
    this.router.navigate(['./driver']);
  }

  /**
   * Toggles the active job
   */
  toggleJob(): void {
    this.jobSelectorService.toggleJob();
    console.log('Job toggled!');
  }

}
