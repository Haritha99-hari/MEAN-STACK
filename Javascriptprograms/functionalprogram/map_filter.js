var arr=[10,11,8,7,6,12,13]; //ARROW,MAP,FILTER,REDUCE,SORT

// squares of each no in arr

// for(let num of arr){
//     console.log(num**2);
// }

var data=arr.map(num=>num**2); //map is used for applying in every element
console.log(data);

// cubes of each no in arr

// for(let num of arr){
//     console.log(num**3);
// }

var data=arr.map(num=>num**3); 
console.log(data);

// double of each element in arr

// for(let num of arr){
//     console.log(num+num);
// }

var data=arr.map(num=>num+num); 
console.log(data);

// even no in arr

// for(let num of arr){
//     if(num%2==0)
//     console.log(num);
// }

var data=arr.filter(num=>num%2==0); // instead of num we can give any name it can arr also
console.log(data);

var names=["alan","abhi","ajay","vijay","binoy"]

var data=names.map(name=>name.toUpperCase()) //after uppercase put ()
console.log(data);

var data=names.filter(name=>name.charAt(0)=='a')
console.log(data);

var maxs=arr.reduce((no1,no2)=>no1>no2?no1:no2) //?no1:no2 is must its condtn ie no1 or else no2  //terinory operator is used
console.log(maxs);

// if(no1>no2){
//     no1
// }
// else{
//     no2
// }

var mins=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(mins);

var sum=arr.reduce((no1,no2)=>no1+no2)
console.log(sum);

var srt=arr.sort((no1,no2)=>no1-no2) //sort ascending
console.log(srt);

var srt=arr.sort((no1,no2)=>no2-no1) //sort descending
console.log(srt);