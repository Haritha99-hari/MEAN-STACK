// array?
// to store more than one objects
// we can store any type of objects
// there is no length limit

// define by using []

var names=["java","javascript","python","c#","dart"]
// index     0        1           2       3     4

console.log(names[1]);  // javascript

// iterate  OF is used

for(let items of names){ 
    console.log(items)
}


// adding a new element to array
names.push("perl");
console.log(names);

// removes last element from array

names.pop();
console.log(names);

names.pop();
console.log(names);