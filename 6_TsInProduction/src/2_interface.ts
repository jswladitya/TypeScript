//---> interface is like defining the template of something (like.., 'tree' is a interface but 'tree of mangooes' is its implementation)

// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

// interface Story {
//     createStory(): void
// }

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }

// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){}

//     createStory(): void {
//         console.log("Story was created");
        
//     }
// }