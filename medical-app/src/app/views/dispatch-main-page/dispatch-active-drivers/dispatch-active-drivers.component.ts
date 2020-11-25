import { Component, OnInit } from '@angular/core';
import {DriverStatusService} from '../../../services/driver-status.service';
@Component({
  selector: 'dispatch-active-drivers',
  templateUrl: './dispatch-active-drivers.component.html',
  styleUrls: ['./dispatch-active-drivers.component.less']
})
export class DispatchActiveDriversComponent implements OnInit {

  constructor(public driverStatus: DriverStatusService) {}

  ngOnInit(): void {
  }

}
