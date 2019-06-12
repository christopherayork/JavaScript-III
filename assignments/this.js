/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Global Scope, this binds the window object within this context
* 2. Implicit Binding: The rule is this references whatever precedes the dot (.) of the function call. Typically you wrap a function within another to achieve it
* 3. New Binding: This is an instance-based approach, using a function constructor to create a template, and a new object as the context
* 4. Explicit Binding: An approach making use of call() and apply() methods, which explicitly define this
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// another example:

function something() {
    console.log(this);
}
something();

// Principle 2

// code example for Implicit Binding
const sayPhrase = obj => {
    this.phrase = obj.phrase;
    this.sayPhrase = () => console.log(this.phrase);
}
const hello = { phrase: 'Hello everyone!'};
sayPhrase(hello);

// Principle 3

// code example for New Binding
function Animal(character) {
    this.type = character.type;
    this.greeting = character.greeting;
    this.greet = () => console.log(`The ${this.type} says ${this.greeting}!`);
}

const Cat = new Animal({type: 'cat', greeting: 'meow'});
Cat.greet();

// Principle 4

// code example for Explicit Binding

const me = {
    name: 'Chris',
    favoriteFood: 'Thai Fried Rice'
};

function Person(character) {
    this.name = character.name;
    this.favoriteFood = character.favoriteFood;
}
Person.prototype.intro = function() { return `Hello, my name is ${this.name}, and I like to eat ${this.favoriteFood}!`; };

const person1 = new Person(me);
person1.intro();
