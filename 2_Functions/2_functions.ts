function addTwo(num:number): string{
    // return num + 2
    return "hello";
}
//now in this function , i am returning hello string and it is not giving me any error , so for the function to return something can also me known, like this one is supposed to return me a string
let value = addTwo(3)


//another example
function getValue(myVal : number): string | boolean {
    if(myVal > 5){
        return true
    }
    return '200 OK'
}
//this function is returning boolean and string accordingly , for such cases just mention multipe return type after colon (by a pipe '|' called union)



//another example
const getHello = (s:string): string => {
    return ""
}


//another example
const heros = ["thor", "spiderman", "ironman"]
//const heros = [1,3,5,6]

//NOTE : variables know the type of value they are containing so need to mention type , in case of functions mention types 
heros.map((hero): string => {
    return `hero is ${hero}`
    // return 1// error,coz return type is string so it supposed to return string only
})


//another example --> void
function consoleError(errMsg: string): void{
    console.log(errMsg)

    // return 1; //error, coz it won't supposed to return anything
}

//another example --> never (function never returns a value)
function handleError(errMsg: string): never{
    throw new Error(errMsg);

    // return 1; //error, coz it never ever supposed to return value
}