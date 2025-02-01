
/*
function addTwo(num){
    return num + 2;
}

addTwo(3) //when u hover this u see any & any is the problem wrt functions in TS as i discussed earlier 
*/

//lets fix this
function addTwo(num:number): number{
    return num + 2;
}
//now in this function , now TS knows what type to accept as a argument and what type to return 
addTwo(3)


//another example
function getUpper(val:string):string{
    return val.toUpperCase()
}

getUpper("aditya")

//another example
function signUpUser(name:string, email:string, password:string, isPaid: boolean) {}

signUpUser("aditya", "jaiswal", "yogendra", true)


//another example --> arrow function & default values & optional values
let loginUser = (name:string, password?:string, isPaid: boolean = false) => {}
loginUser("aditya", "jaiswal") //default example
loginUser("aditya") //optional and default example