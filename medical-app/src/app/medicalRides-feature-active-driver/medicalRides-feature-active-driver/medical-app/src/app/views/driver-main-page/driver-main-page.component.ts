import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver-main-page',
  templateUrl: './driver-main-page.component.html',
  styleUrls: ['./driver-main-page.component.less']
})
export class DriverMainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Navigates to an additional detail page
   */
  navigateToDetailsPage(): void {
    this.router.navigate(['./driver-details']);
  }

}
