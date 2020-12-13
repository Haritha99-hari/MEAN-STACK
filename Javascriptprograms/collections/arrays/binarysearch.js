var arr = [6, 2, 5, 3, 1, 4]

arr.sort((no1, no2) => no1 - no2)
console.log(arr);

//  1   2   3   4   5   6        // 3   4   5   6        //     4      5
//  0   1   2   3   4   5        // 2   3   4   5        //     3      4
//  l       m   e       u        // m   l       u        //     l,u    m
                                 //     l    m           //     l,u,m
                                 


var element = 4;
var low = 0;
var upp = arr.length - 1; //coz arr.length is counted frm 1 so for 5 its 6-1=5
var flg = 0;

while (low <= upp) { //0<5 3<5 3<=3
    var mid = Math.floor((upp + low) / 2);//5+0/2=2.5=2  3+5/2=4 3+3/2=3
    if (element > arr[mid]) { //4>3 4>5(false)
        low = mid + 1;  //low=3        //if element greater than mid then mover lower and vice versa
    }
    else if (element < arr[mid]) { //4<5  4>4
        upp = mid - 1; //upp=3
    }
    else if (element == arr[mid]) { //4==4
        flg += 1;
         break;
    }
}
if (flg == 0) {
    console.log("element not found")
}
else {
    console.log("element found")
}

//  case 1
// if element >arr[mid] 4>arr[mid] 4>3
// so search frm above mid value
// low=mid+1