function digitalCompression(twelveBits){
    let signBit = twelveBits.charAt(0);
    let threeBitSegment = "111";
    let increment = 0;
    let magBits = 0;
    let zeroCounter = 0;
    for(let i = 1; i<=12; i++){
        if(twelveBits.charAt(i) == 0){
            zeroCounter++
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
    }
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

function digitalExpansion(eightBits){
	let signBit = eightBits.charAt(0);
	let threeBitSegment = "";
	let decthreeBitSegment = 0;
	let counter = "";
	let magBits = "";
	let counter2 = 0;
    let twelveBitExpanded = 0;
	for(let i=1; i<=3; i++){
        let val = eightBits.charAt(i);
		// let val = eightBits.charaAt(i);
		threeBitSegment = threeBitSegment+val;
		decthreeBitSegment = parseInt(threeBitSegment, 2);
	}

	let leadingZeroes = 7 - decthreeBitSegment; 
	for(let j = 0; j<leadingZeroes ; j++){
		let zeroAppend = 0;
		counter = counter+zeroAppend;
	}

	for(let k = 4; k<=7;k++){
		let A = eightBits.charAt(k)
		magBits = magBits+A;
	}
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

function twelveBitquantization(Vlsb, samplingVal){
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
    return finalVal;
}

function twelveBitEncoding(xqn,Vlsb){
    let convertVal = Math.round(xqn/Vlsb);
    let absVal = Math.abs(convertVal);
    let binaryCode = absVal.toString(2).padStart(11,'0');
    

    if(Math.sign(convertVal)==1){
        let firstBit = 1;
       let encodedVal = firstBit+binaryCode;
    return encodedVal;
   }
   else if(Math.sign(convertVal)==-1){
        let firstBit = 0;
       let encodedVal = firstBit+binaryCode;
    return encodedVal; 
   }
   else if(Math.sign(convertVal)==0){;
    let encodedVal = "100000000000";
    return encodedVal;
 }
   else if(Math.sign(convertVal)==-0){;
   let encodedVal = "000000000000";
   return encodedVal;}
}

function twelveBitdigitalToAnalog(Vlsbp, encData){
    if(encData.charAt(0) == 1){
        let magnitudeBits = encData.substring(1,12);
        let magnitudeVal = (parseInt(magnitudeBits, 2));
        let finalMagVal = Math.round(10000*magnitudeVal*Vlsbp)/10000;
        return Math.abs(finalMagVal);
    }
    else if(encData.charAt(0) == 0){
        let magnitudeBits = encData.substring(1,12);
        let magnitudeVal = (parseInt(magnitudeBits, 2));
        let finalMagVal = Math.round(10000*magnitudeVal*Vlsbp)/10000;
        return -Math.abs(finalMagVal);
    }
}


function executePCM2(){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(executePCM2Simulation()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}

function executePCM2Simulation(){
if(functionCounter>0){
    console.time("element colors")
//#region SAMPLING
    //----------------------------------------------SAMPLING-------------------------
    samplingStart = $("#timeStart").val()
    numCycle = $("#numCycle").val()
    samplingFrequency = $("#samplingFrequency").val()
    Vlsb = $("#Vlsb").val()
    Vlsbp = $("#Vlsbp").val()
    fsp = $("#Fsp").val()
   
   let vMaximum = 127*Vlsb;
   //PLOTTING EQUATIONS
   let config = {
       displaylogo: false,
       select2d: false,
       lasso2d: false,
       responsive: true,
       displayModeBar: true,
   }
   //Sampling Values / TRACE 0
   let samplingPeriod = 1/samplingFrequency; //formula

   //smoothness
   let F = (1/samplingFrequency)*800000; //formula
   

   //DAC
   let samplingPeriodDAC = 1/fsp; //formula
   let samplingStartFormulaDAC = samplingStart*samplingPeriodDAC; //formula
   
   // FOR ALERTS
if(numCycle >= 100 ){
    if (confirm('The number of cycles is too high. This parameter would take a long time to simulate. Do you wish to continue?')) {
       // CONTINUE
     } else {
      return;
     }
    }
  if(samplingFrequency >= 40000 ){
    if (confirm('The sampling frequency is too high. This parameter would take a long time to simulate. Do you wish to continue?')) {
       // CONTINUE
     } else {
      return;
     }
    }
  if(fsp >= 40000 ){
    if (confirm('The sampling frequency prime is too high. This parameter would take a long time to simulate. Do you wish to continue?')) {
       // CONTINUE
     } else {
      return;
     }
    }
   // --------------------- NEW ---------------------------
   let pi = Math.PI;
   let cos = Math.cos;
   let sin = Math.sin;
   exp = $("#inputEqn").val();

   let expSplit = exp.split("*");
   let frequencyArr = [];
   for(let i = 3; i<=expSplit.length; i+=4){
       frequencyArr.push((expSplit[i]));
   }
   let frequency = Math.max(...frequencyArr);
   // --------------------- NEW ---------------------------
   
   let period = 1/frequency; //formula
   let samplingStartFormula = samplingStart*samplingPeriod; //formula
   let tdur = numCycle/frequency; //formula
       
       

   //generate the values
   let xValues = [];
   let yValues = [];
   let nValForTable = [];
   
   
   
   let xdacDataPlot = [samplingStartFormulaDAC];
   let xdacData = [];
   let ydacDataPlot = [samplingStartFormulaDAC];
   let ydacData = [];

   
   let loopVal = [];

   let i = 0;
   for(let t = samplingStartFormula; t<=tdur; t+=samplingPeriod){  
       let add = i+1;
       xValueRound = Math.round(10000000*t)/10000000
       yValueRound = Math.round(10000000*(eval(exp)))/10000000;
       xValues.push(xValueRound);
       yValues.push(eval(yValueRound));
       nValForTable.push(add);
   
   i++;
   } 
   //FOR DAC
let j = 0; //for samples
for(let x = samplingStartFormulaDAC;j <nValForTable.length; x+=samplingPeriodDAC){    
   //for DAC
   xdacDataPlot.push(x+samplingPeriodDAC);
   xDacRound = Math.round(10000000*x)/10000000
   xdacData.push(xDacRound);

   j++;
}   
   
   
   
   //define the DATA
   let data = {
       x: xValues,
       y: yValues,
       mode:"markers+lines",
       marker: {
           color:$("#samplingValColor").val(),
           size: $("#samplingThicc").val(),
           symbol: "circle",
       },
       line: {
           dash: "dot", 
           shape: 'spline',
           smoothing: 1.3,
           width:2,
       },
       name: "Sampling Values",
   }
   let data_2 = {
       x: xValues,
       y: yValues,
       xaxis: 'x2',
       yaxis: 'y2',
       mode:"markers+lines",
       marker: {
           color:$("#samplingValColor").val(),
           size: $("#samplingThicc").val(),
           symbol: "circle",
       },
       line: {
           dash: "dot", 
           shape: 'spline',
           smoothing: 1.3,
           width:2,
       },
       name: "Sampling Values",
   }
   
   //SINUSOID / TRACE 1
   
   //generate the values
   let xValues2 = [];
   let yValues2 = [];
   let compressionPlot = [];
   
   for(let t = 0; t<=tdur ; t+=samplingPeriod/F){
       xValues2.push(t);
       yValues2.push(eval(exp));
   }
    let data2 = {
        x: xValues2,
        y: yValues2,
        mode:"lines",
        line:{
            color: $("#sinusoidValColor").val(),
            width: $("#sinusoidThicc").val(),
        },
        text : yValues,
        hoverinfo:"none",
        name: "Input Signal",
    }
    let data2_2 = {
        x: xValues2,
        y: yValues2,
        mode:"lines",
        xaxis: 'x2',
        yaxis: 'y2',
        line:{
            color: $("#sinusoidValColor").val(),
            width: $("#sinusoidThicc").val(),
        },
        text : yValues,
        hoverinfo:"none",
        name: "Input Signal",
    }

    let dataCombined = [];
    //---------------------------------------------- END SAMPLING-------------------------
//#endregion

//#region QUANTIZATION and ENCODING
    //------------------------------------ QUANTIZATION and ENCODING-------------------------
    //EXECUTE FUNCTIONS
let encodedArr = [];
let expansionArr = [];
let dacQuantized = [];
let samplingQuantized = [];
let returnVal = 0;
let returnVal2 = 0;
let compressedBitStream = '';
//DIGITAL COMPANDING ARRAYS
let digitalCompressedArr = [];
let digitalExpandedArr = [];
for(let i=0; i<yValues.length;i++){
        samplingQuantized.push(twelveBitquantization(Vlsb, yValues[i]));
        encodedArr.push(twelveBitEncoding(twelveBitquantization(Vlsb, yValues[i]),Vlsb));
        digitalCompressedArr.push(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, yValues[i]),Vlsb)));
         compressedBitStream = (digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, yValues[i]),Vlsb)));
        digitalExpandedArr.push(digitalExpansion(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, yValues[i]),Vlsb))));
        (twelveBitdigitalToAnalog(Vlsbp, digitalExpansion(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, yValues[i]),Vlsb))))) ;
        returnVal2 = twelveBitdigitalToAnalog(Vlsbp, digitalExpansion(digitalCompression(twelveBitEncoding(twelveBitquantization(Vlsb, yValues[i]),Vlsb))))
    //FOR DAC PLOTTING
        ydacData.push(returnVal2);
        ydacDataPlot.push(returnVal2);
}
    //------------------------------------ END QUANTIZATION and ENCODING-------------------------
//#endregion QUANTIZATION and ENCODING

//#region DAC    
//--------------------------------------DAC------------------------------------
//PLOT DAC
let endPlot = 0;
if(xdacDataPlot[xdacDataPlot.length-1] >= tdur) endPlot = xdacDataPlot[xdacDataPlot.length-1];
else endPlot = tdur;
 

let layout2 = {
        xaxis: {range: [0, endPlot], 
            "zerolinecolor": $("#gridColor").val(),
            "gridcolor": $("#gridColor").val(),   
            linecolor: 'black',
        linewidth: 2,
        mirror: true
        
        },
            yaxis: {
                "gridcolor": $("#gridColor").val(),
                "zerolinecolor": $("#gridColor").val(),
                linecolor: 'black',
            linewidth: 2,
            mirror: true},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#8EB0C6",
        
              legend: {"orientation": "h"},
            
              margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
              },
    
    }

    let layout2_2 = {
        xaxis: {range: [0,endPlot],title: "X-AXIS",
        "zerolinecolor": $("#gridColor").val(),
        "gridcolor": $("#gridColor").val(),  
        linecolor: 'black',
linewidth: 2,
mirror: true},
        yaxis: {title: "Y-AXIS",
        "gridcolor": $("#gridColor").val(),
        "zerolinecolor": $("#gridColor").val(),
        linecolor: 'black',
linewidth: 2,
mirror: true},
        grid: {rows: 2, 
            columns: 1,
             pattern: 'independent'
            },
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#8EB0C6",

            "yaxis2": {
                "gridcolor": $("#gridColor").val(),
                "zerolinecolor": $("#gridColor").val(),
                linecolor: 'black',
        linewidth: 2,
        mirror: true
            },
            "xaxis2": {
                range: [0,endPlot],
                "zerolinecolor": $("#gridColor").val(),
                "gridcolor": $("#gridColor").val(),
                linecolor: 'black',
        linewidth: 2,
        mirror: true
    },
    legend: {"orientation": "h"},
    
    margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50,
        pad: 4
      },
    
        }


let dacDataPlot = {
    x: xdacDataPlot,
    y: ydacDataPlot,
    mode: 'lines',
    name: 'Staircase Waveform',
    line: {
        shape: 'vh',
        color: $("#DACstairCase").val(),
        width: $("#stairThicc").val(),
    },
    type: 'scatter',
    hoverinfo:"none",
  };
  let dacDataPlot_2 = {
    x: xdacDataPlot,
    y: ydacDataPlot,
    xaxis: 'x2',
    yaxis: 'y2',
    mode: 'lines',
    name: 'Staircase Waveform',
    line: {
        shape: 'vh',
        color: $("#DACstairCase").val(),
        width: $("#stairThicc").val(),
    },
    type: 'scatter',
    hoverinfo:"none",
  };
let dacData = {
    x: xdacData,
    y: ydacData,
    mode: "markers",
    name: 'Reconstructed Values',
    marker:{
    size: 20,
    color: $("#DACsamplingValColor").val(),
    opacity: 0,
    showlegend:false,
    },
}
let dacData_2 = {
    x: xdacData,
    y: ydacData,
    xaxis: 'x2',
    yaxis: 'y2',
    mode: "markers",
    name: 'Reconstructed Values',
    marker:{
    size: 20,
    color: $("#DACsamplingValColor").val(),
    opacity: 0,
    showlegend:false,
    },
} 

//IF SINGLE WINDOW
dataCombined= [data, data2, dacData, dacDataPlot];
Plotly.newPlot("myPlot", dataCombined, layout2,config);

//------------------------------------ FOR TWO WINDOWS --------------------------------------
if($("#view").val() == "Two Windows"){

    let windowChangeVal1 = $("#firstWindowOpt").val();
    let windowChangeVal2 = $("#secondWindowOpt").val();
    
    windowChange(windowChangeVal1, windowChangeVal2);
    
    function windowChange(windowChangeVal1, windowChangeVal2){

        let dataCombinedWindow = [];
        

    switch(windowChangeVal1){
        case "Input Signal":
            dataCombinedWindow.push(data, data2);
            break;
        case "Received Signal":
            dataCombinedWindow.push(dacData, dacDataPlot);
            break;
        case "Sinusoid":
            dataCombinedWindow.push(data2);
            break;
        case "Sampling Signal":
            dataCombinedWindow.push(data);
            break;
    }
    switch(windowChangeVal2){
        case "Input Signal":
            dataCombinedWindow.push(data_2, data2_2);
            break;
        case "Received Signal":
            dataCombinedWindow.push(dacData_2, dacDataPlot_2);
            break;
            case "Sinusoid":
            dataCombinedWindow.push(data2_2);
            break;
        case "Sampling Signal":
            dataCombinedWindow.push(data_2);
            break;
    }
    Plotly.newPlot("myPlot", dataCombinedWindow, layout2_2, config);
    }
    }
 //--------------------------- VIEW CHANGE EVENT HANDLER ----------------------
 $(".windowView").on("change", function windowView(){

    if($("#view").val() == "Single Window"){
Plotly.newPlot('myPlot' , dataCombined, layout2,config);
    }

if($("#view").val() == "Two Windows"){
    let windowChangeVal1 = $("#firstWindowOpt").val();
    let windowChangeVal2 = $("#secondWindowOpt").val();
        let dataCombinedWindow = [];
        let dataCombinedWindow2 = [];
            switch(windowChangeVal1){
                case "Input Signal":
                    dataCombinedWindow.push(data, data2);
                    break;
                case "Received Signal":
                    dataCombinedWindow.push(dacData, dacDataPlot);
                    break;
                case "Sinusoid":
                    dataCombinedWindow.push(data2);
                    break;
                case "Sampling Signal":
                    dataCombinedWindow.push(data);
                    break;
            }
            switch(windowChangeVal2){
                case "Input Signal":
                    dataCombinedWindow.push(data_2, data2_2);
                    break;
                case "Received Signal":
                    dataCombinedWindow.push(dacData_2, dacDataPlot_2);
                    break;
                    case "Sinusoid":
                    dataCombinedWindow.push(data2_2);
                    break;
                case "Sampling Signal":
                    dataCombinedWindow.push(data_2);
                    break;
            }
    Plotly.newPlot("myPlot", dataCombinedWindow, layout2_2, config);
    dataCombinedWindow = [];
}})
console.timeEnd("element colors")

}
}