import { Dog, Parrot, Cat } from "./exercice3"; 

describe("Dog", () => {
  it('should speak "Woof"', () => {
    const dog = new Dog("Buddy", 3);
    expect(dog.speak()).toBe("Woof !");
  });
});

describe("Parrot", () => {
  it("should speak words joined by commas", () => {
    const words = ["Hello", "Cracker", "Polly want a cracker"];
    const parrot = new Parrot("Polly", 5, words);
    const expected = words.join(", ");
    expect(parrot.speak()).toBe(expected);
  });
});

describe("Cat", () => {
  it('should speak "Meow!"', () => {
    const cat = new Cat("Whiskers", 2);
    expect(cat.speak()).toBe("Meow!.");
  });
});
