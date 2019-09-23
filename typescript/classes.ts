import { Spacecraft, Containership } from './base-ships'
import { MillenniumFalcon } from './starfighters'


let ship = new Spacecraft('Hyperdrive')

ship.jumpIntoHypespace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHypespace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job ? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`)