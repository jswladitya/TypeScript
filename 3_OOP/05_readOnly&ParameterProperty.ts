//readonly property
// class User{
//     //public varible but firbhi if we want someone could not change the name variable anywhere so use readonly property
//     constructor(public readonly name: string){}

//     changeName(){
//         // this.name = "hello" //cannot change inside the class
//     }
// }
// let u1 = new User("aditya");
// u1.changeName() //cannot change outside the class


//Paramater property -> when u declare and initialize variables in the constructors parameters () itself like this way 
class User{
    constructor(public name:string, public age:number, public gender?:string){}

    //so, in order to make any field optional (just put ?)
}

let u1 = new User("aditya" , 21, "male"); 
let u2 = new User("jaiswal" , 21); 