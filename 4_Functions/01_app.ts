//lets create a function taking a string and a call back function as 2 parameters 

function abcd(name:string, age:number, cb:(value:string)=> void){ 
    cb("hey")
}

abcd("aditya",21, (value:string)=>{
    console.log("abcd");
})

//Print -> "abcd"


//optional argument (?)
function abcdef(name:string, age:number, gender?:string){}

abcdef("aditya", 21, "male")
abcdef("aditya", 21)



//default parameter
function abcdefg(name:string, age:number, gender:string = "not to be disclosed"){
    console.log(name, age, gender);
    
}
abcdefg("aditya", 21, "male")
abcdefg("aditya", 21)



//rest parameters
function abc(...args:Number[]){
    //u can pass any number of arguments in a array
}

abc(1,2,3,5,655,77,5,33,676)


//spread -> jab copy karna ho
let arr:number[] = [1,3,5,7] 
let arr2:number[] = [...arr]


//function overloading -> functions with same name but different parameters
//1st define the signature of the function
function someFunc(a:string):void;
function someFunc(a:string, b:number):number;

function someFunc(a:any, b?:any){
    if(typeof a === "string" && b === undefined){
        console.log("hey");
    }

    if(typeof a === "string" && b === "number"){
        return 123;
    }

    else throw new Error("something went wrong");
}

//it will work in both cases
someFunc("hey")
someFunc("hey", 123)
