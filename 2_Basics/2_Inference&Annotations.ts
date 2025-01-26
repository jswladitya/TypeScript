
//Type inference -> when u dont tell the variable its type , so bydefault its type will be any, and it will be decided by the value assigned to the variable
// let a;


//Type Annotations
// let n:Number; //n is set to be declared as number only
let n:Number | boolean | String; //n is set to be declared as number or boolean or string

n = 23;
n = true
n = "Aditya"


//NOTE : u can annotate everything
//like functions parameters , its return type
function abcd(a:number, b:string):void {
    //function defination
}
