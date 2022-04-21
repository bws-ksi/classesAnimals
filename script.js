class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age + ' year';
    this.name = name;
    this.weight = weight + ' kg';
    this.limbAmount = limbAmount + ' pieces';
  }
  move(smth){ console.log( `I can ${smth}`)}
  say(smth) { console.log( `I can say ${smth}`)}
  eat(smth) { console.log( `I love eat ${smth}`)}

  static isAnimals(obj) {
    return obj instanceof this;
  }

  static maxAge = 110 + ' years';
  static maxWeight = 15000 + ' kg';
}
//=====================================
class Mammals extends Animals { }
//=====================================
class Predators extends Mammals {
  eat(smth) {
    console.log(`I am sometimes can eat ${smth}`);
  };
}

class Whales extends Mammals { }

class Primat extends Mammals { }


const birds = new Animals(3, 'Eagle', 8, 4);
console.log(birds);
birds.move('fly');

const fish = new Animals(10, 'Shark', 800, 3);
console.log(fish);


const dog = new Predators(2, 'Doberman', 25, 4);
console.log(dog);


const dolphin = new Whales(15, 'Orca', 7000, 3);
console.log(dolphin);
dolphin.move('swim');

const human = new Primat (33, 'homoSapiens', 90, 4);
console.log(human);
human.say('keep calm and carry on');
human.eat('meal');
human.move(' run');


console.log(Animals.isAnimals(dog));

console.log( Animals.maxWeight );
console.log(Whales.maxAge);





























/*

class Animals {
  constructor(age, name, weight){
    this.age = age;
    this.name = name; 
    this.weight = weight;
    
  }
  move(){
    console.log('I can ');
  }
  say(){
    console.log(`Name: ${this.#name}  Age: ${this.age} Weight: ${this.weight}`);
  }
  eat(){}
}

class Mammals extends Animals{
  constructor(age, name, weight){
    super (age, name, weight);
  }
  
}



class Predators extends Mammals{
  constructor(age, name, weight, limbAmount){
    super (age, name, weight, limbAmount);
    this.limbAmount = limbAmount;
  }
  move(){
    super.move();
  }
  say(){
    super.say();
  }
  eat(){
    super.eat();
  }
}

class Whales extends Mammals{
  constructor(age, name, weight){
    super (age, name, weight);
  }
  move(){
    super.move();
  }
  say(){
    super.say();
    console.log('I don-t have limbs');
  }
  eat(){
    super.eat();
  }
}

class Primates extends Mammals{
  constructor(age, name, weight, limbAmount){
    super (age, name, weight, limbAmount);
    this.limbAmount = limbAmount;    
  }
  move(){
    super.move();
  }
  say(){
    super.say();
    console.log('I have some limbs');
  }
  eat(){
    super.eat();
  }
}



const birds = new Animals();

const fish = new Animals();

const human = new Primates();

const dolphin = new Whales();

const dog = new Predators();






class Birds extends Animals{ constructor(){} }

class Fish extends Animals{ constructor(){} }

class Dog extends Predators{ constructor(){} }
class Dolphin extends Whales{ constructor(){} }
class Human extends Primates{ constructor(){} }
*/