function generateBits(){
   let numOfBits = $("#numBits").val(); //userdefined
   // FOR RANDOM BITS
   if($("#preDefBits").val() == "Random Bits"){
let randomBits = ""
for(let i = 0; i<numOfBits ; i++){
 let randomBitVal = Math.floor(Math.random() * 2);
 randomBits = randomBits+randomBitVal;
}
generateBitValues = randomBits;
   }

//FOR ALTERNATE BITS (01)
if($("#preDefBits").val() == "Alternate Bits (01)"){
let alternateBits = ""
let alternateBitVal = "0"; //userdefined (start bit)

for(let i = 0; i<numOfBits ; i++){
 if(alternateBitVal == 0){
    alternateBitVal = "1";
 alternateBits = alternateBits + alternateBitVal;
 }
 else{
    alternateBitVal = "0";
    alternateBits = alternateBits + alternateBitVal;
 }

}
generateBitValues = alternateBits;
}

//FOR ALTERNATE BITS (10)
if($("#preDefBits").val() == "Alternate Bits (10)"){
let alternateBits = ""
let alternateBitVal = "1"; //userdefined (start bit)

for(let i = 0; i<numOfBits ; i++){
 if(alternateBitVal == 0){
    alternateBitVal = "1";
 alternateBits = alternateBits + alternateBitVal;
 }
 else{
    alternateBitVal = "0";
    alternateBits = alternateBits + alternateBitVal;
 }

}
generateBitValues = alternateBits;
}

//ALL ONES
if($("#preDefBits").val() == "All Ones"){
let oneBits = ""
for(let i = 0; i<numOfBits ; i++){
 let oneBitVal = "1"
 oneBits = oneBits+oneBitVal;
}
generateBitValues = oneBits;
}

//ALL ZEROS
if($("#preDefBits").val() == "All Zeros"){
let zeroBits = ""
for(let i = 0; i<numOfBits ; i++){
 let zeroBitVal = "0"
 zeroBits = zeroBits+zeroBitVal;
}
generateBitValues = zeroBits;
}

$("#binaryInput").val(generateBitValues);
}