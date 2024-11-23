//readonly property
// class User{
//     //public varible but firbhi if we want someone could not change the name variable so use readonly property
//     constructor(public readonly name: string){}

//     changeName(){
//         // this.name = "hello" //cannot change
//     }
// }
// let u1 = new User("aditya");
// u1.changeName() //NO


//Paramater property -> when u declare and initialize variables in the constructors parameters () itself like this way 
class User{
    constructor(public name:string, public age:number, public gender?:string){}
    // if someone does not want to specify his his , then just put ? 
    //so, in order to make any field optional (just put ?)
}

let u1 = new User("aditya" , 21, "male"); 
let u2 = new User("jaiswal" , 21); 