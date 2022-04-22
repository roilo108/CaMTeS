  
//#region  --------------------- INITIALIZATION -----------------------
console.time("INITIALIZATION!")
let config = {
  displaylogo: false,
  select2d: false,
  lasso2d: false,
  responsive: true,
  displayModeBar: true,
}
let layoutInit = {
  xaxis: {title: "X-AXIS"},
  yaxis: {title: "Y-AXIS"},
}
let dataInit = [{
  x:[0],
  y:[0],
}]
var values = [
  [0],[0],[0],[0],[0]
]
var values2 = [
  [0],[0],[0],[0],[0],[0]
]
let fsp = 0;
// ------------------------------------------ ADD -----------------------------
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

function executeAdaptiveDeltaPCM(){
  $(".loader").css("display", "flex" );
  $(document).ready(function(){
      $(executeAdaptiveDeltaPCMSimulation()).ready(function(){
              $(".loader").fadeOut();
      });
  });
}


let functionCounter = 0;
let soundArr = [];
let soundInput = [];
let soundArrDAC = [];
function executeAdaptiveDeltaPCMSimulation(){

  let config = {
    displaylogo: false,
    select2d: false,
    lasso2d: false,
    responsive: true,
    displayModeBar: true,
  }

  window.onerror = function(message, url, line) {
    alert("INVALID EQUATION!");
    $(".loader").fadeOut();
  };


//----------------------- USER DEFINED VALUES ------------------------
let samplingStart = $("#timeStart").val()
let numCycle = $("#numCycle").val()
let samplingFrequency = $("#samplingFrequency").val()
let Vlsb = $("#Vlsb").val()
Vlsb = Number(Vlsb);
let Vlsbp = $("#Vlsbp").val()
Vlsbp = Number(Vlsbp);
 fsp = $("#Fsp").val()
let vMaximum = 127*Vlsb;
    multiplierVal = $("#Multiplier").val()
    multiplierVal = Number(multiplierVal);
    multiplierValDAC = $("#MultiplierDAC").val()
    multiplierValDAC = Number(multiplierValDAC);
//----------------------------INPUT SIGNAL------------------------------
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

//define layout


//----------------------------------------FOR STAIRCASE-------------------------------

//transmitter
let roundUpdateVal = 0;

let updateVal = 0;
let encodedVal = [0];
let showDataVal = [];
let VlsbUpdateVal = Vlsb;
let stepSize = [];

let bitStream = [];
let updateBitStream = '';



// let testValues = [0, ]
for(let i = 0; i<yValues.length; i++){

if(yValues[i]>=encodedVal[i]){
  updateBitStream = updateBitStream + "1";
  //to get the last 2 values of the array
let q = updateBitStream.length;
let w = updateBitStream.length-2;
let e = updateBitStream.length-3;

    if(updateBitStream.substring(q,e) == "111"){
        VlsbUpdateVal = VlsbUpdateVal * multiplierVal;
    }
    else if(updateBitStream.substring(q,w) == "01"){
      VlsbUpdateVal = Vlsb;
    }
    stepSize.push(VlsbUpdateVal);
    bitStream.push("1");
    updateVal = updateVal + VlsbUpdateVal;
    roundUpdateVal = Math.round(1000000*updateVal)/1000000;
    encodedVal.push(roundUpdateVal);
    showDataVal.push(roundUpdateVal);
}
//---------------------------------------------
else{
  updateBitStream = updateBitStream + "0";

  //to get the last 2 values of the array
let q = updateBitStream.length;
let w = updateBitStream.length-2;
let e = updateBitStream.length-3;

    if(updateBitStream.substring(q,e) == "000"){
        VlsbUpdateVal = VlsbUpdateVal * multiplierVal;
    }
    else if(updateBitStream.substring(q,w) == "10"){
      VlsbUpdateVal = Vlsb;
    }
    stepSize.push(VlsbUpdateVal);
    bitStream.push("0");
    updateVal = updateVal - VlsbUpdateVal;
    roundUpdateVal = Math.round(1000000*updateVal)/1000000;
    encodedVal.push(roundUpdateVal);
    showDataVal.push(roundUpdateVal);
}
}

//-----------------------------------------FOR TABLE 1:------------------
for(let i = 0; i<stepSize.length; i++){
  stepSize[i] = Math.round((stepSize[i])*10000)/10000;
} 
var values = [
  nValForTable,
  xValues,
  yValues,
  bitStream,
  stepSize,
  showDataVal,
]

var dataTable = [{
    type: 'table',
    columnorder: [0,1,2,3,4,5],
    columnwidth: [200,400,400,200,400,400],
  header: {
    values: [["<b>n</b>"],["<b>Sampling Time</b>"], ["<b>Sampling Values</b>"],
     ["<b>Bit</b>"], ["<b>Step Size</b>"], ["<b>Encoded Values</b>"]],
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
  Plotly.newPlot('myPlot2', dataTable,layoutTable,{displayModeBar: false, responsive: true,});     
//------------------------------------- DPCM RECEIVER -----------------------------
//RECEIVER

//generate the values
let xValuesDac = [];
let yValuesDac = [];
let xValuesStairDac = [];
let v = 0;
let x = 0;

for( t = samplingStartFormulaDAC; t<=(nValForTable.length+samplingStart)*samplingPeriodDAC && v< nValForTable.length; t+=samplingPeriodDAC){  
    let add = i+1;
    xValueRoundDac = Math.round(10000000*t)/10000000
    yValueRoundDac = Math.round(10000000*(eval(exp)))/10000000;
    xValuesDac.push(xValueRoundDac);
    yValuesDac.push(eval(yValueRoundDac));
    let xValueRoundStairDac = Math.round(10000000*t)/10000000
    xValuesStairDac.push(xValueRoundStairDac);
    v++;
} 
let xValueRoundStairDac = Math.round(10000000*t)/10000000
    xValuesStairDac.push(xValueRoundStairDac);
// ------------------------------------ FOR DAC STAIRCASE ----------------------------

let roundUpdateValDAC = 0;
let updateValDAC = 0;
let encodedValDAC = [0];
let showDataValDAC = [];
let VlsbUpdateValDAC = Vlsbp;

let updateBitStreamDAC = '';
let stepSizeDAC = [];
nValForTable_2 = [];
let bitStream_2 = []
let p = 0;
for(let i = 0; i<yValuesDac.length ; i++){
  bitStream_2[i] = bitStream[i]
  nValForTable_2[i] = i+1;
if(bitStream[i]== "1"){
  updateBitStreamDAC = updateBitStreamDAC + "1";
  //to get the last 2 values of the array
let q = updateBitStreamDAC.length;
let w = updateBitStreamDAC.length-2;
let e = updateBitStreamDAC.length-3;
    if(updateBitStreamDAC.substring(q,e) == "111"){
      VlsbUpdateValDAC = VlsbUpdateValDAC * multiplierValDAC;
    }
    else if(updateBitStreamDAC.substring(q,w) == "01"){
      VlsbUpdateValDAC = Vlsbp;
    }
    stepSizeDAC.push(VlsbUpdateValDAC);
    updateValDAC = updateValDAC + VlsbUpdateValDAC;
    roundUpdateValDAC = Math.round(1000000*updateValDAC)/1000000;
    encodedValDAC.push(roundUpdateValDAC);
    showDataValDAC.push(roundUpdateValDAC);
}
//---------------------------------------------
else{
  updateBitStreamDAC = updateBitStreamDAC + "0";
  //to get the last 2 values of the array
let q = updateBitStreamDAC.length;
let w = updateBitStreamDAC.length-2;
let e = updateBitStreamDAC.length-3;

    if(updateBitStreamDAC.substring(q,e) == "000"){
      VlsbUpdateValDAC = VlsbUpdateValDAC * multiplierValDAC;
    }
    else if(updateBitStreamDAC.substring(q,w) == "10"){
      VlsbUpdateValDAC = Vlsbp;
    }
    stepSizeDAC.push(VlsbUpdateValDAC);
    updateValDAC = updateValDAC - VlsbUpdateValDAC;
    roundUpdateValDAC = Math.round(1000000*updateValDAC)/1000000;
    encodedValDAC.push(roundUpdateValDAC);
    showDataValDAC.push(roundUpdateValDAC);
}
p++;
}
//SOUND ARRAY 1
if(samplingFrequency>=3000 && fsp>=3000){
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

soundCounter = 0;
for( t = 0; t<=1*seconds; t+=(1/F)){  
  yValueRoundDac = Math.round(10000000*(eval(exp)))/10000000;
  soundArr[soundCounter] = (eval(yValueRoundDac));
  soundCounter++;
} 

//----------------------- FOR SAMPLING TRANSMITTER
let encodedValSound = [0]
let updateBitStreamSound = '';
let VlsbUpdateValSound = Vlsb;
let bitStreamSound = [];
let updateValSound = 0; 
for(let i = 0; i<soundArr.length; i++){
if(soundArr[i]>=encodedValSound[i]){
  updateBitStreamSound = updateBitStreamSound + "1";
  //to get the last 2 values of the array
let q = updateBitStreamSound.length;
let w = updateBitStreamSound.length-2;
let e = updateBitStreamSound.length-3;

    if(updateBitStreamSound.substring(q,e) == "111"){
      VlsbUpdateValSound = VlsbUpdateValSound * multiplierVal;
    }
    else if(updateBitStream.substring(q,w) == "01"){
      VlsbUpdateValSound = Vlsb;
    }
    bitStreamSound.push("1");
    updateValSound = updateValSound + VlsbUpdateValSound;
    roundUpdateValSound = Math.round(1000000*updateValSound)/1000000;
    encodedValSound[i+1] = (roundUpdateValSound);
    soundArrDAC[i] = (roundUpdateValSound);
}
//---------------------------------------------
else{
  updateBitStreamSound = updateBitStreamSound + "0";

  //to get the last 2 values of the array
let q = updateBitStreamSound.length;
let w = updateBitStreamSound.length-2;
let e = updateBitStreamSound.length-3;

    if(updateBitStreamSound.substring(q,e) == "000"){
      VlsbUpdateValSound = VlsbUpdateValSound * multiplierVal;
    }
    else if(updateBitStream.substring(q,w) == "10"){
      VlsbUpdateValSound = Vlsb;
    }
    bitStreamSound.push("0");
    updateValSound = updateValSound - VlsbUpdateValSound;
    roundUpdateValSound = Math.round(1000000*updateValSound)/1000000;
    encodedValSound[i+1] = (roundUpdateValSound);

    soundArrDAC[i] = (roundUpdateValSound);

}
}}
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
if(xValuesStairDac[xValuesStairDac.length-1] >= tdur) endPlot = xValuesStairDac[xValuesStairDac.length-1];
else endPlot = tdur;
 
console.log(endPlot)
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
  y: showDataValDAC,
  mode: 'markers',
  name: 'Encoded Values',
  line: {shape: 'hv',color: "red",},
  opacity: 0,
  type: 'scatter',
  showlegend: true,
};
var DACtrace4_2 = {
  x: xValuesDac,
  y: showDataValDAC,
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
for(let i = 0; i<  stepSizeDAC.length; i++){
  stepSizeDAC[i] = Math.round((stepSizeDAC[i])*10000)/10000;
} 
var valuesDac = [
  nValForTable_2,
  xValuesDac,
  bitStream_2,
  stepSizeDAC,
  showDataValDAC,
]

var dataTableDac = [{
  type: 'table',
  columnorder: [0,1,2,3,4],
  columnwidth: [200,400,200,400,400],
  
  header: {
    values: [["<b>n</b>"],["<b>Sampling Time</b>"],
                 ["<b>Received Bits</b>"], ["<b>Step Size</b>"], ["<b>Encoded Values</b>"]],
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

  let windowChangeVal1 = $("#firstWindowOpt").val();
  let windowChangeVal2 = $("#secondWindowOpt").val();
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
  Plotly.newPlot('myPlot',dataFullCombi, layout2, config);

//------------------------------------ FOR TWO WINDOWS --------------------------------------
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
  console.log("inside")
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
                  // fsp = $("#Fsp").val()
                

                      PCMsound(soundArrDAC, seconds,volume, fsp)
                      }
  }


//#region // for TAB style character coding

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