console.log('client is loaded');
function getValue(condition) {

    var count = 40;
    const maxValue = 100;

    const person = {
        name: 'Tom Brady'
    };
    person.name = "Aaron Rodgers";

    console.log(person);
    

// person is a const and cannot be changed; however you can change the values of person
// person = {
//     name: "Aaron Rodgers"
// }

    if (condition) {
        // maxValue = 120;
        let count = 10;
        let myValue = "Michael Vick";
        console.log(myValue);
        return myValue;
    } else {

        console.log(myValue); 
        return null;
    }
}


for (let i = 0; i < 10; i++) {
    console.log('i with let',i);
}

for (var i = 0; i < 10; i++) {
    console.log('i with let', i);
}
console.log('i with var', i); //i is now available outside of the for loop.



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