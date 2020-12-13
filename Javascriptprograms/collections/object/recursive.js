var pattern = 'ABABC';
var dict = {};


for (let char of pattern) {
    // console.log(char)
    if (char in dict) { //A in dict //A:1 B:1 A=recursive char
        console.log("first recursive char = " + char)
        break;
    }
    else {
        dict[char] = 1
    }
}