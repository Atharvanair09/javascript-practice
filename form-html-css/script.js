// const isPerfectNumber = (num) => {
//   if (num <= 1) return false;
//   let sum = 1;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       sum += i;
//       if (i !== num / i) {
//         sum += num / i;
//       }
//     }
//   }
//   console.log(`The number ${num} is a perfect number`);
//   return sum === num;
// };

// console.log(isPerfectNumber(6));

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.describe = function () {
  return `${this.name} makes a sound: ${this.sound}`;
};

function Dog(name, sound, breed) {
  Animal.call(this, name, sound); 
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks: Woof!`;
};

function Cat(name, sound, color) {
  Animal.call(this, name, sound);
  this.color = color;
}
Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  return `${this.name} meows: Meow!`;
};

const myDog = new Dog("Buddy", "bark", "Golden Retriever");
console.log(myDog.describe()); 
console.log(myDog.bark());

const myCat = new Cat("Whiskers", "meow", "Gray");
console.log(myCat.describe()); 
console.log(myCat.meow()); 
