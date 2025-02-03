const score: Array<number> = []
const names: Array<string> = []

//example --> like if val is number , return number ,lly for boolean
function identityOne(val: boolean | number): boolean | number{
    return val
}

//another example --> (not a good practice to use any)
function identityTwo(val: any):any{
    return val
}


//now, this function will take a input value of certain type and return a value of certain type 
//here if the input type is number then return type automatically becomes a number
function identityThree<Type>(val: Type): Type {
    return val
}
// identityThree(true)


//another example --> same as above (kind of shortcut)
function identityFour<T>(val: T): T {
    return val
}


//another example --> lets define my own type and put it as a type 
interface Bootle{
    brand: string,
    type: string
}
// identityFour<Bootle>({brand: "milton", type : "metal"})


//another example --> working with array
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//generics in terms of arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}


//another example --> something of a uniqe syntax while working with generics
//PART-1
function anotherFunctionOne<T, U>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
anotherFunctionOne(3, {})


//PART-2
interface Database {
    connection: string,
    username: string,
    password: string
}

//here, U can be anything but it should a type of Database (and Database is a type object)
function anotherFunctionTwo<T, U extends Database>
    (valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
//since U is a type of Database so u need to pass database satisfying things ie.., object
anotherFunctionTwo(3, {connection:"", username:"", password: ""})



//another example --> generic class
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}