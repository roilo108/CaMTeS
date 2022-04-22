
//#region  --------------------- INITIALIZATION -----------------------
console.time("INITIALIZATION!")
let config = {
  displaylogo: false,
  select2d: false,
  lasso2d: false,
  responsive: true,
  displayModeBar: true,
}

let dataInit = [{
  x:[0],
  y:[0],
}]
var values = [
  [0],[0],[0],[0],[0]
]
var values2 = [
  [0],[0],[0],[0],[0],[0],[0]
]
//INPUT SIGNAL
// ------------------------------------------ ADD -----------------------------
let fsp = 0;

let frequency = 0; 
let numCycle = 0;
let tdur = numCycle/frequency; //formula

let layoutTable = {
  title: "<b>ADC VALUES</b>",
  plot_bgcolor:"white",
 paper_bgcolor:"#8EB0C6",
 font: {family: "sans", size: 20, color: ["black"],
 },
 margin: {
l: 50,
r: 50,
b: 50,
t: 50,
pad: 4
},
}

let layoutTable2 = {
  title: "<b>DAC VALUES</b>",
  plot_bgcolor:"white",
 paper_bgcolor:"#8EB0C6",
 font: {family: "sans", size: 20, color: ["black"],
 },
 margin: {
l: 50,
r: 50,
b: 50,
t: 50,
pad: 4
},
}

let layout2 = {
  xaxis: {range: [0,tdur],title: "X-AXIS"},
  yaxis: {title: "Y-AXIS"},
  plot_bgcolor:$("#bgColor").val(),
  paper_bgcolor:"#8EB0C6",
  "yaxis": {
      "gridcolor": $("#gridColor").val(),
      "zerolinecolor": $("#gridColor").val(),
      linecolor: 'black',
  linewidth: 2,
  mirror: true
    },
    "xaxis": {
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
let layout2_2 = {
  xaxis: {range: [0,tdur],title: "X-AXIS"},
  yaxis: {title: "Y-AXIS"},
  grid: {rows: 2, 
      columns: 1,
       pattern: 'independent'
      },
      plot_bgcolor:$("#bgColor").val(),
      paper_bgcolor:"#8EB0C6",

      "yaxis": {
          "gridcolor": $("#gridColor").val(),
          "zerolinecolor": $("#gridColor").val(),
          linecolor: 'black',
  linewidth: 2,
  mirror: true
      },
      "xaxis": {
          "zerolinecolor": $("#gridColor").val(),
          "gridcolor": $("#gridColor").val(),  
          linecolor: 'black',
  linewidth: 2,
  mirror: true
},
      "yaxis2": {
          "gridcolor": $("#gridColor").val(),
          "zerolinecolor": $("#gridColor").val(),
          linecolor: 'black',
  linewidth: 2,
  mirror: true
      },
      "xaxis2": {
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
var tableInitialize = [{
  type: 'table',
  header: {
    values: [["<b> </b>"],["<b> </b>"],["<b> </b>"], ["<b> </b>"],["<b> </b>"],["<b> </b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "sans", size: 12, color: "white"}
  },
  cells: {
    values: values2,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "sans", size: 11, color: ["black"]}
  }
    }]
    var dataTableDacInitialize = [{
      type: 'table',
      header: {
        values: [["<b> </b>"],["<b> </b>"], ["<b> </b>"],
                     ["<b> </b>"], ["<b> </b>"]],
        align: "center",
        line: {width: 1, color: 'black'},
        fill: {color: "grey"},
        font: {family: "sans", size: 12, color: "white"}
      },
      cells: {
        values: values,
        align: "center",
        line: {color: "black", width: 1},
        font: {family: "sans", size: 11, color: ["black"]}
      }
      }]
        var initial1 ={
            x: '',
            y: '',
        }
       //FOR CHANGING THE VIEWS
       $("#view").on("change", function(){
        if($("#view").val() == "Two Windows"){
      var initial2 = {
          xaxis: 'x2',
        yaxis: 'y2',
        };
        var initial3 = {
          xaxis: 'x2',
        yaxis: 'y2',
        };
Plotly.newPlot('myPlot', [initial1,initial2,initial3], layout2_2, config);
      }
      if($("#view").val() == "Single Window"){
        Plotly.newPlot("myPlot",dataInit, layout2,config );
          }
  });
 
Plotly.newPlot("myPlot",dataInit, layout2,config );
Plotly.newPlot("myPlot2", tableInitialize, layoutTable,{displayModeBar: false, responsive: true,});
Plotly.newPlot("myPlot4", dataTableDacInitialize, layoutTable2,{displayModeBar: false, responsive: true,});

console.timeEnd("INITIALIZATION!")

//#endregion    
//----------------------------------------FOR SINUSOID-------------------------------

function executeDifferentialPCM(){
  $(".loader").css("display", "flex" );
  $(document).ready(function(){
      $(executeDifferentialPCMSimulation()).ready(function(){
              $(".loader").fadeOut();
      });
  });
}

let functionCounter = 0;
let soundArr = [];
let soundInput = [];
let soundArrDAC = [];
function executeDifferentialPCMSimulation(){
  console.time("SIMULATION");

  window.onerror = function(message, url, line) {
    alert("INVALID EQUATION!");
    $(".loader").fadeOut();
  };

  let samplingStart = $("#timeStart").val()
  let numCycle = $("#numCycle").val()
  let samplingFrequency = $("#samplingFrequency").val()
  let Vlsb = $("#Vlsb").val()
  Vlsb = Number(Vlsb);
  let Vlsbp = $("#Vlsbp").val()
  Vlsbp = Number(Vlsbp);
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
  //SAMPLING VALUES / TRACE 0
  let samplingPeriod = 1/samplingFrequency; //formula
  
  //smoothness
  let F = (1/samplingFrequency)*800000; //formula
  
  
  //DAC
  let samplingPeriodDAC = 1/fsp; //formula
  let samplingStartFormulaDAC = samplingStart*samplingPeriodDAC; //formula
  
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
      
//----------------------------GENERATE VALUES------------------------------
    
    let samplingStartFormula2 = samplingStart*samplingPeriod; //formula
let xValues = [];
let yValues = [];
let nValForTable = [];
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
let xValuesStair = [];

for(let y = samplingStartFormula2; y<=tdur; y+=samplingPeriod){  
    let xValueRoundStair = Math.round(10000000*y)/10000000
    xValuesStair.push(xValueRoundStair);
}
//-------------------------------define the DATA--------------------------
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
//------------------------------FOR SINUSOID----------------------------
    
//generate the values
let xValues2 = [];
let yValues2 = [];
let compressionPlot = [];

for(let t = 0; t<=tdur ; t+=samplingPeriod/F){
  xValues2.push(t);
  yValues2.push(eval(exp));
}

//define the DATA
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
xaxis: 'x2',
yaxis: 'y2',
mode:"lines",
line:{
    color: $("#sinusoidValColor").val(),
    width: $("#sinusoidThicc").val(),
},
text : yValues,
hoverinfo:"none",
name: "Input Signal",
}





//----------------------------------------FOR STAIRCASE-------------------------------

//transmitter
let differenceVal = []; //Vd
let encodedVal = [0]; //VT for plot
let encodedShowVal = []; //VT for table
let quantizedVal = []; //Vq
let bitStream = []; //Bits
let finalQuantized = 0; 
for(let i = 0; i<yValues.length; i++){
    let updateVal = 0;
    updateVal = yValues[i] - encodedVal[i]; 
    differenceVal.push(Math.round(100000*updateVal)/100000);  
//----------------- QUANTIZATION ----------------------------
    let quantization = Math.round(updateVal/Vlsb);
    //FOR OVERLOW
    if(quantization>7){
        finalQuantized = 7 * Vlsb;
		quantizedVal.push(Math.round(100000*finalQuantized)/100000);
		bitStream.push("1111");
    }
    else if(quantization <= 7 && quantization >= -7){
		let signBit = "";
		finalQuantized = quantization * Vlsb;
		quantizedVal.push(Math.round(100000*finalQuantized)/100000);
		if(Math.sign(quantization) == 1 || Math.sign(quantization) == 0){
			signBit = "1";
		}
		else{signBit = "0";}
		let magBits = Math.abs(quantization).toString(2).padStart(3,"0");
		let fourBits = signBit + magBits;
		bitStream.push(fourBits);
	}
    else if(quantization < -7){
		finalQuantized = -7 * Vlsb;
		quantizedVal.push(Math.round(100000*finalQuantized)/100000);
		bitStream.push("0111");
	}
    let finalEncodedVal = encodedVal[i] + finalQuantized;
	encodedVal.push(Math.round(100000*finalEncodedVal)/100000);
	encodedShowVal.push(Math.round(100000*finalEncodedVal)/100000);
}


//-----------------------------------------FOR TABLE 1:------------------
var values = [
  nValForTable,
  xValues,
  yValues,
  differenceVal,
  quantizedVal,
  bitStream,
  encodedShowVal,
]

var dataTable = [{
  type: 'table',
  columnorder: [0,1,2,3,4,5,6],
  columnwidth: [200,400,400,400,400,200,400],
  header: {
    values: [["<b>n</b>"],["<b>Sampling Time</b>"], ["<b>Sampling Values</b>"],
    ["<b>Difference</b>"],["<b>Quantized Values</b>"],["<b>Bits</b>"], ["<b>Encoded Values</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "sans", size: 15, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    fill: {color: "white"},
    line: {color: "black", width: 1},
    font: {family: "sans", size: 14, color: ["black"]}
  }
  }]

  let layoutTable = {
    title: "<b>ADC VALUES</b>",
    plot_bgcolor:"white",
   paper_bgcolor:"#8EB0C6",
   font: {family: "sans", size: 20, color: ["black"],
   },
   margin: {
l: 50,
r: 50,
b: 50,
t: 50,
pad: 4
},
}


  Plotly.newPlot('myPlot2', dataTable,layoutTable,{displayModeBar: false}, config);     
//------------------------------------- DPCM RECEIVER -----------------------------
//RECEIVER
let v = 0
//generate the values
let xValuesDac = [];
let yValuesDac = [];
let xValuesStairDac = [];
for(let t = samplingStartFormulaDAC;t<=(nValForTable.length+samplingStart)*samplingPeriodDAC && v<nValForTable.length; t+=samplingPeriodDAC){  
    let add = i+1;
    xValueRoundDac = Math.round(10000000*t)/10000000
    yValueRoundDac = Math.round(10000000*(eval(exp)))/10000000;
    xValuesDac.push(xValueRoundDac);
    yValuesDac.push(eval(yValueRoundDac));
    v++
} 
let y = 0
for( y = samplingStartFormulaDAC; y<=(nValForTable.length+samplingStart)*samplingPeriodDAC; y+=samplingPeriodDAC){  
    let xValueRoundStairDac = Math.round(10000000*y)/10000000
    xValuesStairDac.push(xValueRoundStairDac);
}
let xValueRoundStairDac = Math.round(10000000*y)/10000000
    xValuesStairDac.push(xValueRoundStairDac);

// ------------------------------------ FOR DAC STAIRCASE ----------------------------

// let fourBitCode = [];
let decEquivalent = [];
let encodedValDAC = [0];//0,
let encodedShowValDAC = [];//0, 

for(let i = 0; i<bitStream.length; i++){
    let magbitsDAC = bitStream[i].substring(1,4);
	let signBitDAC = bitStream[i].charAt(0);
    let decVal = parseInt(magbitsDAC, 2);
	// let encodedFinalVal = (encodedValDAC[i] + parseInt(magbitsDAC, 2)) * Vlsbp;
	if(signBitDAC == "1"){
        let decVal2 = Math.abs(decVal);
        let encodedFinalVal = encodedValDAC[i] + (decVal2 * Vlsbp);
        decEquivalent.push(Math.abs(decVal));
	encodedShowValDAC.push(Math.round(100000*encodedFinalVal)/100000);
	encodedValDAC.push(Math.round(100000*encodedFinalVal)/100000);
	}
	else{
        let decVal2 = -Math.abs(decVal);
        let encodedFinalVal = encodedValDAC[i] + (decVal2 * Vlsbp);
        decEquivalent.push(-Math.abs(decVal));
	encodedShowValDAC.push(Math.round(100000*encodedFinalVal)/100000);
	encodedValDAC.push(Math.round(100000*encodedFinalVal)/100000);
	}
}
//SOUND ARRAY 1
  //FOR BITS

  let bitStreamSound = [];  
if(samplingFrequency>=3000){
  let seconds = 5;
  let soundArrCounter = 0;
  let soundArrCounter2 = 0;
  let F = $("#samplingFrequency").val()
  let F2 = 48000;  
    //for input signal
    for(let t = 0; t<1*seconds; t+=(1/F2)){  
      yValueRound = Math.round(10000000*(eval(exp)))/10000000;
      soundInput[soundArrCounter2] = (eval(yValueRound));
      soundArrCounter2++
  } 

  //for sampling
  for(let t = 0; t<1*seconds; t+=(1/F)){  
      yValueRound = Math.round(10000000*(eval(exp)))/10000000;
      soundArr[soundArrCounter] = (eval(yValueRound));
      soundArrCounter++
  }   

//transmitter
let differenceValSound = []; //Vd
let encodedValSound = [0]; //VT for plot
let encodedShowValSound = []; //VT for table
let quantizedValSound = []; //Vq
let finalQuantizedSound = 0; 
for(let i = 0; i<soundArr.length; i++){
    let updateValSound = 0;
    updateValSound = soundArr[i] - encodedValSound[i]; 
    differenceValSound.push(Math.round(100000*updateValSound)/100000);  
//----------------- QUANTIZATION ----------------------------
    let quantization = Math.round(updateValSound/Vlsb);
    //FOR OVERLOW
    if(quantization>7){
        finalQuantizedSound = 7 * Vlsb;
		quantizedValSound.push(Math.round(100000*finalQuantizedSound)/100000);
		bitStreamSound.push("1111");
    }
    else if(quantization <= 7 && quantization >= -7){
		let signBit = "";
		finalQuantizedSound = quantization * Vlsb;
		quantizedValSound.push(Math.round(100000*finalQuantizedSound)/100000);
		if(Math.sign(quantization) == 1 || Math.sign(quantization) == 0){
			signBit = "1";
		}
		else{signBit = "0";}
		let magBits = Math.abs(quantization).toString(2).padStart(3,"0");
		let fourBits = signBit + magBits;
		bitStreamSound.push(fourBits);
	}
    else if(quantization < -7){
		finalQuantizedSound = -7 * Vlsb;
		quantizedValSound.push(Math.round(100000*finalQuantizedSound)/100000);
		bitStreamSound.push("0111");
	}
    let finalEncodedVal = encodedValSound[i] + finalQuantizedSound;
	encodedValSound.push(Math.round(100000*finalEncodedVal)/100000);
	encodedShowValSound.push(Math.round(100000*finalEncodedVal)/100000);
}
}
else if(samplingFrequency<3000){
  // FOR ALERT
var alerted = false;
if (alerted === false){
alert("Fs should be greater than or equal to 3000 to playback");alerted = true;
for(let t = 0; t<soundArr.length; t++){  
 soundArr[t] = 0;
 soundArrDAC[t] = 0;
} 
for(let t = 0; t<soundInput.length; t++){  
 soundInput[t] = 0;
} 
}
}
//SOUND ARRAY 2
let encodedValDACSound = [0];//0,
for(let i = 0; i<bitStreamSound.length; i++){
    let magbitsDAC = bitStreamSound[i].substring(1,4);
    let signBitDAC = bitStreamSound[i].charAt(0);
    let decVal = parseInt(magbitsDAC, 2);

    if(signBitDAC == "1"){
        let decVal2 = Math.abs(decVal);
        let encodedFinalVal = encodedValDACSound[i] + (decVal2 * Vlsbp);
        encodedValDACSound.push(Math.round(100000*encodedFinalVal)/100000);
	soundArrDAC[i] = (Math.round(100000*encodedFinalVal)/100000);
	}
	else{
        let decVal2 = -Math.abs(decVal);
        let encodedFinalVal = encodedValDACSound[i] + (decVal2 * Vlsbp);
        encodedValDACSound.push(Math.round(100000*encodedFinalVal)/100000);
        soundArrDAC[i] =(Math.round(100000*encodedFinalVal)/100000);
	}
}
if(fsp<3000){
  // FOR ALERT
var alerted = false;
if (alerted === false){
alert("Fsp should be greater than or equal to 3000 to playback");alerted = true;
for(let t = 0; t<soundArr.length; t++){  
  soundArr[t] = 0;
  soundArrDAC[t] = 0;
} 
 for(let t = 0; t<soundInput.length; t++){  
  soundInput[t] = 0;
} 
}
}
//----------------------------- FOR TABLE 2 ---------------------------------------
let endPlot = 0;
if(xValuesDac[xValuesDac.length-1] >= tdur) endPlot = xValuesDac[xValuesDac.length-1];
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


var DACtrace3 = {
  x: xValuesStairDac,
  y: encodedValDAC,
  // y: showDataVal,
  mode: 'lines',
  name: 'Staircase Waveform',
  line: {shape: 'vh',
  color: $("#stairValColor").val(),
  width: $("#stair1Thicc").val()},
  type: 'scatter',
  hoverinfo:"none",
  legendgroup: 'group',
};
var DACtrace3_2 = {
  x: xValuesStairDac,
  y: encodedValDAC,
  xaxis: 'x2',
  yaxis: 'y2',
  mode: 'lines',
  name: 'Staircase Waveform',
  line: {shape: 'vh',
  color: $("#stairValColor").val(),
  width: $("#stair1Thicc").val()},
  type: 'scatter',
  hoverinfo:"none",
  legendgroup: 'group',
};
  var DACtrace4 = {
    x: xValuesDac,
    y: encodedShowValDAC,
    mode: 'markers',
    name: 'Encoded Values',
    line: {shape: 'hv',color: "red",},
    opacity: 0,
    type: 'scatter',
    showlegend: true,
  };
  var DACtrace4_2 = {
    x: xValuesDac,
    y: encodedShowValDAC,
    xaxis: 'x2',
    yaxis: 'y2',
    mode: 'markers',
    name: 'Encoded Values',
    line: {shape: 'hv',color: "red"},
    opacity: 0,
    type: 'scatter',
    showlegend: true,
  };

//FOR TABLE 2:
var valuesDac = [
  nValForTable,
  xValuesDac,
  bitStream,
  decEquivalent,
  encodedShowValDAC,
]

var dataTableDac = [{
  type: 'table',
  columnorder: [0,1,2,3,4],
  columnwidth: [200,400,200,200,400],
  header: {
    values: [["<b>n</b>"],["<b>Sampling Time</b>"],
                 ["<b>Received Bits</b>"], ["<b>Decimal Equivalent</b>"], ["<b>Encoded Values</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "sans", size: 15, color: "white"}
  },
  cells: {
    values: valuesDac,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "sans", size: 14, color: ["black"]}
  }
  }]
let layoutTableDac = {
        title: "<b>DAC VALUES</b>",
        plot_bgcolor:"white",
       paper_bgcolor:"#8EB0C6",
       font: {family: "sans", size: 20, color: ["black"],
       },
       margin: {
    l: 50,
    r: 50,
    b: 50,
    t: 50,
    pad: 4
  },
 }

  Plotly.newPlot('myPlot4', dataTableDac,layoutTableDac, {displayModeBar: false, responsive: true,});
  let dataFullCombi = [data,data2,DACtrace3,DACtrace4]
  Plotly.newPlot('myPlot', dataFullCombi , layout2, config);
  //------------------------------------ FOR TWO WINDOWS --------------------------------------
  
  let windowChangeVal1 = $("#firstWindowOpt").val();
  let windowChangeVal2 = $("#secondWindowOpt").val();
  if($("#view").val() == "Two Windows"){
windowChange(windowChangeVal1, windowChangeVal2);

function windowChange(windowChangeVal1, windowChangeVal2){

    let dataCombinedWindow = [];
    
    switch(windowChangeVal1){
    case "Input Signal":
        dataCombinedWindow.push(data, data2);
        break;
    case "Reconstructed Signal":
        dataCombinedWindow.push(DACtrace3,DACtrace4);
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
  case "Reconstructed Signal":
      dataCombinedWindow.push(DACtrace3_2,DACtrace4_2);
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
Plotly.newPlot('myPlot' , dataFullCombi, layout2,config);
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
              case "Reconstructed Signal":
                  dataCombinedWindow.push(DACtrace3,DACtrace4);
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
            case "Reconstructed Signal":
                dataCombinedWindow.push(DACtrace3_2,DACtrace4_2);
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
console.timeEnd("SIMULATION");
  functionCounter++
}

function playSoundPCM_1(){
  if(functionCounter>0){
                  //PLAY SOUND
                  let seconds = $("#duration").val();
                  let volume = $("#volume").val();
                  // FmaxBuffer = $("#samplingFrequency").val()
                  //smoothness
                  let FmaxBuffer = 48000;   
              
              PCMsound(soundInput, seconds,volume, FmaxBuffer)
          }
  }

function playSoundPCM_2(){
  if(functionCounter>0){
                  //PLAY SOUND
                  let seconds = $("#duration").val();
                  let volume = $("#volume").val();
                

                      PCMsound(soundArrDAC, seconds,volume, fsp)
                      }
  }

//#region // FOR TAB style PCM
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPanel=document.querySelectorAll(".tabContainer .tabPanel")

function showPanel (panelIndex,colorCode){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
   
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanel.forEach(function(node){
        node.style.display="none";
    });
    tabPanel[panelIndex].style.display="block";
    tabPanel[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#173F5F');
//#endregion