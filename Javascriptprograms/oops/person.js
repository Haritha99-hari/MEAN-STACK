// class=>blue print,plan,design pattern
// object=>real world entity
// reference

// eg: Mi 4A TV
// TV =>class
// Mi 4A TV PRO 80cm=>object
// remote=>reference

class Person{

    setPerson=(age,names,gender)=>{    //setPerson is a method. Here age,names and gender where initialised
        this.age=age;
        this.names=names;
        this.gender=gender;
    }

    printPerson=()=>{                  //printPerson is method. Here the initialised datas are printed
        console.log("name="+this.names);
        console.log("age="+this.age);
        console.log("gender="+this.gender);
    }
}

// object

var obj=new Person();
obj.setPerson(25,"ajay","male")
obj.printPerson()

var obj1=new Person();
obj.setPerson(26,"vijay","male")
obj.printPerson()
