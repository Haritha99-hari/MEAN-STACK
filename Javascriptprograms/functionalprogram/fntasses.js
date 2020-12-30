var employees = [
    { id: 100, name: "ajay", salary: 25000, year_join: 1980, year_resign: 1990 },
    { id: 101, name: "vjay", salary: 22000, year_join: 1982, year_resign: 1989 },
    { id: 102, name: "tom", salary: 30000, year_join: 1980, year_resign: 1991 },
    { id: 103, name: "tinu", salary: 18000, year_join: 1975, year_resign: 1992 },
    { id: 104, name: "jain", salary: 25000, year_join: 1978, year_resign: 1985 }

]

// external iteration
for (emp of employees) {
    console.log(emp.name)
}

// internal iteration
employees.forEach(emp => console.log(emp.name))

// // print all whose salary > 24000
employees.filter(emp => emp.salary > 24000).forEach(emp => console.log(emp.name))   //first gave condn >24000 then for printing each gave forEach
employees.filter(emp => emp.salary > 24000).forEach(emp => console.log(emp.salary))  //only salary not name
// var emp=employees.filter(emp=>emp.salary>24000)
// console.log(emp)         // will print whole ojb wise


// print employees whose experience >10years
employees.filter(emp => (emp.year_resign - emp.year_join) >= 10). forEach(emp => console.log(emp.name))

// find highest salaried employee
var salary = employees. map(emp => emp.salary).reduce((sal1, sal2) => sal1 > sal2 ? sal1 : sal2)
console.log(salary)