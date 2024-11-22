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


//union 
type User = {
    name :string,
    email:string
}

//admin ke pass user ke properties toh he hi also uske pass uska apna method bhi he
type Admin = User & {
    getDetails(user:string):void
}

function efgh(a:Admin){
    // a.
}

//differneces between interface and type

// u cannot have 2 variables of same name and different types
type stuv = number;
// type stuv = string; //error

//types -> ka kaam he types ka merger banana ya union banana ya single type define karna 
//Interface -> if working with object toh uska shapes(shakal) banana 


