class Train {
  name : string
  location : string
  passengers : string[]

  constructor(name : string, location : string , passengers : string[]){
      this.name = name
      this.location = location
      this.passengers = passengers
  }
}



// Command Interface 
abstract class Command {
  abstract execute(train: Train) : void
}



// Concrete Command 1
class AddPassengerCommand extends Command  {
  passenger : string 

  constructor(passenger : string) {
      super()
      this.passenger = passenger
  }

  execute(train : Train) {
      train.passengers.push(this.passenger)
      console.log("New passenger on board: " + this.passenger)
  }
}


// Concrete Command 2 
class MoveTrainCommand extends Command  {
  location : string 

  constructor(location : string) {
      super()
      this.location = location
  }

  execute(train : Train) {
      train.location = this.location
      console.log("The train is locatied at: " + train.location)
  }
}


// Invoker
class Invoker {

  command! : Command
  

  setCommand(command: Command) {
      this.command = command
  }

  executeCommand(train : Train) {
      this.command.execute(train)
  }
}




// Client
function commandClient() {
  let train = new Train("Express", "Station A", [])

  let addPassengerCommand = new AddPassengerCommand("Alice")
  let moveTrainCommand = new MoveTrainCommand("Station B")

  let inkoker = new Invoker()
  inkoker.setCommand(addPassengerCommand)
  inkoker.executeCommand(train)

  inkoker.setCommand(moveTrainCommand)
  inkoker.executeCommand(train)
}

commandClient()