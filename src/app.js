import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js"; //import data
import { FleetDataService } from "./services/fleet-data-service.js"; //to send data to data service

let dataService = new FleetDataService();
dataService.loadData(fleet);   // to parse object


//let car = dataService.getCarByLicense('AT9900');
//let cars = dataService.getCarSortedByLicense();

let cars = dataService.filterCarsByMake('U');

for(let car of cars)
    console.log(car.make);