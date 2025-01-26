//getter & setter, both are in-class methods

//method 1
// class User{
//     constructor(public name:string, public age:number){}

//     setName(value:string){
//         this.name = value;
//     }
//     getName(){
//         return this.name;
//     }
// }

// let u1 = new User("aditya", 21)
// u1.setName("jaiswal")
// u1.getName()


//method 2
class User{
    constructor(public _name:string, public _age:number){}

    get name (){
        return this._name;
    }
    set name (value:string){
        this._name = value;
    }

    get age (){
        return this._age;
    }
    set age (value:number){
        this._age = value;
    }
}

let u1 = new User("aditya", 21)
u1.name = "jaiswal" //set, no need to call setName method
u1.age = 32 //set

console.log(u1.name); //get
console.log(u1.age); //get

