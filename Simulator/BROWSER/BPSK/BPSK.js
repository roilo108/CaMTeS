
let config = {
    displaylogo: false,
    select2d: false,
    lasso2d: false,

    responsive: true,
    // scrollZoom: true,
    displayModeBar: true,
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
  paper_bgcolor:"#BB96A3",
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
  paper_bgcolor:"#BB96A3",
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
let layout2 = {
    title: {text: "<b>Modulated Signal</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    plot_bgcolor:$("#bgColor").val(),
    paper_bgcolor:"#BB96A3",
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



    layoutFunc = {
        title: {text: "<b>Frequency Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#BB96A3",
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

    layoutFunc_PROD = {
            title: {text: "<b>Output of Product Modulator</b>",
            font: {
                family: 'sans',
                size: 24
              },},
            xaxis: {range: [0],title: "X-AXIS"},
            yaxis: {title: "Y-AXIS"},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#BB96A3",
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
        layoutDemod = {
            title: {text: "<b>Demodulated Signal</b>",
            font: {
                family: 'sans',
                size: 24
              },},
            xaxis: {range: [0],title: "X-AXIS"},
            yaxis: {title: "Y-AXIS"},
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#BB96A3",
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
Plotly.newPlot("myPlotFreqDom", [dataInit], layoutFunc, config);
Plotly.newPlot("myPlotFilteredEnvelope", [dataInit], layoutDemod, config);
Plotly.newPlot("myPlotProductDom", [dataInit], layoutFunc_PROD, config);







//CARRIER
const carrier = "Math.sin(2*Math.PI*fcarrier*x)";
const fs2 = 200000;
const fp2 = 1/fs2;
//#endregion

function simulate(){
  $(".loader").css("display", "flex" );
  $(document).ready(function(){
      $(simulateSimulation()).ready(function(){
              $(".loader").fadeOut();
      });
  });
}


let functionCounter = 0; 
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
    paper_bgcolor:"#BB96A3",
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

DTFT(bits,bitRate,fmin,fmax,amplitudeMark,amplitudeSpace,bandwidth,fcarrier);

timeDom(bits,bitRate,fcarrier)
function timeDom(bits,bitRate,fcarrier){
    console.log(fcarrier)
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


let dataCombined = [data]

Plotly.newPlot("myPlotTimeDom", dataCombined, layout2, config);

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
        paper_bgcolor:"#BB96A3",
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
 let Fs= 48000;
 let Ts = 1/Fs;   
    for(let i = 0; i<63; i++){
        productModulator.push(0);
    }
    let tdemod = [];
     //Generate the values for the sampling time
     for(let i = 0; i<xn.length+63 ; i++){
        tdemod.push(i*Ts);
    }
//  Instance of a filter coefficient calculator
var firCalculator = new Fili.FirCoeffs();

                // calculate filter coefficients
                var firFilterCoeffs = firCalculator.lowpass({
                    order: 63, // filter order
                    Fs: 48000, // sampling frequency
                    Fc: 0.7*fcarrier // cutoff frequency
                    // for bandpass and bandstop F1 and F2 must be provided instead of Fc
                });

// create a filter instance from the calculated coeffs
var firFilter = new Fili.FirFilter(firFilterCoeffs);
// run the filter from input array
let filteredValTime = firFilter.multiStep(productModulator);
console.log(filteredValTime);
//RUN FILTER
// let filteredValTime = iirFilter.multiStep(productModulator);

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
 xn = [];
 yn = [];
 tdemod = [];
 filteredValTime = [];
functionCounter++;
}


function simulateOnChange(){
  $(".loader").css("display", "flex" );
  $(document).ready(function(){
      $(simulateOnChangeSimulation()).ready(function(){
              $(".loader").fadeOut();
      });
  });
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
        paper_bgcolor:"#BB96A3",
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
    
    DTFT(bits,bitRate,fmin,fmax,amplitudeMark,amplitudeSpace,bandwidth,fcarrier);
    
    timeDom(bits,bitRate,fcarrier)
    function timeDom(bits,bitRate,fcarrier){
        console.log(fcarrier)
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
    
    
    let dataCombined = [data]
    
    Plotly.newPlot("myPlotTimeDom", dataCombined, layout2, config);
    
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
            paper_bgcolor:"#BB96A3",
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
     let Fs= 48000;
     let Ts = 1/Fs;   
        for(let i = 0; i<63; i++){
            productModulator.push(0);
        }
        let tdemod = [];
         //Generate the values for the sampling time
         for(let i = 0; i<xn.length+63 ; i++){
            tdemod.push(i*Ts);
        }
    //  Instance of a filter coefficient calculator
      var firCalculator = new Fili.FirCoeffs();

                // calculate filter coefficients
                var firFilterCoeffs = firCalculator.lowpass({
                    order: 63, // filter order
                    Fs: 48000, // sampling frequency
                    Fc: 0.7*fcarrier // cutoff frequency
                    // for bandpass and bandstop F1 and F2 must be provided instead of Fc
                });

// create a filter instance from the calculated coeffs
var firFilter = new Fili.FirFilter(firFilterCoeffs);
// run the filter from input array
let filteredValTime = firFilter.multiStep(productModulator);
    
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
     xn = [];
     yn = [];
     tdemod = [];
     filteredValTime = [];
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
showPanel(0,'#73303C');

//#endregion