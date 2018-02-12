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


for (let i = 0; i < 10; i++) {
    console.log('i with let in loop',i);
}
console.log(i, 'out of loop i with let'); //i is undefined

for (var i = 0; i < 10; i++) {
    console.log('i in loop with var', i);
    
}
console.log('i out of loop with var', i); //i is now available outside of the for loop.

var funcs = [];
var object = {
    a: true,
    b: true,
    c: true
};

//Functions in loops
for (const key in object) {
    funcs.push(function (value) {
       return function () {
           console.log(value);
           
       };
    }(i));
}

funcs.forEach(function (func) {
    func(); //outputs the number "10" ten times
});

console.log(getValue(true));