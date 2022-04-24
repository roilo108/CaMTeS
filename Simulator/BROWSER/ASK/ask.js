
let config = {
    displaylogo: false,
    select2d: false,
    lasso2d: false,

    responsive: true,
    // scrollZoom: true,
    displayModeBar: true,
}
let layout2 = {
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    plot_bgcolor:$("#bgColor").val(),
    paper_bgcolor:"#c2acb2",
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
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    grid: {rows: 2, 
        columns: 1,
         pattern: 'independent'
        },
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",

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

    layoutFunc = {
        title: {text: "<b>Frequency Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",
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
     layoutFunc_2 = {
        title: {text: "<b>Frequency Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        grid: {rows: 2, 
            columns: 1,
             pattern: 'independent'
            },
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#c2acb2",
    
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
        layoutDemod = {
            title: {text: "<b>Demodulated Signal</b>",
            font: {
                family: 'sans',
                size: 24
              },},
            xaxis: {range: [0],title: "X-AXIS"},
            yaxis: {title: "Y-AXIS"},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#c2acb2",
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

        layoutModulating = {
            title: {text: "<b>Modulating Signal</b>",
            font: {
                family: 'sans',
                size: 24
              },},
            xaxis: {range: [0],title: "X-AXIS"},
            yaxis: {title: "Y-AXIS"},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#c2acb2",
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
        layoutCarrier = {
            title: {text: "<b>Carrier Signal</b>",
            font: {
                family: 'sans',
                size: 24
              },},
            xaxis: {range: [0],title: "X-AXIS"},
            yaxis: {title: "Y-AXIS"},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#c2acb2",
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
        layoutRectifier = {
            title: {text: "<b>Rectified Signal</b>",
            font: {
                family: 'sans',
                size: 24
              },},
            xaxis: {range: [0],title: "X-AXIS"},
            yaxis: {title: "Y-AXIS"},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#c2acb2",
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
// USER INPUT INIT.
//#region 
//BIT:
let bits = $("#binaryInput").val();
//ASK modulator parameters:
let bitRate = $("#bitrateInput").val();
let tb = 1/bitRate ; //FORMULA
let fcarrier = $("#carrierFrequency").val();
fcarrier = Number(fcarrier);

let fmin = $("#fmin").val();
fmin = Number(fmin);
let fmax = $("#fmax").val();

let amplitudeMark = $("#amplitudeMark").val(); //amplitude for logic 1
let amplitudeSpace = $("#amplitudeSpace").val(); //amplitude for logic 0
let Start = 0; 
let updateStartFormula = Start * tb; //formula
let updateTb = tb; //formula
let tdur = tb * bits.length;
//Bandwidth of the channel:
let bandwidth = $("#bandwidth").val(); //cut off frequency


let dataInit = {
    x: 0,
    y: 0,
}

Plotly.newPlot("myPlotModulating", [dataInit], layoutModulating, config);
Plotly.newPlot("myPlotCarrier", [dataInit], layoutCarrier, config);
Plotly.newPlot("myPlotTimeDom", [dataInit], layout2, config);

let dataInit_2 = {
    x: 0,
    y: 0,
    xaxis: 'x2',
    yaxis: 'y2',
}
Plotly.newPlot("myPlotFreqDom", [dataInit], layoutFunc, config);
Plotly.newPlot("myPlotRectified", [dataInit], layoutRectifier, config);
Plotly.newPlot("myPlotFilteredEnvelope", [dataInit], layoutDemod, config);

$(".windowView").on("change", function windowView(){
    if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotTimeDom",[dataInit,dataInit_2], layout2_2, config);
    else Plotly.newPlot("myPlotTimeDom",[dataInit], layout2, config);
  })

  $(".windowView_2").on("change", function windowView(){
    if($("#view2").val()=="Two Windows") Plotly.newPlot("myPlotFreqDom",[dataInit,dataInit_2], layoutFunc_2, config);
    else Plotly.newPlot("myPlotFreqDom",[dataInit], layoutFunc, config);
  })



//CARRIER
const carrier = "Math.sin(2*Math.PI*fcarrier*x)";
const fs2 = 200000;
const fp2 = 1/fs2;
//#endregion


// FOR ONCLICK
function simulate(){
    
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(simulateSimulation()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}

function simulateSimulation(){
    console.time("SIMULATE")
    
    //USERDEFINED
    //#region 
    //BIT:
 bits = $("#binaryInput").val();
//ASK modulator parameters:
 bitRate = $("#bitrateInput").val();
 tb = 1/bitRate ; //FORMULA
 fcarrier = $("#carrierFrequency").val();
fcarrier = Number(fcarrier);

 fmin = $("#fmin").val();
fmin = Number(fmin);
 fmax = $("#fmax").val();

 amplitudeMark = $("#amplitudeMark").val(); //amplitude for logic 1
 amplitudeSpace = $("#amplitudeSpace").val(); //amplitude for logic 0
 Start = 0; 
 updateStartFormula = Start * tb; //formula
 updateTb = tb; //formula
 tdur = tb * bits.length;
//Bandwidth of the channel:
 bandwidth = $("#bandwidth").val(); //cut off frequency
 //#endregion

// FOR ALERTS
if(bits.length >= 150 ){
  if (confirm('There are too many inputted bits. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }
 
  if(bitRate<=75){
  if (confirm('The bitrate is too low. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }
 
  if(fmax>=50000){
  if (confirm('The fmax is too high. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }

  if(fmin<=-50000){
  if (confirm('The fmin is too low. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }

 //LAYOUT FOR PLOTS
var alerted_2 = false;
if (Boolean(bitRate) === false){
    if (alerted_2 === false){
        alert("Enter a valid bitrate");
        alerted_2 = true;
        return;
    }
}
var alerted_3 = false;
    if (bitRate.charAt(0) === "0"){
        if (alerted_3 === false){
            alert("Enter a valid bitrate");
            alerted_3 = true;
            return;
        }
    }
  layout2 = {
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0,tb],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    plot_bgcolor:$("#bgColor").val(),
    paper_bgcolor:"#c2acb2",
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

 layout2_2 = {
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0,tb],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    grid: {rows: 2, 
        columns: 1,
         pattern: 'independent'
        },
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",

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
    // FOR ALERT
var alerted = false;
for(let i= 0; i<bits.length; i++){
    if (bits.charAt(i) != "1" && bits.charAt(i) != "0"){
        if (alerted === false){
            alert("Input only 1s and 0s");alerted = true;
            return;
        }
    }
}
DTFT(bits,bitRate,fmin,fmax,amplitudeMark,amplitudeSpace,bandwidth,fcarrier);

timeDom(bits,bitRate,fcarrier)
function timeDom(bits,bitRate,fcarrier){
    //FOR TRANSMITTER
    //MODULATOR ARRAYS:
    let xAxisModulator = [];
    let yAxisModulator = [];
    for(let i  = 0; i<xn.length ; i++){
    xAxisModulator[i] = t[i]
    // yAxisModulator[i] = xn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
    yAxisModulator[i] = xn[i] 
}
//GENERATE THE VALUES FOR PLOTTING
let data = {
    x: xAxisModulator,
    y: yAxisModulator,
    mode: "lines",
    name: 'Transmitted Signal',
    line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},
}
let data_2 = {
    x: xAxisModulator,
    y: yAxisModulator,
    mode: "lines",
    name: 'Transmitted Signal',
    xaxis: 'x2',
    yaxis: 'y2',
    line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},
}

    //FOR RECEIVER
    //MODULATOR ARRAYS:
    let xAxisDeModulator = [];
    let yAxisDeModulator = [];
    for(let i  = 0; i<xn.length ; i++){
        xAxisDeModulator[i] = t[i]
        // yAxisDeModulator[i] = yn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
        yAxisDeModulator[i] = yn[i] 
        }
//GENERATE THE VALUES FOR PLOTTING
let data2 = {
    x: xAxisDeModulator,
    y: yAxisDeModulator,
    mode: "lines",
    name: 'Received Signal',
    line: {
        color:$("#RXsig").val(),
        width: $("#RXsigThicc").val(),
},
}
let data2_2 = {
    x: xAxisDeModulator,
    y: yAxisDeModulator,
    mode: "lines",
    name: 'Received Signal',
    xaxis: 'x2',
    yaxis: 'y2',
    line: {
        color:$("#RXsig").val(),
        width: $("#RXsigThicc").val(),
},
}
let dataCombined = [data,data2]

if($("#bandLimiting").val() == "Disable") {
    $("#view").val("Single Window");
    Plotly.newPlot("myPlotTimeDom", [data], layout2, config);
}
else {  
    if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotTimeDom",[data,data2_2], layout2_2, config);
    else Plotly.newPlot("myPlotTimeDom",[data,data2], layout2, config);
}
$(".windowView").on("change", function windowView(){
    if(functionCounter>0){
    if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotTimeDom",[data,data2_2], layout2_2, config);
    else Plotly.newPlot("myPlotTimeDom",[data,data2], layout2, config);
}
  })
}

ASKdemodulatorEnvelope(bits,bitRate,fcarrier)
function ASKdemodulatorEnvelope(bits,bitRate,fcarrier){
    layoutDemod = {
        title: {text: "<b>Demodulated Signal</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,tb],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",
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
    layoutRectifier = {
        title: {text: "<b>Rectified Signal</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,tb],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",
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
    let rectifierOutput = [];
    if($("#bandLimiting").val() == "Disable"){
        for(let i = 0; i<xn.length ; i++){
            rectifierOutput[i] = Math.abs(xn[i]);
        }
        for(let i = 0; i<63; i++){
            xn.push(0);
        }
        for(let i = 0; i<xn.length ; i++){
            xn[i] = Math.abs(xn[i]);
        }
    }
    else{
        for(let i = 0; i<yn.length ; i++){
            rectifierOutput[i] = Math.abs(yn[i]);
        }
        for(let i = 0; i<63; i++){
            yn.push(0);
        }
        for(let i = 0; i<yn.length ; i++){
            yn[i] = Math.abs(yn[i]);
        }
    }
    
    //plot rectified signal
    let rectifiedSignal = [{
        x: t,
        y: rectifierOutput,
        name: 'Demodulated Signal',
        line: {
            color:$("#RectifSig").val(),
            width: $("#RectifSigThicc").val(),
    },
    }]
    Plotly.newPlot("myPlotRectified",rectifiedSignal, layoutRectifier, config);

  // FIR FILTERING
//  Instance of a filter coefficient calculator
var firCalculator = new Fili.FirCoeffs();

// calculate filter coefficients
var firFilterCoeffs = firCalculator.lowpass({
    order: 63, // filter order
    Fs: 96000, // sampling frequency
    Fc: bitRate*2 // cutoff frequency
    // for bandpass and bandstop F1 and F2 must be provided instead of Fc
  });


// create a filter instance from the calculated coeffs
var firFilter = new Fili.FirFilter(firFilterCoeffs);
// create a filter instance from the calculated coeffs

// var firFilter = new Fili.FirFilter(iirFilterCoeffs);

//RUN FILTER
let filteredValTime = 0;
//condition
if($("#bandLimiting").val() == "Disable") filteredValTime = firFilter.multiStep(xn);
else filteredValTime = firFilter.multiStep(yn);

let filteredTime = [{
    x: tdemod,
    y: filteredValTime,
    name: 'Demodulated Signal',
    line: {
        color:$("#demSig").val(),
        width: $("#demSigThicc").val(),
},
}]
Plotly.newPlot("myPlotFilteredEnvelope",filteredTime, layoutDemod, config);
}

console.timeEnd("SIMULATE")
t = []; 
tdemod = [];
filteredValTime = [];
xn = [];
yn = [];
functionCounter=1;
console.log(functionCounter)

}

// FOR ONCLICK
function simulateOnChange(){
    if(functionCounter>0){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(simulateOnChangeSimulation()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}
}

function simulateOnChangeSimulation(){
 if(functionCounter>0){
    console.time("SIMULATE ON CHANGE")
    
    //USERDEFINED
    //#region 
    //BIT:
 bits = $("#binaryInput").val();
//ASK modulator parameters:
 bitRate = $("#bitrateInput").val();
 tb = 1/bitRate ; //FORMULA
 fcarrier = $("#carrierFrequency").val();
fcarrier = Number(fcarrier);

 fmin = $("#fmin").val();
fmin = Number(fmin);
 fmax = $("#fmax").val();

 amplitudeMark = $("#amplitudeMark").val(); //amplitude for logic 1
 amplitudeSpace = $("#amplitudeSpace").val(); //amplitude for logic 0
 Start = 0; 
 updateStartFormula = Start * tb; //formula
 updateTb = tb; //formula
 tdur = tb * bits.length;
//Bandwidth of the channel:
 bandwidth = $("#bandwidth").val(); //cut off frequency
 //#endregion

 // FOR ALERTS
if(bits.length >= 150 ){
  if (confirm('There are too many inputted bits. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }
 
  if(bitRate<=75){
  if (confirm('The bitrate is too low. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }
 
  if(fmax>=50000){
  if (confirm('The fmax is too high. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }
console.log(fmin);
  if(fmin<=-50000){
  if (confirm('The fmin is too low. This parameter would take a long time to simulate. Do you wish to continue?')) {
     // CONTINUE
   } else {
    return;
   }
  }

  
 var alerted_2 = false;
 if (Boolean(bitRate) === false){
     if (alerted_2 === false){
         alert("Enter a valid bitrate");
         alerted_2 = true;
         return;
     }
 }
 var alerted_3 = false;
     if (bitRate.charAt(0) === "0"){
         if (alerted_3 === false){
             alert("Enter a valid bitrate");
             alerted_3 = true;
             return;
         }
     }
 //LAYOUT FOR PLOTS

  layout2 = {
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0,tb],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    plot_bgcolor:$("#bgColor").val(),
    paper_bgcolor:"#c2acb2",
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

 layout2_2 = {
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0,tb],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    grid: {rows: 2, 
        columns: 1,
         pattern: 'independent'
        },
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",

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
    // FOR ALERT
var alerted = false;
for(let i= 0; i<bits.length; i++){
    if (bits.charAt(i) != "1" && bits.charAt(i) != "0"){
        if (alerted === false){
            alert("Input only 1s and 0s");alerted = true;
            return;
        }
    }
}
DTFT(bits,bitRate,fmin,fmax,amplitudeMark,amplitudeSpace,bandwidth,fcarrier);

timeDom(bits,bitRate,fcarrier)
function timeDom(bits,bitRate,fcarrier){
    //FOR TRANSMITTER
    //MODULATOR ARRAYS:
    let xAxisModulator = [];
    let yAxisModulator = [];
    for(let i  = 0; i<xn.length ; i++){
    xAxisModulator[i] = t[i]
    // yAxisModulator[i] = xn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
    yAxisModulator[i] = xn[i] 
}
//GENERATE THE VALUES FOR PLOTTING
let data = {
    x: xAxisModulator,
    y: yAxisModulator,
    mode: "lines",
    name: 'Transmitted Signal',
    line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},
}
let data_2 = {
    x: xAxisModulator,
    y: yAxisModulator,
    mode: "lines",
    name: 'Transmitted Signal',
    xaxis: 'x2',
    yaxis: 'y2',
    line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},
}

    //FOR RECEIVER
    //MODULATOR ARRAYS:
    let xAxisDeModulator = [];
    let yAxisDeModulator = [];
    for(let i  = 0; i<xn.length ; i++){
        xAxisDeModulator[i] = t[i]
        // yAxisDeModulator[i] = yn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
        yAxisDeModulator[i] = yn[i] 
        }
//GENERATE THE VALUES FOR PLOTTING
let data2 = {
    x: xAxisDeModulator,
    y: yAxisDeModulator,
    mode: "lines",
    name: 'Received Signal',
    line: {
        color:$("#RXsig").val(),
        width: $("#RXsigThicc").val(),
},
}
let data2_2 = {
    x: xAxisDeModulator,
    y: yAxisDeModulator,
    mode: "lines",
    name: 'Received Signal',
    xaxis: 'x2',
    yaxis: 'y2',
    line: {
        color:$("#RXsig").val(),
        width: $("#RXsigThicc").val(),
},
}
let dataCombined = [data,data2]

if($("#bandLimiting").val() == "Disable") {
    $("#view").val("Single Window");
    Plotly.newPlot("myPlotTimeDom", [data], layout2, config);
}
else {  
    if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotTimeDom",[data,data2_2], layout2_2, config);
    else Plotly.newPlot("myPlotTimeDom",[data,data2], layout2, config);
}
$(".windowView").on("change", function windowView(){
    if(functionCounter>0){
    if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotTimeDom",[data,data2_2], layout2_2, config);
    else Plotly.newPlot("myPlotTimeDom",[data,data2], layout2, config);
}
  })
}

ASKdemodulatorEnvelope(bits,bitRate,fcarrier)
function ASKdemodulatorEnvelope(bits,bitRate,fcarrier){
    layoutDemod = {
        title: {text: "<b>Demodulated Signal</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,tb],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",
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
    layoutRectifier = {
        title: {text: "<b>Rectified Signal</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,tb],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#c2acb2",
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
    let rectifierOutput = [];
    if($("#bandLimiting").val() == "Disable"){
        for(let i = 0; i<xn.length ; i++){
            rectifierOutput[i] = Math.abs(xn[i]);
        }
        for(let i = 0; i<63; i++){
            xn.push(0);
        }
        for(let i = 0; i<xn.length ; i++){
            xn[i] = Math.abs(xn[i]);
        }
    }
    else{
        for(let i = 0; i<yn.length ; i++){
            rectifierOutput[i] = Math.abs(yn[i]);
        }
        for(let i = 0; i<63; i++){
            yn.push(0);
        }
        for(let i = 0; i<yn.length ; i++){
            yn[i] = Math.abs(yn[i]);
        }
    }
    
    //plot rectified signal
    let rectifiedSignal = [{
        x: t,
        y: rectifierOutput,
        name: 'Demodulated Signal',
        line: {
            color:$("#RectifSig").val(),
            width: $("#RectifSigThicc").val(),
    },
    }]
    Plotly.newPlot("myPlotRectified",rectifiedSignal, layoutRectifier, config);

  // FIR FILTERING
//  Instance of a filter coefficient calculator
var firCalculator = new Fili.FirCoeffs();

// calculate filter coefficients
var firFilterCoeffs = firCalculator.lowpass({
    order: 63, // filter order
    Fs: 96000, // sampling frequency
    Fc: bitRate*2 // cutoff frequency
    // for bandpass and bandstop F1 and F2 must be provided instead of Fc
  });


// create a filter instance from the calculated coeffs
var firFilter = new Fili.FirFilter(firFilterCoeffs);
// create a filter instance from the calculated coeffs

// var firFilter = new Fili.FirFilter(iirFilterCoeffs);

//RUN FILTER
let filteredValTime = 0;
//condition
if($("#bandLimiting").val() == "Disable") filteredValTime = firFilter.multiStep(xn);
else filteredValTime = firFilter.multiStep(yn);

let filteredTime = [{
    x: tdemod,
    y: filteredValTime,
    name: 'Demodulated Signal',
    line: {
        color:$("#demSig").val(),
        width: $("#demSigThicc").val(),
},
}]
Plotly.newPlot("myPlotFilteredEnvelope",filteredTime, layoutDemod, config);
}

console.timeEnd("SIMULATE ON CHANGE")
t = []; 
tdemod = [];
filteredValTime = [];
xn = [];
yn = [];
 }
}



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
showPanel(0,'#903C4C');

//#endregion