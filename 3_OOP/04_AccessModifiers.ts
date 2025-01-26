//PUBLIC
// class BottleMaker{
//     constructor (public name:string){
//         this.name = "aditya"
//     }

//     changing(){
//         this.name = "jaiswal"
//     }
// }

// let b1 = new BottleMaker("milton")
// b1.changing() //changed
// b1.name = "some another name" //changed

/*
1. if you has an error , then also code will be executed (showing the error in a compile time)

2. Public means -> we can modify the variable in constructor (like this.name), any different method in class , kisi dusre class me inherit karlo aur waha pe bhi change kar sakte he {means publicly defined variable can be access and modified anywhere} 
3. Private -> cannot be accessed and changed outside the class , only within the class (not even in inherited class) 

*/

//PRIVATE
// class BottleMaker{
//     constructor (private name:string){}
// }

// class MetalBottleMaker extends BottleMaker {
//     constructor (name : string){
//         super(name);
//     }

//     getValue(){
//         // console.log(this.name);
//you cannot acess the privately defined variable in any other class , it can be accessed using getters and setters only
//     }
// }

// let b1 = new MetalBottleMaker("milton")
// b1.getValue() //cannot changed
//class ke bahar it is not accessible , inherited class me bhi it is not accessible

//PROTECTED -> variable can be access within its class , even when if some other class extending it , but class ke bahar it cannot be accessed
class BottleMaker {
  protected name = "Milton";
}

class MetalBottleMaker extends BottleMaker {
  public material = "metal";

  changeName() {
    this.name = "some other name"; //yes it can be changed
  }
}
let b1 = new MetalBottleMaker();
b1.changeName();
// b1.name = "some another name" //NO it cannot be changed , coz i am changing it from outside the class
