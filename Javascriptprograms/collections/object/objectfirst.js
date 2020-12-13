// objects are stored in the form of key value pairs
var students={
  roll:150,
  name:"ajay",
  course:"bca",
  total:150
}

// key:value
// duplicate keys are not allowed eg 2 name key etc
// duplicate values are allowed

// accessing values
// if we want to access values we have to use corresponding keys
console.log(students["roll"]);
console.log(students.roll);       //we can use any method

// ajay
console.log(students.name);

// iterate   IN is used
for(let student in students){
    console.log(student+" -> "+students[student]);
}

// checking for a specific key
console.log("total" in students); //true
console.log("gender" in students); //false

// adding a new key value pair
students["gender"]="male"
console.log(students);

// update
students["total"]+=25;
console.log(students);
