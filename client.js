console.log('client is loaded');
function getValue(condition) {

    var count = 40;
    const maxValue = 100;

    const person = {
        name: 'Abhay'
    };
    person.name = "John";

    console.log(person);
    

// person is a const and cannot be changed; however you can change the values of person
// person = {
//     name: "John"
// }

    if (condition) {
        // maxValue = 120;
        let count = 10;
        let myValue = "Abhay";
        console.log(myValue);
        return myValue;
    } else {

        console.log(myValue); 
        return null;
    }
}

//functions in loop
for (let i = 0; i < 10; i++) {
    //console.log(i);
}

// i is still accessible here
// console.log(i); //10

var funcs = [];
var object = {
    a: true,
    b: true,
    c: true
}

//Functions in loops
for (const key in object) {
    funcs.push(function () {
        console.log(key);
    });
}

funcs.forEach(function (func) {
    func(); //outputs the number "10" ten times
});

console.log(getValue(true));