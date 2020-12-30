class Employee{

    constructor(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;
    }

    printEmp=()=>{
        console.log("ename="+this.ename);
        console.log("eid="+this.eid);
        console.log("desig="+this.desig);
        console.log("salary="+this.salary);
    }
}

var obj=new Employee(100,"ajay","developer",25000) // we should in the order as per constuctor

var obj1=new Employee(101,"vijay","developer",22000)

var obj2=new Employee(103,"binoy","tester",30000)

var arr=[]
arr.push(obj);
arr.push(obj1);
arr.push(obj2);
console.log(arr);

// print all employee names only
arr.forEach(emp=>console.log(emp.ename));

// print all employee names in uppercase
arr.forEach(emp=>console.log(emp.ename.toUpperCase()));

// print employee whose salary>23000
arr.filter(emp => emp.salary > 23000).forEach(emp => console.log(emp.ename))

// find highest salary
var salary=arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(salary)
