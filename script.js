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





































/*

class Birds extends Animals{ constructor(){} }

class Fish extends Animals{ constructor(){} }

class Dog extends Predators{ constructor(){} }
class Dolphin extends Whales{ constructor(){} }
class Human extends Primates{ constructor(){} }


*/


