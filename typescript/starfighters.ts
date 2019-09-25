import {Spacecraft, Containership} from './base-ships'

class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number

    constructor() {
        super('Hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHypespace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHypespace()
        } else { console.log('Failed to jump to hyperspace') }
    }
}

export { MillenniumFalcon}