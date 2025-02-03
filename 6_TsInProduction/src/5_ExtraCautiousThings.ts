
function detectType(val: number | string ){
    
    if (typeof val === "string") { // <-- narrowing (means use typeof for narrowing)
        return val.toLowerCase()
    }
    return val + 3
}


//another example
function provideId(id: string | null){
    if(!id){ //if there is no id , it means its a null
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


//another example
function printAll(strs: string | string[] | null) {
    
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


//another example --> 'in' operator narrowing
interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}


//another example --> instanceof narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) { //means, x is going to be a Data in this case
      console.log(x.toUTCString());        
    } else {
      console.log(x.toUpperCase());                
    }
  }


//another example --> predicates & type casting
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird Food"
    }
}

//another example --> descreminated union
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}


//another example --> exhaustive checking
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width

        default:
            // putting never means it willl never gonna used or run or executed
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}