var employees = [
    [100, "ajay", "developer", 25000],
    [101, "vijay", "developer", 30000],
    [102, "arjun", "qa", 25000],
]

for(employee of employees){
    console.log(employee)
}

// print employee name only
for(let employee of employees){
    console.log(employee[1])
}

// print all employee designation
for(let employee of employees){
    console.log(employee[2])
}

//print all employee details whose salary >25000
for(let emp of employees){
    if(emp[3]>25000){
        console.log(emp)
    }
}

// find total of all employee salary
var total=0;
for(let emp of employees){
total=total+emp[3]
}
console.log(total);