class Spacecraft {
    constructor(public propulsor: string) { }

    jumpIntoHypespace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface Containership {

    cargoContainers: number
}

export {Spacecraft, Containership}