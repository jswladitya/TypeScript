// const superHeros = [] //it is infered as never, so u cant push 'spiderman' to the array of type never coz it never gonna be used or executed

// const superHeros: [] = [] // its a variable of type array, but empty array, so u cant add here, so defiened what type of data will gonna be present here

const superHeros: string[] = [] //array of string elements 
superHeros.push("spiderman")

//another example
const heroPower : number[] = [] //array of number elements
heroPower.push(4)

//another way -> array generic
const myHero : Array<number> = [] //arra of numbers


//another example
type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = [] //array of User which is an object ,means its an array of multiple of objects of user

allUsers.push({name:"aditya", isActive:true})