var util = require('util');

var obj = {
  a: 5,
  b: 6,
  inspect: function() {
    return 123;
  }
}

obj.self = obj;

// МОДУЛЬ util

// * метод util.inspect();
console.log( util.inspect(obj) );
// = console.log( obj );
// явный вызов для строчного представления объекта для вывода в файле

// * метод util.format();
var str = util.format("My %s %d %j", "string", 123, {test: "obj"});
console.log( str );

// * метод util.inherits();
// родитель
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log("Ходит " + this.name);
};

// потомок
function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log("Прыгает " + this.name);
};

// использование
var rabbit = new Rabbit("наш кролик");
rabbit.walk();
rabbit.jump();
