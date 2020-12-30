class Students{
    setStudents=(rol,name,course)=>{
        this.rol=rol;
        this.name=name;
        this.course=course;
    
    }

    printStudents=()=>{
        console.log(this.name);
        console.log(this.rol);
        console.log(this.course);
    }
}

let obj1=new Students();
obj1.setStudents(10,"binoy","mca");
obj1.printStudents();
console.log(obj1.name);
obj1.name="AJAY";
console.log(obj1.name);

// different types of variables
// instance variables
// instance variables are always prepended with this keyword eg:this.rol,this.name,this.course
// we can acces instance variable with in the class by using "this" keyword
// we can acces instance variable outside the class by using reference name.instance variable name eg:for printng we can give console.log(obj.name)

class Student{
    constructor(rol,name,course){
        this.rol=rol;
        this.name=name;
        this.course=course;
    
    }

    printStudent=()=>{
        console.log("name="+this.name);
        console.log("rol="+this.rol);
        console.log("course="+this.course);
    }
}

let obj=new Student(10,"binoy","mca");
obj.printStudent();


// setStudent() duty?
// initializing instance variable

// constructor()
//duty of constructor is initializing instance variable
// constructor name s always constructor
//it is invoked automatically at the time of object creation