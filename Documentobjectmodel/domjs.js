// var heads=document.getElementsByTagName("h1")
// for(head of heads){
//     head.style.color="green";
// }// here for loop is used for appling in both h1

// var hd=document.getElementById("one")
//     hd.style.color="brown";
//     // for loop is not used ,single application

//     var hd1=document.getElementById("two")
//     hd1.style.color="red";

//     var lists=document.getElementsByClassName("lists")
// for(list of lists){
//     list.style.color="orange";
// }

// var dm=document.getElementById("dm")
// dm.textContent="Document Object Methods"
// dm.innerHTML="<em>Document Object Methods</em>"
// // for changing heading

// // var h1=document.getElementById("one")
// // alert(h1.textContent)

// NEW METHOD

var lists=document.querySelectorAll("li")
lists.forEach(li=>li.style.color="green")

var lis=document.querySelectorAll(".lists") // for class . in css
lis.forEach(ls=>ls.style.color="red")

var hd=document.querySelector("#one") // for id # in css
hd.style.color="brown"