//type aliaisi and interaface are almost the same
//defining the type 'User' like we have string, number
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User):User {
    // once u mentioned the return type u have to return that value of that type
    return {name: "", email: "", isActive: false}
}

createUser({ name: "", email: "", isActive: false });
