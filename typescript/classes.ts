import { Spacecraft, Containership } from './base-ships'
import { MillenniumFalcon } from './starfighters'

import * as _ from 'lodash'

let ship = new Spacecraft('Hyperdrive')

console.log(_.pad("Typescript Examples", 40, "="))

ship.jumpIntoHypespace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHypespace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job ? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`)