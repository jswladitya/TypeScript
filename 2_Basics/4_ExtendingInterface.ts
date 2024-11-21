interface User{
    //User ki shakal
    name:String,
    email:string,
    password:string;
}

interface Admin extends User{
    //Admin have all the properties of User , and Admin also have its own properties along with inherited properties
    admin:boolean,
}

function abcd(obj: Admin){
    // obj. // common sense
}