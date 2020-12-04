// syntax

// for (initialisation; CSSConditionRule; inc / decr) {           // for(initiln;condtin;inc/decr)
// body of loop
// }



for (let i = 0; i < 3; i++) { // 0<3  1<3 2<3 3<3(false)
    console.log(i)  // 0  1  2 
}

// let s used only in particular blk bt var is used globally
// ie let scope block and var scope global


const pie = 3.14;
// pie=3.15
console.log(pie);
//  const cannot be modified
//  var,let,const

for (let i = 10; i >= 0; i--) {
    console.log(i)
}