class Parent{
    m1=()=>{
        console.log("inside parent")
    }
}

class Child extends Parent{
    m2=()=>{
        console.log("inside child")
    }
}


class SubChild extends Child{
    m3=()=>{
        console.log("inside subchild")
    }
}

var sb=new SubChild();
sb.m3();
sb.m2();
sb.m1();

var ch=new Child();   //becoz it has connectn only wid m1 ans m2  // connectn is frm bottom to top
ch.m2();
ch.m1();

var p= new Parent(); // only m1
p.m1();

// multilevel inheritance