// function add(a:number, b:number):number{
//     return a+b;
// }

function greet(name:string):string{
    return `Hello Mr./Mrs. ${name}`;
}

console.log(greet("Sharma"));
// console.log(add(37,97));
// console.log("hii");

function isAdult(age:number):boolean{
    return age>=18;
}

function  getFullName(name:string, surname:string):string{
    return `Full name is ${name} ${surname}`;
}


function logMessage(ms:string):void{
    console.log(ms);
}

function throwError(msg:string):never{
    throw new Error(msg);
}

function infiniteloop():never{
    while(true){}
}

function optionalTypes(name:string,greeting?:string):string{
            return `${greeting??"Hello"}, ${name}`;
}


function value(a:number=50):number{
    return a*a;
}

// logMessage("Hey This is TypeScript");
// console.log(isAdult(19));
// console.log(getFullName("Devansh","Sharma"));

// console.log(optionalTypes("Mumbai","Namaste"))

let a:unknown="devansh";
if(typeof a==="string"){
    a=a.charAt(0).toUpperCase()+a.slice(1);
}

// console.log(a)
// console.log(value(5));


function add(...numbers:number[]):number{
    return numbers.reduce((total,n)=>total+n,0);
}

console.log(add(5,6,7,4,5,6,7,8,9,7,6,5,4,3,5,7));


