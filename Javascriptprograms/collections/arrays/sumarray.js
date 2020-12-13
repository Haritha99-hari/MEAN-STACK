var arr=[10,11,12,13,14,15,16]

var sum=0;
for(let items of arr){
    sum=sum+items // 0+10=10  10+11=21 ..
}
console.log(sum);




// new approach
let tot=arr.reduce((num1,num2)=>num1+num2);
console.log(tot);



var arr=[10,11,12,13,14,15,16]
var items=arr.splice(1,1); // deleted no of position one with 3 ie no numbr of positn 1,2,3
var items=arr.splice(3,1); //already one item removed so 14 will be 3rd position
console.log(arr);