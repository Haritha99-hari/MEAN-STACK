var students=[
    [1,"st1","mca",142],
    [2,"st2","mca",145],
    [3,"st3","bca",150],
    [4,"st4","bca",135],
]

// print all student name

for(let student of students){
    console.log(student[1]);
}

// find number of students doing mca

var cnt=0;
for(let student of students){
    if(student[2]=="mca"){
        cnt++;
    }
}
console.log("number of students in mca"+" -> "+cnt)   //" " for space we any fill , or anything inside it.

// find total of marks those who are in bca

var total=0;
for(let student of students){
    if(student[2]=="bca"){
        total=total+student[3]
    }
}
console.log("total marks of students in mca"+" -> "+total);

// find student who have highest total

