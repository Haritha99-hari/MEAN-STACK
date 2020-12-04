// functn to perform a specific task

// function functionName(arg1,arg2,...argn){
//     function definition;
// }


// ADDITION
function add(num1, num2) {
    let res = num1 + num2;
    console.log(res)
}

// fuction calling by using function name

add(40, 20)
// add(50,60) many can be used


//  SUBSTRACTION
function sub(num1, num2) {
    let res = num1 - num2;
    console.log(res)
}
sub(40, 20)

// MULTIPLICATION
function mul(num1, num2) {
    let res = num1 * num2;
    console.log(res)
}
mul(40, 20)


// DIVISION
function div(num1, num2) {
    let res = num1 / num2;
    console.log(res)
}
div(40, 20)


// MODULUS
function mod(num1, num2) {
    let res = num1 % num2;
    console.log(res)
}
mod(40, 20)
// if div reminder 0


// POWER
function pwr(num1, num2) {
    let res = num1 ** num2;
    console.log(res)
}
pwr(2, 3)


// FACTORIAL
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    console.log(fact)
}
factorial(5);



// new approach
let addd = (num1, num2) => num1 + num2
console.log(addd(100, 200))