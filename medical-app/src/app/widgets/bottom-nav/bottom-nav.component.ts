import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.less']
})
export class BottomNavComponent implements OnInit {
  // Determines if the user has dispatch view
  hasDispatchView = true;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * TODO: Function opens the dispatcher view
   */
  openDispatchView(): void {
    console.log('opening dispatch view');
  }

  /**
   * TODO: Function opens the driver view
   */
  openDriverView(): void {
    console.log('opening driver view');
  }

}
