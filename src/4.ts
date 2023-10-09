class Key {
  constructor(
    private signature: number = parseFloat(Math.random().toFixed(2))
  ) {}

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  public abstract openDoor(key: Key): boolean;

  public comeIn(person: Person): void {
    if (this.door) {
      console.log(`The door is open`);
      this.tenants.push(person);
    } else {
      console.log(
        `The door is closed. The key ${key.getSignature()} are wrong`
      );
    }
  }
}

class MyHouse extends House {
  public openDoor(key: Key): boolean {
    return (this.door = this.key === key);
  }
}

const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
