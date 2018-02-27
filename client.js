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


// function from es5; would need to pass parameter and option for if it isn't provided. Works unless timeout is zero.
function makeRequest(url, timeout, callback) {
    // the rest of the function
    timeout = timeout || 3000;
    callback = callback || function (){
    };

    console.log(url, 'url');
    console.log(callback, 'callback');
    console.log(timeout, 'timeout');
    
    
    
}

makeRequest("/foo");
console.log('make request with timeout passed');
makeRequest("/foo", 1000);
console.log('make request with timeout passed and callback passed');
makeRequest("/foo", 1000, function(){});

//makeRequest(); needs a parameter or will error



//Default params behavior on arguments
function mixArguments(firstParameter, secondParameter) {
    // "use strict";

    console.log(arguments.length);
    console.log('check the argument object at [1]',firstParameter === arguments[0]);
    console.log('check the argument object at[1]', secondParameter === arguments[1]);
    firstParameter = "c";
    secondParameter = "d";
    console.log('after you change the parameter', firstParameter === arguments[0]);
    console.log('secondParameter after you change 2nd', secondParameter === arguments[1]);
}
console.log('call mix arguments without use strict');

mixArguments("a", "b");