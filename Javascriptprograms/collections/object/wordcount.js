var text="hello hai hello hai namaste";
// hello:2
// hai:2
// namaste:1

var words=text.split(" ")
console.log(words);
// [ 'hello', 'hai', 'hello', 'hai', 'namaste' ]

var obj={}
for(let word of words){
    // hello
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj);