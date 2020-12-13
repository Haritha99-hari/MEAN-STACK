var arr=[8,6,2,7,3] //sorting in any order
 
arr.sort((no1,no2)=>no1-no2)                      //no1 -no2 in ascending order and vice versa ie no2 comes after no1
console.log(arr)

arr.sort((no1,no2)=>no2-no1)                      //no2 -no1 in decending order and vice versa ie no1 comes after no1
console.log(arr)

// Another method - ascending order

// arr[8,  6,  2,  7,  3]     // arr[6,  8,  2,  7,  3]     // arr[2,  8,  6,  7,  3]     // arr[2,  8,  6,  7,  3]   // arr[2,  8,  6,  7,  3]   // arr[2,  6,  8,  7,  3]   // arr[2,  3,  8,  7,  6]  // arr[2,  3,  7,  8,  6]  // arr[2,  3,  6,  8,  7]   // arr[2,  3,  6,  7,  8]
//     0   1   2   3   4      //     0   1   2   3   4      //     0   1   2   3   4      //     0   1   2   3   4    //     0   1   2   3   4    //     0   1   2   3   4    //     0   1   2   3   4   //     0   1   2   3   4   //     0   1   2   3   4    //     0   1   2   3   4
//     i   j                  //     i       j              //     i           j          //     i               j    //         i   j            //         i       j        //         i           j   //             i    j      //             i       j    //                 i   j



for(let i=0;i<arr.length;i++){ //i=0  i=1 i=2 i=3
    for(j=i+1;j<arr.length;j++){
        //j=1 j=2 j=3 j=4
        if(arr[i]>arr[j]){ //8>6  6>2  2>7 2>3 8>6 6>7    // condition true then iterchange position
          var temp=arr[i];
           arr[i]=arr[j];
           arr[j]=temp;
        }
    }
}

console.log(arr);