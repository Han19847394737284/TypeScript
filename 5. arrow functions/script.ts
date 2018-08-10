var varFunc1 = function (){
    return "func1Normal";
}

var varFunc2 = () => "func2Arrow";

console.log('______________________________________________');

var varFunc3 = function (a:string) {
    return a;
}

var varFunc4 = a => a;
console.log('______________________________________________');

var varFunc5 = function (a:number, b:number){
    return a + b;
}

var varFunc6 = (a:number, b:number) => a + b;
console.log('______________________________________________');

var varFunc7 = function (a:number, b:number){
    console.log("TWO or MORE LINES");
    return a + b;
}

var varFunc8 = (a:number, b:number) => {
    console.log("TWO or MORE LINES");
    return a + b;
}
console.log('______________________________________________');