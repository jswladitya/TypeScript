
//Type inference -> when u dont tell the variable its type , so bydefault its type will be any
// let a;


//Type Annotations
// let n:Number; //n is set to be declared as number only
let n:Number | boolean | String; //n is set to be declared as number or boolean or string

n = 23;
n = true
n = "Aditya"


//NOTE : u can annote everything
//like functions parameters , its return type
function abcd(a:number, b:string):void {
    //function defination
}
