import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'driver-map-page',
  templateUrl: './driver-map-page.component.html',
  styleUrls: ['./driver-map-page.component.less']
})
export class DriverMapPageComponent implements OnInit {
  latitude = 43.1566;
  longitude = -77.6088;
  constructor() { }

  ngOnInit(): void {
  }

}
