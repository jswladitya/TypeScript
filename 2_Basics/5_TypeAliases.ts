//Defining our type (like i want to call type number as sankhya) 

type sankhya = number;
let a :sankhya; //got it

//practical example
// type value = string | number | null;

// let b : value;

type arg = string|null;
function abcd(obj: arg){
    //future me jake jab argument pass karoge wo string ya null hi ho sakta he
}
abcd("aditya") //allowed
abcd(null) //allowed
// abcd(34) //not allowed