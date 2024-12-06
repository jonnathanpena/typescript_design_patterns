class Database {
  private static instance: Database;

  private constructor() {
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      console.log('Creating a single database');
      Database.instance = new Database(); 
    } else {
      console.log('Database has already createc');
    }

    return Database.instance;
  }
}

// Usage
function singletonClient() {
  for (let i = 0; i < 5; i++ ){
    Database.getInstance()
  }
}

singletonClient()
