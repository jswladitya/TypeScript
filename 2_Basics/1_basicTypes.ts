//Basic types 
/*
Primitive types (number, string, boolean)
arrays
tuples
enums
Any, Unknown, Void, Null, Undefined, Never
*/


// let a = 3
// a = "aditya"
// here, unlike Js , once u declared a as number u cannot modify it to string

//Arrays
let arr1 = [1,2,3,45, {name : "aditya"}, "aditya"]

// let arr2:Number[] = [1,2,34,56,"aditya"] //error
let arr3:Number[] = [1,2,34,56] //only number
let arr4:String[] = ['1','2','34','56'] //only string

//Tuples
let arr5:[string, number] = ['aditya', 23]
//in case u want to make an array of fixed size and location

//Enums -> enumerations (sort of key value pairs , generally made for future use)
enum UserRoles{
    ADMIN = 'admin',
    GUEST = 'guest',
    SUPER_ADMIN = 'super_admin',
}
UserRoles.ADMIN;


//Any
let a; //here bydefault type is any, means we can set any datatype to a in future, like a = 12, after this a can modify to any type , means it can be a = "aditya" , a = true
a = "aditya" 
a = true 

let b:Number; //b is defined to be a number, its fixed


//Unknown (least used) -> similar to any but with some restrictions


//Void -> if a function does not return anything, just add void to it after colon
function printName(name:string):void{
    console.log(name)
}

function printMe(name:string):string{
    return name ; // if function returns something, then we have to mention the type of return value after colon
}


//Null
let z:null | string; //either null or string
z =null;
z= "aditya"
// z=undefined; //error
// z=12; //error


//Undefined 
let c:undefined; //like JS if we just declare & never assigns any value 


//Never -> if a function never returns anything, then we can use never (will use it if we want ki age ka code execute na ho)
