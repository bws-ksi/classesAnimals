class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age + ' year';
    this.name = name;
    this.weight = weight + ' kg';
    this.limbAmount = limbAmount + ' pieces';
  }
  move(can){`I can ${this.can}`}
  say(){}
  eat(smth){`I love eat ${this.smth}`}
}
//=====================================
class Mammals extends Animals { }
//=====================================
class Predators extends Mammals {
  eat(smth) {
    super.eat(smth);
  };
}

class Whales extends Mammals { }

class Primat extends Mammals { }


const birds = new Animals(3, 'Eagle', 8, 4);
console.log(birds);

const fish = new Animals(10, 'Shark', 800, 3);
console.log(fish);


const dog = new Predators(2, 'Doberman', 25, 4);
console.log(dog);
console.log(dog.eat('meal'));

const dolphin = new Whales(15, 'Orca', 7000, 3);
console.log(dolphin);

const human = new Primat (33, 'homoSapiens', 90, 4);
console.log(human);





































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