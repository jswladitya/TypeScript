//type aliaisi and interaface are almost the same
//defining the type 'User' like we have string, number
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User):User {
//     // once u mentioned the return type u have to return that value of that type
//     return {name: "", email: "", isActive: false}
// }

// createUser({ name: "", email: "", isActive: false });

//readonly property
type User = {
  readonly _id: string; //add readonly property if u want no one to manipulate this field
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; //optional
};

let myUser: User = {
  _id: "1234",
  name: "aditya",
  email: "aditya@gmail.com",
  isActive: false,
};

myUser.email = "jaiswal@gmail.com"; //can be manipulated
// myUser._id = "43545" //can not be manipulated , it is defined as readonly



//another example --> mixing and matching of types (defining a new type based on combination of other types)
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };
