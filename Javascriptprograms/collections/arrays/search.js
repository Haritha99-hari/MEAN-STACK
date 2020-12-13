var arr=[1,5,3,6,2,8,4];   // searching an elemt frm this array
var element=8;             //linear searching
var flag=0;

for(let items of arr){
    if(element==items){
        flag+=1;
        break;
    }
}
if(flag==0){
    console.log("element not found")
}
else{
    console.log("element found")
}

