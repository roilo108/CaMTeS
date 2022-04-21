function muLawCompression(samplingValue, muValueforCompanding, vMax){
    // let compressedVal = ((vMax)*Math.log(1+(muValueforCompanding*Math.abs(samplingValue))/(vMax)))/(Math.log(1+muValueforCompanding));
    let compressedValNum = ((vMax)*Math.log(1+(muValueforCompanding*Math.abs(samplingValue))/(vMax)));
    let denom = currency(1).add(muValueforCompanding);
    let compressedValDenom = (Math.log(denom));
    let compressedValCombi = compressedValNum/compressedValDenom
    let compressedValFinal = Math.round(100000*compressedValCombi)/100000;

if(Math.sign(samplingValue)==1 || Math.sign(samplingValue)==0){
    return Math.abs(compressedValFinal);
}
else if(Math.sign(samplingValue)==-1 || Math.sign(samplingValue)==-0){
    return -Math.abs(compressedValFinal);
}
}
// console.log(muLawCompression(0.0879362366357298,127, 2.032));

function muLawExpansion(dacQuantizedValue,muValueforCompanding,vMax){
    console.log(dacQuantizedValue)
    console.log(muValueforCompanding)
    console.log(vMax)
    let jsBug = currency(1).add(muValueforCompanding)
    console.log(jsBug)
    // let expansionVal = (vMax/muValueforCompanding)*(Math.exp(Math.abs(dacQuantizedValue)*Math.log(jsBug)/vMax)-1);
    let expansionVal1 = (vMax/muValueforCompanding);
    console.log("🚀 ~ file: compandingFunctions.js ~ line 26 ~ muLawExpansion ~ expansionVal1", expansionVal1)
    let expansionVal2 = (Math.exp(Math.abs(dacQuantizedValue)*Math.log(jsBug)/vMax)-1);
    console.log("🚀 ~ file: compandingFunctions.js ~ line 28 ~ muLawExpansion ~ expansionVal2", expansionVal2)
    let expansionVal = expansionVal1*expansionVal2;
    let expansionValFinal = Math.round(100000*expansionVal)/100000;
    if(Math.sign(dacQuantizedValue)==1 || Math.sign(dacQuantizedValue)==0){
        console.log(dacQuantizedValue);
        return Math.abs(expansionValFinal);
    }
    else if(Math.sign(dacQuantizedValue)==-1 || Math.sign(dacQuantizedValue)==-0){
        console.log(dacQuantizedValue);
        return -Math.abs(expansionValFinal);
    }
}
// console.log(muLawExpansion(-1.264,127,2.032));


function digitalCompression(twelveBits){
    console.log(twelveBits);
    let signBit = twelveBits.charAt(0);
    let threeBitSegment = "111";
    let increment = 0;
    let magBits = 0;
    let zeroCounter = 0;
    for(let i = 1; i<=12; i++){
        if(twelveBits.charAt(i) == 0){
            zeroCounter++
         console.log(zeroCounter);
            if(zeroCounter == 7) threeBitSegment = "000"
            else if(zeroCounter == 6) threeBitSegment = "001"
            else if(zeroCounter == 5) threeBitSegment = "010"
            else if(zeroCounter == 4) threeBitSegment = "011"
            else if(zeroCounter == 3) threeBitSegment = "100"
            else if(zeroCounter == 2) threeBitSegment = "101"
            else if(zeroCounter == 1) threeBitSegment = "110"
            else if(zeroCounter ==8) break;
            // else if(zeroCounter == 0) threeBitSegment = "111"
        }
        else if(twelveBits.charAt(i) != 0) break;
    }
        console.log(threeBitSegment);
        if(zeroCounter != 8){
        for(let i = 1; i<=12; i++){
        if(twelveBits.charAt(i) == "1"){
            let A = twelveBits.charAt(i+1);
            let B = twelveBits.charAt(i+2);
            let C = twelveBits.charAt(i+3);
            let D = twelveBits.charAt(i+4);
    
        magBits = A+B+C+D;
        break;
        }
    }console.log(magBits);   
    let eightBitCompressedCode = signBit+threeBitSegment+magBits;
    return eightBitCompressedCode;
}
else if(zeroCounter == 8){
            let A = twelveBits.charAt(8);
            let B = twelveBits.charAt(9);
            let C = twelveBits.charAt(10);
            let D = twelveBits.charAt(11);
        magBits = A+B+C+D;
        let eightBitCompressedCode = signBit+threeBitSegment+magBits;
    return eightBitCompressedCode;
}
    }
    // console.log(digitalCompression("100000000000"))

function digitalExpansion(eightBits){
    console.log(eightBits);
	let signBit = eightBits.charAt(0);
	let threeBitSegment = "";
	let decthreeBitSegment = 0;
	let counter = "";
	let magBits = "";
	let counter2 = 0;
    let twelveBitExpanded = 0;
	for(let i=1; i<=3; i++){
        let val = eightBits.charAt(i);
    console.log(val)
		// let val = eightBits.charaAt(i);
		threeBitSegment = threeBitSegment+val;
		decthreeBitSegment = parseInt(threeBitSegment, 2);
	}
    console.log("🚀 ~ file: compandingFunctions.js ~ line 58 ~ digitalExpansion ~ decthreeBitSegment", decthreeBitSegment)

	let leadingZeroes = 7 - decthreeBitSegment; 
    console.log("🚀 ~ file: compandingFunctions.js ~ line 60 ~ digitalExpansion ~ leadingZeroes", leadingZeroes)
	for(let j = 0; j<leadingZeroes ; j++){
		let zeroAppend = 0;
		counter = counter+zeroAppend;
	}
    console.log("🚀 ~ file: compandingFunctions.js ~ line 66 ~ digitalExpansion ~ counter", counter)

	for(let k = 4; k<=7;k++){
		let A = eightBits.charAt(k)
		magBits = magBits+A;
	}console.log(magBits);
    let checklength = signBit + counter + magBits;
	if(checklength.length == 12){
		 twelveBitExpanded = signBit + counter + magBits;
        return twelveBitExpanded;
	}
	else if(checklength.length != 12){
        twelveBitExpanded = signBit + counter + 1 + magBits;
		let makeItTwelve = twelveBitExpanded.length;
			for(let i = makeItTwelve ; i<12; i++){
				if(counter2 == 0){
					twelveBitExpanded = twelveBitExpanded + 1;
				}
				else if(counter2 > 0){
					twelveBitExpanded = twelveBitExpanded + 0;
				}
					counter2++;
			}
            return twelveBitExpanded;
	}
}
// console.log(digitalExpansion("11101001"));

function twelveBitquantization(Vlsb, samplingVal){
    // console.log(samplingVal)
    let vMax = 2047*Vlsb;
    let vMin = -2047*Vlsb;
    if(samplingVal>=vMin&&samplingVal<=vMax){
        // if(samplingVal>=Vmin)
        let roundedVal = (Math.round(samplingVal/Vlsb));
        samplingVal = (roundedVal*Vlsb);

    }
    else if(samplingVal<vMin){
        samplingVal=vMin;
    }
    else if(samplingVal>vMax){
        samplingVal=vMax;
    }
    
    let finalVal = Math.round(10000*samplingVal)/10000; //round off to the nearest ten thousandths
    // let finalVal = Math.round(samplingVal); 
    
    
    return finalVal;
}
// console.log(twelveBitquantization(.001,-0.3129));

function twelveBitEncoding(xqn,Vlsb){
    let convertVal = Math.round(xqn/Vlsb);
    console.log(convertVal);
    

    let absVal = Math.abs(convertVal);
    // console.log(absVal);
    let binaryCode = absVal.toString(2).padStart(11,'0');
    

    if(Math.sign(convertVal)==1){
        let firstBit = 1;
    //    console.log(firstBit);
       let encodedVal = firstBit+binaryCode;
    //    console.log(encodedVal);
    return encodedVal;
   }
   else if(Math.sign(convertVal)==-1){
        let firstBit = 0;
    //    console.log(firstBit);
       let encodedVal = firstBit+binaryCode;
    //   console.log(encodedVal);
    return encodedVal; 
   }
   else if(Math.sign(convertVal)==0){;
    let encodedVal = "100000000000";
    // console.log(encodedVal);
    return encodedVal;
 }
   else if(Math.sign(convertVal)==-0){;
   let encodedVal = "000000000000";
//    console.log(encodedVal);
   return encodedVal;}
}
// console.log(twelveBitEncoding(-0.313,.001));

function twelveBitdigitalToAnalog(Vlsbp, encData){
    if(encData.charAt(0) == 1){
        let magnitudeBits = encData.substring(1,12);
        console.log(magnitudeBits);
        let magnitudeVal = (parseInt(magnitudeBits, 2));
        console.log(magnitudeVal);
        let finalMagVal = Math.round(10000*magnitudeVal*Vlsbp)/10000;
        console.log(finalMagVal);
        return Math.abs(finalMagVal);
    }
    else if(encData.charAt(0) == 0){
        let magnitudeBits = encData.substring(1,12);
        console.log(magnitudeBits);
        let magnitudeVal = (parseInt(magnitudeBits, 2));
        console.log(magnitudeVal);
        let finalMagVal = Math.round(10000*magnitudeVal*Vlsbp)/10000;
        console.log(finalMagVal);
        return -Math.abs(finalMagVal);
    }
}
// console.log(twelveBitdigitalToAnalog(.001,"000100111000"));

/* //DIGITAL COMPANDING PROCESS:
//1
let Vlsb = 0.001;
let Vlsbp = 0.001;
let samplingVal = -0.3129;
//2

console.log(twelveBitquantization(Vlsb, samplingVal))
//3
console.log(twelveBitEncoding(twelveBitquantization(Vlsb, samplingVal),Vlsb))
//4
console.log(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, samplingVal),Vlsb)))
//5
console.log(digitalExpansion(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, samplingVal),Vlsb))))
//6
console.log(twelveBitdigitalToAnalog(Vlsbp, digitalExpansion(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, samplingVal),Vlsb))))) */