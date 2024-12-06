// Component Interface 
abstract class  AbstractIceCream  {
	abstract addToppings() : string
}

// Concrete Component
class IceCream extends AbstractIceCream {
    flavor : string 

    constructor(flavor : string) {
        super()
        this.flavor = flavor
    }

    addToppings() : string {
        return "2 scoops of " + this.flavor
    }
}

// Base Decorators
abstract class IceCreamDecorator  {
	abstract makeIceCream() : void 
}


// Concrete Decorator 1
class Sprinkles extends IceCreamDecorator {
    iceCream : AbstractIceCream

    constructor(iceCream : AbstractIceCream) {
        super()
        this.iceCream = iceCream
    }

    addToppings(): string {
        let currentOrder = this.iceCream.addToppings()
        return currentOrder + " and Rainbow Sprinkles"
    }

    makeIceCream() : void {
        console.log("Here's Your Ice Cream Order")
        console.log(this.addToppings())
        console.log()
    }
}

// Concrete Decorator 2
class Syrup extends IceCreamDecorator {
    iceCream : AbstractIceCream

    constructor(iceCream : AbstractIceCream) {
        super()
        this.iceCream = iceCream
    }

    addToppings(): string {
        let currentOrder = this.iceCream.addToppings()
        return currentOrder + " and Chocolate Syrup"
    }

    makeIceCream() : void {
        console.log("Here's Your Ice Cream Order")
        console.log(this.addToppings())
        console.log()
    }
}

// Decorator Client
function decoratorClient() {
  let iceCream = new IceCream('Chocolate')
  let iceCreamWithSprinkles = new Sprinkles(iceCream)

  iceCreamWithSprinkles.makeIceCream()

  let iceCreamWithSprinklesAndChocolate = new Syrup(iceCreamWithSprinkles)
  iceCreamWithSprinklesAndChocolate.makeIceCream()
}

decoratorClient()

