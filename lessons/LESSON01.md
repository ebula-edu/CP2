# Computer Programming 2

## LESSON 01: JavaScript Core Concepts

### Topics:

-   Inheritance
-   Polymorphism
-   Error Handling
-   DOM Manipulation

------------------------------------------------------------------------

# I. Inheritance

## What is Inheritance?

Inheritance is a core principle of Object-Oriented Programming (OOP)
that allows one class (child class) to inherit properties and methods
from another class (parent class).

Benefits: - Code reusability - Logical hierarchy - Reduced redundancy -
Cleaner architecture

## Example:

``` javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    return `${this.name} is studying ${this.course}.`;
  }
}
```

------------------------------------------------------------------------

# II. Polymorphism

## Definition

Polymorphism means "one method, many forms." Different classes can
implement the same method name but behave differently.

## Example:

``` javascript
class Animal {
  speak() {
    return "Animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "Dog barks.";
  }
}

class Cat extends Animal {
  speak() {
    return "Cat meows.";
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => console.log(animal.speak()));
```

------------------------------------------------------------------------

# III. Error Handling

## Why Error Handling?

Error handling prevents application crashes and improves system
reliability.

## Try-Catch Example:

``` javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return null;
  } finally {
    console.log("Operation attempted.");
  }
}
```

------------------------------------------------------------------------

# IV. DOM Manipulation

## What is the DOM?

The Document Object Model (DOM) represents an HTML document as a tree
structure that JavaScript can modify dynamically.

## Selecting Elements:

``` javascript
document.getElementById("myId");
document.querySelector(".myClass");
document.querySelectorAll("div");
```

## Creating & Modifying Elements:

``` javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello Students!";
document.body.appendChild(newDiv);
```

## Event Handling:

``` javascript
document.querySelector("#btn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

------------------------------------------------------------------------
