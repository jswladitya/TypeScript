/*
NOTE: TS wants to know the type of parameter

Interfaces
    -> Defining Interfaces
    -> Using interfaces to define object shapes
    -> Extending interfaces 

Type Aliases
Intersection types

*/

function abcd(a: Number , b: string){
    //here if we use "." then we will get only those methods , which are defined for a number or a string
    // a. //will get Number methods
}


//but if we try putting obj as a parameter, then JS does'nt know ki obj ka type kya hoga

function pqrs(obj){
    // obj. //nothing to show, we dont know what things and properties does this obj consist , so we need to define interface jo ise pehchan de
}

//so comes interface -> interface means SHAKAL
interface User{
    name:String, //mandatory
    email:string, //mandatory
    password:string, //mandatory
    gender?:Number //optional
    //now we have defined what features and methods does User object have
}

function getDataOfUser(obj:User){
    //it means obj is a same type of User (obj ka shakal User ke jaisi he & its obvious ki obj ke pass bhi same features he jo User ke pass he)
    
    //NOTE : we make interface when we dont know whats inside the object that we are putting as a parameter
    // obj. //yes we got it
}
// getDataOfUser({}) //we have to pass object as a argument with its properties
getDataOfUser({name:"aditya", email:"example.com", password:"aditya1243"})

