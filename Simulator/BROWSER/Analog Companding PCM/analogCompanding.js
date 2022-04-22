

// --------------------------------- START INITIALIZATION ---------------------------------------------------
//#region INITIALIZATION
//PLOTTING EQUATIONS
let config = {
    displaylogo: false,
    select2d: false,
    lasso2d: false,
    responsive: true,
    displayModeBar: true,
}
//Sampling Values / TRACE 0
let samplingFrequency = 0;
let samplingPeriod = 1/samplingFrequency; //formula

//smoothness
let F = (1/samplingFrequency)*800000; //formula

//QUANTIZATION
let Vlsb = 0;


//INPUT SIGNAL
let amplitude = 0;
let sinusoid =0;
let frequency = 0; 
let period = 1/frequency; //formula
let samplingStart = 0; 
let samplingStartFormula = samplingStart*samplingPeriod; //formula
let numCycle = 0;
let tdur = numCycle/frequency; //formula

//DAC PARAMS
let Vlsbp = 0;
let fsp = 0;
let samplingPeriodDAC = 1/fsp; //formula
let samplingStartFormulaDAC = samplingStart*samplingPeriodDAC; //formula

let exp = "amplitude*sinusoid(2*Math.PI*frequency*x);" //formula

let xValues = [];
let yValues = [];

let xdacDataPlot = [];
let xdacData = [];
let ydacDataPlot = [];
let ydacData = [];


let data = {
    x: xValues,
    y: yValues,
    name: "Sampling Values",
}

let xValues2 = [];
let yValues2 = [];

let data2 = {
    x: xValues2,
    y: yValues2,
    name: "Input Signal",
}

//define layout
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


let dataCombined= [];
 dataCombined= [data,data2];
//added
let data_2 = {
    x: xValues,
    y: yValues,
    name: "Sampling Values",
    xaxis: 'x2',
    yaxis: 'y2',
}


let data2_2 = {
    x: xValues2,
    y: yValues2,
    name: "Input Signal",
    xaxis: 'x2',
    yaxis: 'y2',
}

$("#view").on("change", function(){
if($("#view").val() == "Two Windows"){
     dataCombined= [data,data2,data_2,data2_2];
Plotly.newPlot("myPlot", dataCombined, layout2_2,config);

}  
else {
    dataCombined = [data,data2];
    Plotly.newPlot("myPlot", dataCombined, layout2,config);
}
});
//added
Plotly.newPlot("myPlot", dataCombined, layout2,config);

//PLOT DAC
let dacDataPlot = {
    x: xdacDataPlot,
    y: ydacDataPlot,
  };
let dacData = {
    x: xdacData,
    y: ydacData,
}


var values = [
    [0],[0],[0],[0],[0]
]
var values2 = [
    [0],[0],[0],[0],[0]
]
var dataTable = [{
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
    Plotly.newPlot('myPlot3', dataTable,layoutTable,{displayModeBar: false, responsive: true,});

    var dataTable2 = [{
        type: 'table',
        header: {
          values: [["<b> </b>"],["<b> </b>"],["<b> </b>"], ["<b> </b>"],],
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
    
    Plotly.newPlot('myPlot4', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
    
// --------------------------------- END INITIALIZATION ---------------------------------------------------
//#endregion

function executePCM(){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(executePCMSimulation()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}

let functionCounter = 0;
let soundArr = [];
let soundInput = [];
let soundArrDAC = [];

function executePCMSimulation(){
    //#region SAMPLING
    window.onerror = function(message, url, line) {
        alert("INVALID EQUATION!");
        $(".loader").fadeOut();
      };
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
let j = 0; 
for(let x = samplingStartFormulaDAC; j <nValForTable.length; x+=samplingPeriodDAC){    
    //for DAC
    xdacDataPlot.push(x+samplingPeriodDAC);
    xDacRound = Math.round(10000000*x)/10000000
    xdacData.push(xDacRound);

    j++;
}   
    

    
    //SINUSOID / TRACE 1
    // let inputExp = "amplitude*sinusoid(2*Math.PI*frequency*x);"
    
    //generate the values
    let xValues2 = [];
    let yValues2 = [];
    let compressionPlot = [];
    let compressionPlot_sampled = [];
    
    for(let t = 0; t<=tdur ; t+=samplingPeriod/F){
        xValues2.push(t);
        yValues2.push(eval(exp));
    }

// FOR ZERO muVal
let muVal = $("#muVal").val();
    if(muVal == "0"){
        for(let i = 0; i<yValues2.length ; i++){
        compressionPlot.push(yValues2[i]);
        }
        for(let i = 0; i<yValues.length ; i++){
        compressionPlot_sampled.push(yValues[i]);
        }
    }
                        else{
                        //plot values for the compressed wave
                        for(let i=0; i<yValues2.length;i++){
                            let muVal = $("#muVal").val()
                            let debug = muLawCompression(yValues2[i],muVal, vMaximum)
                            compressionPlot.push(debug);
                        }
                        //plot values for the sampled compressed wave
                        for(let i=0; i<yValues.length;i++){
                            let muVal = $("#muVal").val()
                            let debug = muLawCompression(yValues[i],muVal, vMaximum)
                            compressionPlot_sampled.push(debug);
                        }
                    }


                  
        //define the DATA
        let data = {
            x: xValues,
            y: compressionPlot_sampled,
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
            y: compressionPlot_sampled,
            mode:"markers+lines",
            xaxis: 'x2',
            yaxis: 'y2',
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
  
//DATA FOR ANALOG COMPRESSION
let dataCompressed = {
    x: xValues2,
    y: compressionPlot,
    mode:"lines",
    line:{
        color: $("#compressedValColor").val(),
        width: $("#compressedThicc").val(),
    },
    text : yValues,
    hoverinfo:"none",
    name: "Compressed Signal",
}
let dataCompressed_2 = {
    x: xValues2,
    y: compressionPlot,
    mode:"lines",
    xaxis: 'x2',
        yaxis: 'y2',
    line:{
        color: $("#compressedValColor").val(),
        width: $("#compressedThicc").val(),
    },
    text : yValues,
    hoverinfo:"none",
    name: "Compressed Signal",
}

    //---------------------------------------------- END SAMPLING-------------------------
//#endregion

//#region QUANTIZATION and ENCODING
    //------------------------------------ QUANTIZATION and ENCODING-------------------------

    //EXECUTE FUNCTIONS
let bitStream = '';
let rotateVal = '';

let compressionArr = [];

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
    //WITH ANALOG COMPANDING
    //COMPRESSION
    let add = i+1;
    if($("#muVal").val() === "0"){
        returnVal = quantization(Vlsb,yValues[i]);
        compressionArr.push(returnVal);
        samplingQuantized.push(returnVal);
        returnVal2 = encoding(returnVal,Vlsb);
        encodedArr.push((returnVal2));
        let dacVal = (digitalToAnalog(Vlsbp, returnVal2));
    dacQuantized.push(dacVal);
    expansionArr.push(dacVal);
    ydacData.push(dacVal);
    ydacDataPlot.push(dacVal);
    }
    else{
    let muVal = $("#muVal").val()
    let compressionVal = muLawCompression(yValues[i],muVal, vMaximum);
    compressionArr.push(compressionVal);
    returnVal = quantization(Vlsb,compressionVal);
    samplingQuantized.push(returnVal);
    returnVal2 = encoding(returnVal,Vlsb);
    encodedArr.push((returnVal2));
    //FOR DAC PLOTTING
    let dacVal = (digitalToAnalog(Vlsbp, returnVal2));
    dacQuantized.push(dacVal);
    let expandedVal = muLawExpansion(dacVal,$("#muVal").val(),vMaximum)
    expansionArr.push(expandedVal);
    ydacData.push(expandedVal);
    ydacDataPlot.push(expandedVal);
    }
}
    //SOUND ARRAY 1
if(samplingFrequency>=3000 && fsp >=3000){
    let seconds = 5;
    let soundArrCounter = 0;
    let soundArrCounter2 = 0;
    let F = $("#samplingFrequency").val()
    let F2 = 48000;  
    //for sampling
    for(let t = 0; t<1*seconds; t+=(1/F)){  
        yValueRound = Math.round(10000000*(eval(exp)))/10000000;
        soundArr[soundArrCounter] = (eval(yValueRound));
        soundArrCounter++
    } 
    //for input signal
    for(let t = 0; t<1*seconds; t+=(1/F2)){  
        yValueRound = Math.round(10000000*(eval(exp)))/10000000;
        soundInput[soundArrCounter2] = (eval(yValueRound));
        soundArrCounter2++
        
    } 
}
else{
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

           // SOUND ARRAY 2
           if(fsp>=3000){       
            let seconds = 5;
            let volume = $("#volume").val();
        for(let t = 0; t<soundArr.length; t++){  
    //COMPRESSION
    if($("#muVal").val()>0){
    let muVal = $("#muVal").val()
    let compressionValSound = muLawCompression(soundArr[t],muVal, vMaximum);
    returnValSound = quantization(Vlsb,compressionValSound);
    returnVal2Sound = encoding(returnValSound,Vlsb);

    //FOR DAC PLOTTING
    let dacValSound = (digitalToAnalog(Vlsbp, returnVal2Sound));
    soundArrDAC[t] = muLawExpansion(dacValSound,$("#muVal").val(),vMaximum)
    }
    else{
        returnValSound = quantization(Vlsb,soundArr[t]);
        returnVal2Sound = encoding(returnValSound,Vlsb);
        let dacValSound = (digitalToAnalog(Vlsbp, returnVal2Sound));
        soundArrDAC[t] = dacValSound;
    }
       
}
    }
    else{
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
//FOR ADC TABLE
let headerAdc = [];
    var values = [];
   
        headerAdc = [["<b>n</b>"],["<b>Sampling Time</b>"], ["<b>Sampling Values (Analog Compression)</b>"],["<b>ADC Quantized</b>"], ["<b>PCM Codes</b>"]]
        values = [
            nValForTable,
            xValues,
            compressionArr,
            samplingQuantized,
            encodedArr,
        ]
  
        var dataTable = [{
            type: 'table',
            columnorder: [0,1,2,3,4],
            columnwidth: [200,400,400,400,400],
            
            // rowwidth: [400],
         
            header: {
              values: headerAdc,
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
        Plotly.newPlot('myPlot3', dataTable,layoutTable,{displayModeBar: false, responsive: true,});



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

//FOR DAC TABLE
  let headerArr = [["<b>n</b>"],["<b>Sampling Time</b>"],["<b>PCM Codes</b>"], ["<b>DAC Quantized</b>"], ["<b>Reconstructed Values (Analog Expansion)</b>"],];
     let values2 = [
        nValForTable,
        xdacData,
        encodedArr,
        dacQuantized,
        ydacData
    ]
    
var dataTable2 = [{
    type: 'table',
    columnorder: [0,1,2,3,4,5],
    columnwidth: [200,400,400,400,400,400],
    
    header: {
      values: headerArr,
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "sans", size: 15, color: "white"}
    },
    cells: {
      values: values2,
      align: "center",
      line: {color: "black", width: 1},
      font: {family: "sans", size: 14, color: ["black"]}
    }
    }]
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
//PLOTS
Plotly.newPlot('myPlot4', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
dataCombined= [data,data2,dataCompressed,dacData,dacDataPlot];
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
            dataCombinedWindow.push(data, data2, dataCompressed);
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
        case "Compressed Signal":
            dataCombinedWindow.push(dataCompressed);
            break;
    }
    switch(windowChangeVal2){
        case "Input Signal":
            dataCombinedWindow.push(data_2, data2_2, dataCompressed_2);
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
        case "Compressed Signal":
            dataCombinedWindow.push(dataCompressed_2);
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
            dataCombinedWindow.push(data, data2, dataCompressed);
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
        case "Compressed Signal":
            dataCombinedWindow.push(dataCompressed);
            break;
    }
            switch(windowChangeVal2){
                case "Input Signal":
                    dataCombinedWindow.push(data_2, data2_2, dataCompressed_2);
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
                case "Compressed Signal":
                    dataCombinedWindow.push(dataCompressed_2);
                    break;
            }
    Plotly.newPlot("myPlot", dataCombinedWindow, layout2_2, config);
    dataCombinedWindow = [];
}})
functionCounter++;
}
//#endregion DAC 

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











//#region 
// FOR TAB style PCM
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