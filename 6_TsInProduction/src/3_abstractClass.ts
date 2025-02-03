// class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string
//     ){}
// }

// const aditya = new TakePhoto("test", "Test")

// the moment u declare this class as abstract , then no new object can be intantiated from this class, but in case if the another class extends it , then that class can be instantiated as new object
abstract class TakePhoto {
    // if some method is declared as abstracted in the particular class , then the entire class become abstract
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const adi = new Instagram("test", "Test", 3)

adi.getReelTime()