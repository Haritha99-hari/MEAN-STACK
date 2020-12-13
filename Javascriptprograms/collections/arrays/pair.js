var arr=[1,2,3,4,6] //6(2,4)

// 1   2   3   4    6    // 1   2   3   4    6    // 1   2   3   4    6
// 0   1   2   3    4    // 0   1   2   3    4    // 0   1   2   3    4
// l                u       l           u                l        u

arr=arr.sort((n1,n2)=>n1-n2)


var low=0;
var upp=arr.length-1;                 //if condition greater than move upper & vice versa
var element=6;                        //upp< move upp   ,  low> move low

while(low<upp){  //0<4 0<3 1<3      //same no wont add eg 2,2 3,3

    let tot=arr[low]+arr[upp]; //arr[0]+arr[4]=1+6=7  1+4=5  2+4=6
    if(tot>element){ //7>6 5>6(false) 6>6
        upp=upp-1; //upp=4-1=3
    }
    else if(tot<element){ //6<6
        low=low+1;  //low=0+1=1
    }
    else{
        console.log(arr[low]+","+arr[upp])
        break;                           //if 5 also is in this arr den (2,4) and (1,5) for that instead of break type low=low+1; or  upp=upp-1;
    }
}