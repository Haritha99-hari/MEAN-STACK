var num=2;
var lower=8;
var upper=40;
// 1**2=1 result s not btw lwr and upr so dnt print  2**2=4 7**2= 49 -> dnt print
// 3**2=9 4**2=16 5**2=25 6**2=36    -> print



for(let i=1;i<=upper;i++){
    let mul=i**num;
    if((mul>=lower) & (mul<=upper)){
        console.log(mul)
    }
}

var num=3;
var lower=3;
var upper=28;

// 1**3=1 4**3=64 -> dnt print
// 2**3=8 3**3=27 -> print

for(let i=1;i<=upper;i++){ //1 to 28
    let data=i**num; //1**3
    if((data>=lower) & (data<=upper)){
        console.log(data)
    }
}

 