/*
1. to compile ts code to js just write "tsc intro.ts"

2. "tsc --watch" -> for real time code compilaton to js

3. "npx tsc --init" -> to make ts config file 

4. "tsc -v" -> to check the version of TS
*/

// const hello = function(){
//     console.log("Hello TypeScript");
// }


//Syntax --> let/const variableName:type = value

//string
let greetings: string = "Hello World";

greetings.toLowerCase() //it shows all the methods of string because it knows the type of greetings
console.log(greetings)


//number
// we declare any type of number like int , float with the type number

let userId : number = 32423.4
// let userID = 12323 
// //NOTE: it will be to much obvious thing to define or infere the type after colon each time , Ts automatically deduce the type , u dont need to infere the type all the time


//boolean
let isLoggedIn: boolean = false


//What is type Inference ---> mentioning the type after the colon


//any --> it simply is marker , means i dont want to check the type for it, it turn off the type checking for that particular value


