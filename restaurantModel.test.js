const { Restaurant, Menu} = require("./restaurantModel")

describe("Restaurant", () => {
    test("has a name", () => {
        const restaurant = new Restaurant({ name: "Kishmish" })
        expect(restaurant.name).toBe("Kishmish")
    })
    test('Must have a name', () => {
        expect(() => { new Restaurant({}) }).toThrow()
    })
})
describe("menu", () => {
    test("has a type", () => {
        const menu = new Menu({ type: "Wine Menu" })
        expect(menu.type).toBe("Wine Menu")
    })
})

