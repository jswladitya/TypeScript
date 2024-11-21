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


//Merging interfaces
interface Abcd{
    name : string
}

interface Abcd{
    email : string
}

//Multiple interfaces of the same name can be merged, and forms one single interface jisme dono interfaces ke properties rahenge
function Merged(obj:Abcd){
    //can access both the interfaces properties (ie, name and email)
}