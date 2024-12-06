// Prototype Interface
abstract class Shape  {
  abstract print() : void
  abstract clone() : Shape
}

// Concrete Prototype

class Circle extends Shape {
  color: string 
  
  constructor(color: string) {
    super();
    this.color = color; 
  }

  print() : void {
    console.log(`${this.color} - circle`); 
  }

  clone() : Shape {
    console.log(`Cloning a ${this.color} circle`);

    return new Circle(this.color);
  }
}



// Client 
function circleClient() {

  let greenCircle = new Circle("Green")
  let blueCircle = new Circle("Blue")
  let redCircle = new Circle("Red")



  let greenClone = greenCircle.clone()
  let blueClone = blueCircle.clone()
  let redClone = redCircle.clone()


  greenCircle.print()
  blueCircle.print()
  redCircle.print()
  greenClone.print()
  blueClone.print()
  redClone.print()

}

circleClient()
