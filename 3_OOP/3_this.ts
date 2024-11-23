//"this keyword" -> in a particular class , kisi method ke ander kinhi aur cheezo ko ya methods ko access karna cahahte he jo us method ka part nahi he so we use this keyword
class Abcd {
    name = 'aditya';

    //when u are writing function in a class then its called method and we dont put them into the variable

    changeSomeMoreStuff(){
        console.log("hey");
        
    }
    changename(){
        console.log(this.name);
        this.changeSomeMoreStuff()
    }
}