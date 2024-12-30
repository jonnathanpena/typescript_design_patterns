abstract class Car {

  abstract drive() : void 
  startEngine(): void {
      console.log("Starting Engine")
  }

  stopEngine(): void {
      console.log("Stoping Engine")
  }

  // template method 
  run() : void {
    this.startEngine();
    this.drive();
    this.stopEngine();
  }

}


class Sedan extends Car {

  drive() {
     console.log("Driving a Sedan")
  }
}


class SUV extends Car {

  drive(){
     console.log("Driving an SUV")
  }
}



function templateMethodClient() {

  let sedan = new Sedan()
  sedan.run()

  let suv = new SUV()
  suv.run()
}

templateMethodClient()

