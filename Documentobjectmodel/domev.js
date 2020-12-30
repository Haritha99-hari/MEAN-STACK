var cl=document.querySelector("#clk");
cl.addEventListener("click",()=>{
    cl.textContent="clicked";
    cl.style.color="red";
})

var ov=document.querySelector("#over");
ov.addEventListener("mouseover",()=>{
    ov.textContent="mouse currently overme"
    ov.style.color="green";
})

var ov=document.querySelector("#over");
ov.addEventListener("mouseout",()=>{
    ov.textContent="mouseover"
    ov.style.color="black";
})

var db=document.querySelector("#dbl");
db.addEventListener("dblclick",()=>{
    db.textContent="double click here"
    db.style.color="blue";
})