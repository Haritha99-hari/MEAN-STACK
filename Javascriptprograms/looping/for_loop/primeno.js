// 7(1,7)  13(1,13)

// 13    divide nos frm 2 to 12 =0 den not prime no.
//  for checking exclude one and dat no
// num?  (1,mum)  2 to num-1 num%


var num = 7;
var flag = 0;

for (let i = 2; i < 7; i++) {  // 2<7 3<7 4<7 5<7 6<7 7<7(false)
    if (num % i == 0) { // 7%2!=0 7%3!=0 7%4!=0 7%5!=0 7%6!=0
        flag += 1;    // flag=flag+1;
        break;  //  break means brk and go to next loop
    }
    else {
        flag = 0; // flag=0 flag=0 flag=0 flag=0 flag=0
    }
}
if (flag > 0) {
    console.log("not prime")
}
else {
    console.log("prime")
}


var num = 8;
var flag = 0;

for (let i = 2; i < 8; i++) {   // 2<8
    if (num % i == 0) {  // 8%2==0
        flag += 1;    // flag=1
        break;  
    }
    else {
        flag = 0; 
    }
}
if (flag > 0) { // 1>0
    console.log("not prime")
}
else {
    console.log("prime")
}
