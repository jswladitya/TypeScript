//type assertion & type-casting (ek type se dusre type me convert karna) is almost the same in this language

//type assertion ka matlab, batana TS ko ki particular cheej ka type kya he, ye app tab karte ho jab aap ts se jyada us value ka type jante ho 

let a: any = 12;

// (a as number). //dot lagane se saare wo methods accessable ho jate he jo number ke sath milte he , 
// OR another way
// (<number>a). //same as above

//type casting
let b = Number("12")
console.log(a) // string got converted to number
console.log(typeof a) //number


