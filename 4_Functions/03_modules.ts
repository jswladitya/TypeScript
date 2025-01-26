//basic import export 
export function addPayments(val:number){} 
export function getDetails(val:string){} 

//in the other file if u need this methods , then simply import them their
// import {addPayments, getDetails} from "file path"


//default import export --> means if ek hi cheez export karni he 
export default class BottleMaker{
    constructor(public name:string){}
}

// import BottleMaker (no bracket) from "file path"