 interface Pet {
 name:string
 age:number
 speak():string
}
 export class Dog implements Pet{
  name: string;
  age: number;


  constructor(name:string,age:number){
    this.name=name;
    this.age=age;

  }
   speak(): string {
     return("Woof");
   }

}
export class Parrot implements Pet {
  name: string;
  age: number;
  words: string[]; // Propriété pour stocker les mots que le perroquet peut dire.

  constructor(name: string, age: number, words: string[]) {
    this.name = name;
    this.age = age;
    this.words = words;
  }

  speak(): string {
    return this.words.join(", ");
  }
}
export class Cat implements Pet {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    speak(): string {
      return "Meow!.";
    }
  }

