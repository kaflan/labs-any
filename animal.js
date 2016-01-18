function Animal(name) {
    this.name = name; 
}
Animal.prototype.getName = function () {
      return this.name;
    };
function Dog(name) {
    this.name = name;
    this.bark = function () {
        return 'Dog ' + this.name + ' is barking';
    };
}

Dog.prototype.__proto__ = Animal.prototype;
var dog = new Dog('Aban');
console.log(dog.getName());
