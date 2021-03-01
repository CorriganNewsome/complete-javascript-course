'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(237 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New object is created
//2. Function is called, this = {}
//3. Object linked to prototype
//4. Function automatically return object.

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
