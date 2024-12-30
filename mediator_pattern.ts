// Component Interface 
abstract class Package {
  abstract ship() : void
  abstract deliver() : void
  abstract allowShipping() :void
}


// Mediator Interface 
abstract class Mediator {
  abstract canShip(pack : Package) : boolean
  abstract notifyAboutDelivery() : void
}

// Concrete Component A 
class UPSPackage extends Package {
  mediator : Mediator 

  constructor(mediator : Mediator) {
      super()
      this.mediator = mediator
  }

  ship(){
      if (this.mediator.canShip(this)) {
          console.log("UPS Package Shipping blocked...waiting")
      }
  }

  deliver() : void {
      console.log("Delivering UPS package")
    this.mediator.notifyAboutDelivery()

  }

  allowShipping(): void {
      console.log("UPS Package: Ready to ship")
      this.ship();
  }
}

// Concrete Compomnent B
class FedExPackage extends Package {
  mediator : Mediator 

  constructor(mediator : Mediator) {
      super()
      this.mediator = mediator
  }

  ship(){
      if (this.mediator.canShip(this)) {
          console.log("FedEx Package Shipping blocked...waiting")
      }
  }

  deliver() : void {
      console.log("Delivering FedEx package")
    this.mediator.notifyAboutDelivery()

  }

  allowShipping(): void {
      console.log("FedEx Package: Ready to ship")
      this.ship();
  }

}


// Concrete Mediator
class PackageManager extends Mediator {
  isPackagePacked : boolean
  packages : Package[] = []

  constructor(isPackagePacked : boolean) {
      super()
      this.isPackagePacked = isPackagePacked
  }

  canShip(pack: Package): boolean {
      if (this.isPackagePacked) {
          this.isPackagePacked = false
          return true
      } 

      this.packages.push(pack)
      return false
  }

  notifyAboutDelivery(): void {

      if(!this.isPackagePacked) {
          this.isPackagePacked = true
      }

      if(this.packages.length > 0) {
          let firstPackage = this.packages[0]
          this.packages.shift()
          firstPackage.allowShipping()
      }

  }
}


// Client 
function mediatorClient() {
  let packageManager = new PackageManager(true)

  let upsPackage = new UPSPackage(packageManager)
  let fedExPackage = new FedExPackage(packageManager)

  upsPackage.ship()
  fedExPackage.ship()
  upsPackage.deliver()
  fedExPackage.deliver()
}
mediatorClient()