//maryam mohebbe (11/06/2026)//
"use strict"

let fragileNum=0;
let normalNum=0;
let unknownNum=0;

for( let crate=1;crate<=20; crate++){
    if(crate %5===0){
        console.log("crate"+crate+":handle with care");
        ++fragileNum
    }else if(crate %2===0){
        console.log("crate"+crate+":load crate");
        ++normalNum
    }else{
        console.log("crate"+crate+":inspect crate");
        ++unknownNum 
    }
}
console.log("total scaned crate is 20");
console.log("fragile crates:"+fragileNum);
console.log("normal crates:"+normalNum);
console.log("unknown crates:"+unknownNum);

//optional challenge//
/*
let fragileNum=0;
let normalNum=0;
let unknownNum=0;
const totalCrates= Number(prompt("how many carets do you have?"));
const scannedCrate=Number(prompt("how many crates need to be scanned?"));

for( let crate=1;crate<=scannedCrate; crate++){
    if(crate %5===0){
        console.log("crate"+crate+":handle with care");
        alert("crate"+crate+":handle with care");
        ++fragileNum
    }else if(crate %2===0){
        console.log("crate"+crate+":load crate");
        alert("crate"+crate+":load crate");
        ++normalNum
    }else{
        console.log("crate"+crate+":inspect crate");
        alert("crate"+crate+":inspect crate");
        ++unknownNum 
    }
}
console.log("total scaned crate is "+scannedCrate);
console.log("fragile crates:"+fragileNum);
console.log("normal crates:"+normalNum);
console.log("unknown crates:"+unknownNum);*/
