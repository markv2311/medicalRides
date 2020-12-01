export class Job {
  jobId: number;
  pickupAddress: string;
  destinationAddress: string;
  pickupTime: string;
  dropOffTime: string;
  tripDistance ?= -1; // Question mark means that the value does not need to be specified (if null/undefined -> defaults to -1)
  dropOffDetails ?= '';
  numPassengers ?= -1;
  vehicleType ?= '';
  notes ?= '';
  status ?= '';
}
