//hame ek function banana he jo ki accept kare koi bhi type of data and return karega usi type of data

//pain point
// function logger(a:any){}
// logger('hello');
// logger(12);
//dont put any in function because it will accept any type of data

//instead ham ek function ko use karte waqt bata sakte he ki function agruments ko kis type se treat kare , so we will be using generics 

//eg 1
function logger<T>(a:T){}
//T is like a templete 

logger<string>("aditya") //hamara T ab string ban chuka he
logger<number>(32) //hamara T ab number ban chuka he


//eg 2
function spiderman<H>(a:H, b:string, c:number){}

spiderman<string>("halua", "pudi", 4)


//use case --> generics interfaces
interface Halua<T>{
    name:string,
    age:number,
    key:T
}

function abcd(obj:Halua<String>){}

abcd({name:"foo", age:22, key:"awefwf"})


//Classes (generics classes)
class BottleMaker<T>{
    constructor(public key:T){}
}

let b1 = new BottleMaker<string>("hey")
let b2 = new BottleMaker<number>(34)
console.log(b1)
console.log(b2)


//another example --> returning as T
function xyz<T>(a:T, b:T): T {
    return "hey" as T;
}

xyz<string>("hey", "hello")