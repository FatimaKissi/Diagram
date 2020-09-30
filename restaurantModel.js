class Restaurant {
    constructor({name}) {
        if(!name) throw new Error('Restaurant must have a name')
        this.name = name
    }

}
class Menu {
    constructor({type = "Wines Menu"}){
        this.type = type
    }
}

module.exports = {
    Restaurant,
    Menu
}