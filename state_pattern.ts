// State Interface 
abstract class ShapeState {
  abstract drawShape() : void
  abstract eraseShape() : void 
}

// Concrete State 
class CircleState extends ShapeState {

  drawShape(): void {
      console.log("Drawing Circle")
  }

  eraseShape(): void {
      console.log("Erasing Circle")
  }
}
// Concrete State 
class RectangleState extends ShapeState {

  drawShape(): void {
      console.log("Drawing Rectangle")
  }

  eraseShape(): void {
      console.log("Erasing Rectangle")
  }

}


// Context 
class StateShape {
  state : ShapeState

  constructor(state : ShapeState) {
      this.state = state
  }

  draw(): void {
    this.state.drawShape()
  }

  erase(): void {
    this.state.eraseShape()
  }
}


// Client 
function stateClient() {
  let circle = new StateShape(new CircleState())
  circle.draw()
  circle.erase()

  let rectangle = new StateShape(new RectangleState())
  rectangle.draw()
  rectangle.erase()
}

stateClient()