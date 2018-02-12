console.log('client is loaded');

function getValue(condition) {

    var count = 40;
    const maxValue = 100;

    const person = {
        name: 'Tom Brady'
    };
    //uncomment below to make change to Rodgers
    // person.name = "Aaron Rodgers"; 
    console.log(person);
    // person is a const and cannot be changed; however you can change the values of person. Uncomment below to get error
    // person = {
    //     name: "Aaron Rodgers"
    // }
    if (condition) {
        //uncomment below to get error
        // maxValue = 120;
        let count = 10;
        let myName = "Michael Vick";
        console.log(myName);
        return myName;
    } else {

        console.log(myName);
        return null;
    }
}
console.log(getValue(true));

for (let i = 0; i < 10; i++) {
    console.log('i with let in loop', i);
}
console.log(i, 'out of loop i with let'); //i is undefined

for (var i = 0; i < 10; i++) {
    console.log('i in loop with var', i);

}
console.log('i out of loop with var', i); //i is now available outside of the for loop.

/* const can not be used in a regular for loop.  

for (const i = 0; i < 10; i++) {
    console.log('i in loop with const', i);

}
console.log('i out of loop with const', i);
*/

var funcs = [];
var object = {
    a: true,
    b: true,
    c: true
};
//Functions in loops
for (var key in object) {
    funcs.push(function () {
        console.log('key in function with var', key);
    });
} // returns c 3 times
for (let key in object) {
    funcs.push(function () {
        console.log('key in function with let', key);
    });
} //returns a b c
// you can use const in the for loop. it will work like a let.  however, the variable key will not be able to changed anywhere else.
for (const key in object) {
    funcs.push(function () {
        console.log('key in function with const', key);
    });
} // returns 1 2 3
funcs.forEach(function (func) {
    func(); //outputs the number "10" ten times
});
//var creates a global variable. let and const do not
var hi = 'hi';
let hello = 'hello';

const hola = 'Hola';

console.log('hi with var', hi);
console.log('window.hi with var', window.hi);

console.log('hello with let', hello);
console.log('window.hello', window.hello);

console.log('hola with const', hola);
console.log('window.hola', window.hola);
