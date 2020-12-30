class Parent{
    phone=()=>{
        console.log("have nokia 5310")
    }
}

class Child extends Parent{         //child override the method
    phone=()=>{                     //overides only when inheritance is used
        console.log("i have iphone12")
    }
}


var ch=new Child();
ch.phone();