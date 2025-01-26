//type guards --> type narrowing
// a function taking arguments just numbers or string
function abcd(arg: string | number){
    // arg. //here i get only those methods jo string aur numbers dono me commom he, and islie i applied type narrowing taki mere pass sab methods aa jaye

    if(typeof arg === 'number'){
        // arg. //yes here i got all the methods and properties related to numbers
        return "number";
    }
    else if(typeof arg === 'string'){
        // arg. //yes here i got all the methods and properties related to string
        return "string";
    }
    else{
        throw new Error("something went wrong")
    }
}

console.log(abcd(12));
console.log(abcd("hello"));


//using instanceof and typeof
//if have 2 classes , ek function me dono ke instances pass
class tvKaRemote{
    switchTvOff(){
        console.log("switching off TV")
    }
}

class carKaRemote{
    switchCarOff(){
        console.log("switching off car")
    }
}

const tv = new tvKaRemote()
const car = new carKaRemote()

function switchOffKaro(device: tvKaRemote | carKaRemote){
    if(device instanceof tvKaRemote){
        device.switchTvOff();
    }
    else if(device instanceof carKaRemote){
        device.switchCarOff;
    }
}

switchOffKaro(tv)
switchOffKaro(car)