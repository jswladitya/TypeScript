const User = {
    name: "aditya",
    email: "aditya@gmail.com",
    isActive : true
}


//example
function createUser({name:string, isPaid : boolean}){}
let newUser = {name:"aditya", isPaid: false, email: "aditya@gmail.com"}
createUser(newUser)


//another example --> what if a functions returns an object
function createCourse():{name:string, price: number}{
    return {name:"next.js", price:300} //return type is object is i promised to the function so i returned the object
}