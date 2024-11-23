/*
constructor -> bottle maker , not bottle 
            -> biscuits maker, not biscuits
*/

//old method -> used in JS
// class bottleMaker{
//     //public lagana zaruri he nahi toh ye declare nahi honge
//     public name;
//     public price;

//     constructor(name:string, price:number) { 
//         this.name = name;
//         this.price = price
//     }
// }

//new method -> used in Ts 
class bottleMaker{
    //public lagana zaruri he nahi toh ye declare nahi honge
    constructor(public name:string, public price:number) { }
}

// new bottleMaker('milton', 1200) //bottle will finally be made using its defination (custoructor)

let bottle1 = new bottleMaker('milton', 1200);


//2nd example
class humanMaker{
    constructor(public name:string, public isHandsome:boolean) {}
}

let human1 = new humanMaker('aditya', true);


//the problem
// human1.name = "jaiswal" //i can change the values, it is due to "access modifier public" , if we set it to private then it wont happen