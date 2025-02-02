//instead of using any u can uinion of multiple types
let score: number | string = 33
score = 44
score = "55"

//another example
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let aditya: User | Admin = {name: "aditya", id: 334}

aditya = {username: "adi", id: 334}


//another example for function

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    //checking for string, coz stringa has the toUpperCase method
    if (typeof id === "string") {
        id.toLowerCase()
    }
    
    //checking for number, coz number has the toFixed method
    if(typeof id === 'number'){
        id.toPrecision()
    }
}



//another example of array 
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]

//mixing all types
const data3: (string | number | boolean)[] = ["1", "2", 3, true]


//another example
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" //error