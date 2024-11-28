// Product Interfaces
abstract class AbstractChair {
  abstract sitOn(): void;
}

abstract class AbstractTable {
  abstract eatOn(): void;
}

// Concrete Products
class ModernChair extends AbstractChair {
  sitOn(): void {
    console.log("Sitting on a modern chair.");
  }
}

class ModernTable extends AbstractTable {
  eatOn(): void {
    console.log("Eating on a modern table.");
  }
}

class VictorianChair extends AbstractChair {
  sitOn(): void {
    console.log("Sitting on a victorian chair.");
  }
}

class VictorianTable extends AbstractTable {
  eatOn(): void {
    console.log("Eating on a victorian table.");
  }
}


// Abstract Factory
abstract class AbstractFurnitureFactory {
  abstract createChair(): AbstractChair;
  abstract createTable(): AbstractTable;
}


// Concrete Factories
class ModernFurnitureFactory extends AbstractFurnitureFactory {
  createChair(): AbstractChair {
    return new ModernChair();
  }
  createTable(): AbstractTable {
    return new ModernTable();
  }
}

class VictorianFurnitureFactory extends AbstractFurnitureFactory {
  createChair(): AbstractChair {
    return new VictorianChair();
  }
  createTable(): AbstractTable {
    return new VictorianTable();
  }
}

// Implement the Abstract Factory
function furnitureClient(factory: AbstractFurnitureFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();
  
  chair.sitOn();
  table.eatOn();
}

// Create modern furniture
furnitureClient(new ModernFurnitureFactory());

// Create victorian furniture
furnitureClient(new VictorianFurnitureFactory());
