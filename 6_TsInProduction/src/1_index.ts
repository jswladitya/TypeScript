/*
class User {
    // constructor(email: string, name: string){
    //     this.email = email; //error
    //     this.name = name; //error


    public email: string
    private name: string
    readonly city: string = "Maharashtra"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name

    }
}

//just provide the 2 strings 
const aditya = new User("aditya@gmail.com","aditya")

console.log(aditya.city) //maharashtra
aditya.city = 'jaipur' //error, its readonly, cannot be manipulated


NOTE : 
1. Publically defined variables can accessed and modified anywhere 
2. Privately defined variables can be accessed and modified within its class only , not accessible in the class extending it , not accessible outside or else where
3. Protected defined variables can be accessed within the class , also with in the class extending it , not accessable outside
*/

class User {
  //TypeScript way
  protected _courseCount = 1;

  readonly city: string = "maharashtra";
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}


  //private method
  private deleteToken() {
    console.log("Token deleted");
  }


  //getter-setters --> they are defined inside the class itself
  //privaetley defined variables are accesssed and modified outside the class just through getters and setters
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    //setter does not u to put return type
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}


//inheritance
class SubUser extends User {
    // extended class cannot acquire the properties declared as private
    //but protected variables can be accessed and modified 
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const aditya = new User("aditya@gmail.com", "aditya");
// aditya.name

// aditya.deleteToken()
