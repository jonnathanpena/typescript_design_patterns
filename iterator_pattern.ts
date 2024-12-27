// Iterator Interface
abstract class AbstractIterator {
  abstract next(): IteratorTeamMember;
  abstract hasNext(): boolean;
}

// Collection Iterface
abstract class Aggregator {
  abstract getIterator(): AbstractIterator
}


class IteratorTeamMember  {
  name : string
  teamNumber: number 
  position : string 

  constructor(name: string, teamNumber: number, position: string) {
      this.name = name
      this.teamNumber = teamNumber
      this.position = position
  }

  printMemberInfo(): void {
      console.log("Name: %s Team Number: %d Position: %s\n", this.name, this.teamNumber, this.position)
  }

}


// Concrete Iterator
class TeamMemberIterator extends AbstractIterator {

  teamMembers : IteratorTeamMember[]
  index : number = 0

  constructor(teamMembers : IteratorTeamMember[] ){
      super()
      this.teamMembers = teamMembers
  }

  hasNext(): boolean {
    return this.index < this.teamMembers.length;
  }

  next(): IteratorTeamMember{
    return this.teamMembers[this.index++];
  }
}

// Concrete Collection
class IteratorRoster extends Aggregator {
  teamMembers : IteratorTeamMember[] 

  constructor(teamMembers : IteratorTeamMember[]) {
      super()
      this.teamMembers = teamMembers
  }

  getIterator(): TeamMemberIterator {
    return new TeamMemberIterator(this.teamMembers);
  }
}

// Client
function iteratorClient() {
  let member1 = new IteratorTeamMember("Johnny Rocket", 12, "Forward")
  let member2 = new IteratorTeamMember("Tim Hoops", 24, "Point Guard")
  let member3 = new IteratorTeamMember("Billy Banks", 29, "Shooting Guard")

  let roster = new IteratorRoster([member1, member2, member3])
  let iterator = roster.getIterator()

  while(iterator.hasNext()) {
      iterator.next().printMemberInfo()
  }
  
}

iteratorClient()

