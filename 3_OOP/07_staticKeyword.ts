//static members
// class Aditya {
//     static version = 1.0
// }

//we can access the value defined under static keyword like
// Aditya.version //1, (like we do for Math.PI, ad we get 3.14) 


class Shery {
    static version = 1.0

    static getRandomNumber(){
        return Math.random
    }
}
//now we dont need to make instance of class Shery
Shery.getRandomNumber() //a random number

//NOTE: kisi variable ya kisi method pe ager static laga dia toh bina use instantiate kie directly use class me se use karsakte he