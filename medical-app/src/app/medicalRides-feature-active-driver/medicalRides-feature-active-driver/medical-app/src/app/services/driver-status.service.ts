import { Injectable } from '@angular/core';
import {Driver} from '../classes/driver';
@Injectable({
  providedIn: 'root'
})
export class DriverStatusService {
  private readonly driverOne: Driver; // These are readonly as they are assigned in the constructor and nowhere else
  private readonly driverTwo: Driver;
  private readonly driverThree: Driver;
  private drivers: Driver[];

  constructor() {
  /** TECHNIQUE 2: Use JSON (preferred approach) */
      this.driverOne = {
        name: 'Bob',
        status: 'Online'
      };
      this.driverTwo = {
              name: 'Charles',
              status: 'Offline'
      };
      this.driverThree = {
              name: 'Ashley',
              status: 'Online'
      };
      this.drivers = [this.driverOne, this.driverTwo, this.driverThree];
  }
  /**
  * This function retrieves the drivers
  *
  * @return - Returns the list of drivers
  */
  getDrivers(): Driver[]
  {
    return this.drivers;
  }
}
