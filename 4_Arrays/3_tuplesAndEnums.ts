//special type of array with some restrictions
// let tUser: [types with commas]

// const user: (string | number)[] = [1, "aditya"]

//if u want just some special types of things to be pushed on into your array , (inside the array) , order matter
let tUser: [string, number, boolean]
tUser = ["hc", 131, true]

//another example
let rgb: [number, number, number] = [255, 123, 112]

//another example
type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[0] = 32 //at the 1st index
newUser[1] = "hc.com" //at the 2nd index
// newUser.push(true) //error, boolean cannot be pushed 



//enums --> a certains times when u restrict somebodies choice

enum SeatChoice {
    AISLE = "aisle", //can also put up some value
    MIDDLE = 3, //put up strict number and rest of the choices will follow up
    WINDOW, //like this will have a choice of 4
    FOURTH
}

const flightSeat = SeatChoice.AISLE