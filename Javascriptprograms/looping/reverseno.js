var num=123; // 321


// var digit=123%10;  // 3
// num=Math.floor(123/10)  // 12

// var digit=num%10  // 2
// num=Math.floor(num/10)  //1

// var digit=1%10  //1



 var number=123;

 var data="";
 while(number!=0){ //  123!=0 12!=0 1!=0
    
var digit=number%10; // 3   12%10 = 2      1%10=1
data =data+String(digit)
number=Math.floor(number/10); // 12.3 floor=12 12/10=1.2 floor=1  1/10=0.1 floor=0

 }
 console.log(data);