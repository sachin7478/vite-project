"use strict";
/* ====================================================
            LEARNING TYPESCRIPT AND SYNTA
 ====================================================== */
let a = 10;
let arrNumber = [1, 2, 3];
let arrString = ["aa", "bb", "cc"];
let someVal = 'Good thing'; // union type - has number or string
let user = {
    name: 'Sachin',
    age: 24,
    getAge: function () { return this.age; }
};
//=== End - object with type interface ====
// Object withe type any
let user2 = {
    name: 'sachin'
};
// Writing function with TS
function calc(x = 20, y) {
    // y '?' is optional  paramater
    return x;
}
// Function return void or nothing
function calcc() {
    console.log('do something');
}
// === Classes with typescript ==========
class Vehicle {
    constructor(name) {
        this.name = 'Two wheeler';
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getSomething() {
        console.log('bla bla..');
    }
}
let shine = new Vehicle('New two wheeler');
console.log(shine.getName());
// === End - Classes with typescript =====
