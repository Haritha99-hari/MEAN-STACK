// find largest number among three nos.
var num1 = 20, num2 = 30, num3 = 40;

if ((num1 > num2) & (num1 > num3)) {
    console.log(num1)
}

else if ((num2 > num1) & (num2 > num3)) {
    console.log(num2)
}

else if ((num3 > num1) & (num3 > num2)) {
    console.log(num3)
}


// find 2nd largest number among three nos.
var num4 = 20, num5 = 30, num6 = 40;

if ((num4 > num5) & (num4 < num6)) {
    console.log(num4)
}

else if ((num5 > num4) & (num5 < num6)) {
    console.log(num5)
}

else if ((num6 > num4) & (num6 < num5)) {
    console.log(num6)
}

// or for finding 2nd largest amg three 

var numa = 20, numb = 30, numc = 40;

if ((numa > numb) & (numa > numc)){

    if (numb > numc) {
        console.log(numb)
    }
    else {
        console.log(numc)
    }

}

else if((numb > numa) & (numb > numc)){

    if (numa > numc) {
        console.log(numa)
    }
    else {
        console.log(numc)
    }

}

else if ((numc > numa) & (numc > numb)){

    if (numa > numb) {
        console.log(numa)
    }
    else {
        console.log(numb)
    }


}
