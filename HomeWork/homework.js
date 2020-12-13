// Prime nos btw 10 to 50
var lower = 10;
var upper = 50;
var flag =0;

for (let i = lower; i <= upper; i++) {
    let flag = 0;

    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag= flag +1;
            break;
        }
    }


    if ( flag == 0) {
        console.log(i);
    }
}

//  Factorial of a number
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    console.log(fact)
}
factorial(8);