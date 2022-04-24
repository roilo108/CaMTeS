
let config = {
    displaylogo: false,
    select2d: false,
    lasso2d: false,

    responsive: true,
    // scrollZoom: true,
    displayModeBar: true,
}
layoutBPF_2 = {
  title: {text: "<b>Band Pass Filter</b>",
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
  layoutEnvelope_2 = {
  title: {text: "<b>Envelope Detector</b>",
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
layoutCarrier = {
  title: {text: "<b>Carrier Signal</b>",
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

    let layoutDemod = {
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

    let layoutEnvelope = {
        title: {text: "<b>Envelope Detector</b>",
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
    let layoutBPF = {
        title: {text: "<b>Band Pass Filter</b>",
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

    let dataInit = {
        x: 0,
        y: 0,
    }


    
    let dataInit_2 = {
        x: 0,
        y: 0,
        xaxis: 'x2',
        yaxis: 'y2',
    }
    Plotly.newPlot("myPlotModulating", [dataInit], layoutModulating, config);
    Plotly.newPlot("myPlotCarrier", [dataInit, dataInit_2], layoutCarrier, config);
    Plotly.newPlot("myPlotTimeDom", [dataInit], layout2, config);
    Plotly.newPlot("myPlotFreqDom", [dataInit], layoutFunc, config);
    Plotly.newPlot("myPlotBandPass", [dataInit], layoutBPF, config);
    Plotly.newPlot("myPlotEnvelopeDetector", [dataInit], layoutEnvelope, config);
    Plotly.newPlot("myPlotFilteredEnvelope", [dataInit], layoutDemod, config);

    $(".windowView").on("change", function windowView(){
      if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotBandPass",[dataInit, dataInit_2], layoutBPF_2, config);
      else Plotly.newPlot("myPlotBandPass",[dataInit], layoutBPF, config);

      if($("#view_2").val()=="Two Windows") Plotly.newPlot("myPlotEnvelopeDetector",[dataInit, dataInit_2], layoutEnvelope_2, config);
      else Plotly.newPlot("myPlotEnvelopeDetector",[dataInit], layoutEnvelope, config);
    })

    
// USER INPUT INIT.
//#region 
//BIT:
let bits = $("#binaryInput").val();
//ASK modulator parameters:
let bitRate = $("#bitrateInput").val();
let tb = 1/bitRate ; //FORMULA
let amplitude = $("#amplitude").val();
amplitude = Number(amplitude);

let fmin = $("#fmin").val();
fmin = Number(fmin);
let fmax = $("#fmax").val();

let frequencyMark = $("#frequencyMark").val(); //amplitude for logic 1
frequencyMark = Number(frequencyMark);
let frequencySpace = $("#frequencySpace").val(); //amplitude for logic 0
frequencySpace = Number(frequencySpace);

let Start = 0; 
let updateStartFormula = Start * tb; //formula
let updateTb = tb; //formula
// let tdur = tb * bits.length;
//Bandwidth of the channel:
let bandwidth = $("#bandwidth").val(); //cut off frequency

//CARRIER
// const carrierMark = "Math.sin(2*Math.PI*frequencyMark*x)";
// const carrierSpace = "Math.sin(2*Math.PI*frequencySpace*x)";
const Fs = 48000;
const Ts = 1/Fs;
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
 amplitude = $("#amplitude").val();
 amplitude = Number(amplitude);

 fmin = $("#fmin").val();
fmin = Number(fmin);
 fmax = $("#fmax").val();

 frequencyMark = $("#frequencyMark").val(); //amplitude for logic 1
 frequencySpace = $("#frequencySpace").val(); //amplitude for logic 0
 Start = 0; 
 updateStartFormula = Start * tb; //formula
 updateTb = tb; //formula
//Bandwidth of the channel:
 bandwidth = $("#bandwidth").val(); //cut off frequency
 //#endregion

 // FOR ALERT
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

 layoutEnvelope = {
    title: {text: "<b>Envelope Detector</b>",
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
 layoutBPF = {
    title: {text: "<b>Band Pass Filter</b>",
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
DTFT(bits,bitRate,fmin,fmax,frequencyMark,frequencySpace,bandwidth);



timeDom(bits,bitRate,amplitude)
function timeDom(bits,bitRate,amplitude){
    //FOR TRANSMITTER
    let normalizer = (1/bitRate)/ (t[endValues[1]]);
  let xAxisModulator = [];
  let yAxisModulator = [];
      //FOR RECEIVER
    //MODULATOR ARRAYS:
for(let i = 0; i<xn.length ; i++){
    yAxisModulator.push(xn[i]);
    xAxisModulator.push(t[i]*normalizer);
}
//GENERATE THE VALUES  PLOTTING
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


Plotly.newPlot("myPlotTimeDom", [data], layout2, config);
}


FSKdemodulatorEnvelope(bits,bitRate,amplitude)
function FSKdemodulatorEnvelope(bits,bitRate,amplitude){
            // --------------------------------- FOR BPF1 ---------------------------------
fc_LP = 0.5*(Number(frequencyMark)+Number(frequencySpace));

            //  Instance of a filter coefficient calculator
var firCalculator = new Fili.FirCoeffs();

                // calculate filter coefficients
                var firFilterCoeffs = firCalculator.highpass({
                    order: 80, // filter order
                    Fs: 48000, // sampling frequency
                    Fc: fc_LP // cutoff frequency
                });

// create a filter instance from the calculated coeffs
var firFilter = new Fili.FirFilter(firFilterCoeffs);
// run the filter from input array
let filteredValTime = firFilter.multiStep(xn);

//FOR ENVELOPE DETECTOR 1
let rectified_1 = [];
                for(let i = 0; i<filteredValTime.length ; i++){
                    rectified_1[i] = Math.abs(filteredValTime[i]);
                }
                //PADDING
                for(let i = 0; i<80; i++){
                    rectified_1.push(0);
                }
                //  Instance of a filter coefficient calculator
                var firCalculator = new Fili.FirCoeffs();
                // calculate filter coefficients
                var firFilterCoeffs = firCalculator.lowpass({
                    order: 80, // filter order
                    Fs: 48000, // sampling frequency
                    Fc: bitRate/2 // cutoff frequency
                });
                // create a filter instance from the calculated coeffs
                var firFilter = new Fili.FirFilter(firFilterCoeffs);
    //RUN FILTER
    let envelope_1 = firFilter.multiStep(rectified_1);

              // --------------------------------- FOR BPF2 ---------------------------------

                          //  Instance of a filter coefficient calculator
              var firCalculator = new Fili.FirCoeffs();
              
              // calculate filter coefficients
              var firFilterCoeffs = firCalculator.lowpass({
                  order: 80, // filter order
                  Fs: 48000, // sampling frequency
                  Fc: fc_LP // cutoff frequency

                });
                // create a filter instance from the calculated coeffs
var firFilter = new Fili.FirFilter(firFilterCoeffs);
// run the filter from input array
let filteredValTime_2 = firFilter.multiStep(xn);

let rectified_2 = [];
                for(let i = 0; i<filteredValTime.length ; i++){
                    rectified_2[i] = Math.abs(filteredValTime_2[i]);
                }
                //PADDING
                for(let i = 0; i<80; i++){
                    rectified_2.push(0);
                }
            
                //  Instance of a filter coefficient calculator
                var firCalculator = new Fili.FirCoeffs();
                // calculate filter coefficients
                var firFilterCoeffs = firCalculator.lowpass({
                    order: 80, // filter order
                    Fs: 48000, // sampling frequency
                    Fc: bitRate/2 // cutoff frequency
                });
                // create a filter instance from the calculated coeffs
                var firFilter = new Fili.FirFilter(firFilterCoeffs);

    //RUN FILTER
    let envelope_2 = firFilter.multiStep(rectified_2);

    // -------------------------------------------- COMPARATOR ------------------------------------------
    let comparatorOutput = [];

    for(let i = 0; i<envelope_2.length ; i++){
        comparatorOutput[i] = envelope_1[i] - envelope_2 [i];
    }

    //PADDING
    let tDemod = [];
    for(let i = 0; i<comparatorOutput.length+80 ; i++){
        tDemod.push(i*Ts);
    }
            let filtered_BP1 = {
            x: t,
            y: filteredValTime,
            name: 'BPF1',
            line: {
                color:$("#BPF1").val(),
                width: $("#BPF1Thicc").val(),
        },
        }

            let filtered_BP2 = {
            x: t,
            y: filteredValTime_2,
            name: 'BPF2',
            line: {
                color:$("#BPF2").val(),
                width: $("#BPF2Thicc").val(),
        },
        }
        //FOR TWO WINDOWS
            let filtered_BP2_2 = {
            x: t,
            y: filteredValTime_2,
            xaxis: 'x2',
            yaxis: 'y2',
            name: 'BPF2',
            line: {
                color:$("#BPF2").val(),
                width: $("#BPF2Thicc").val(),
        },
        }
            let envelopeDetect_1 = {
            x: t,
            y: envelope_1,
            name: 'Envelope Detector 1',
            line: {
                color:$("#ED1").val(),
                width: $("#ED1Thicc").val(),
        },
        }
            let envelopeDetect_2 = {
            x: t,
            y: envelope_2,
            name: 'Envelope Detector 1',
            line: {
                color:$("#ED2").val(),
                width: $("#ED2Thicc").val(),
        },
        }
        //FOR TWO WINDOWS
            let envelopeDetect_2_2 = {
            x: t,
            y: envelope_2,
            xaxis: 'x2',
            yaxis: 'y2',
            name: 'Envelope Detector 1',
            line: {
                color:$("#ED2").val(),
                width: $("#ED2Thicc").val(),
        },
        }
            let demodSigFinal = {
            x: tDemod,
            y: comparatorOutput,
            name: 'Envelope Detector 1',
            line: {
                color:$("#demSig").val(),
                width: $("#demSigThicc").val(),
        },
        }
        layoutBPF_2 = {
          title: {text: "<b>Band Pass Filter</b>",
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
          layoutEnvelope_2 = {
          title: {text: "<b>Envelope Detector</b>",
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
        if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2_2], layoutBPF_2, config);
        else Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2], layoutBPF, config);

        if($("#view_2").val()=="Two Windows") Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2_2], layoutEnvelope_2, config);
        else Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2], layoutEnvelope, config);
        
        Plotly.newPlot("myPlotFilteredEnvelope",[demodSigFinal], layoutDemod, config);

        $(".windowView").on("change", function windowView(){
          if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2_2], layoutBPF_2, config);
          else Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2], layoutBPF, config);
  
          if($("#view_2").val()=="Two Windows") Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2_2], layoutEnvelope_2, config);
          else Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2], layoutEnvelope, config);
        })
}

console.timeEnd("SIMULATE")
 t = []; 
 xn = [];
 yn = [];
 tDemod = [];
 comparatorOutput = [];
 endValues = [];
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
   amplitude = $("#amplitude").val();
   amplitude = Number(amplitude);
  
   fmin = $("#fmin").val();
  fmin = Number(fmin);
   fmax = $("#fmax").val();
  
   frequencyMark = $("#frequencyMark").val(); //amplitude for logic 1
   frequencySpace = $("#frequencySpace").val(); //amplitude for logic 0
   Start = 0; 
   updateStartFormula = Start * tb; //formula
   updateTb = tb; //formula
  //Bandwidth of the channel:
   bandwidth = $("#bandwidth").val(); //cut off frequency
   //#endregion
  
   // FOR ALERT
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
  
   layoutEnvelope = {
      title: {text: "<b>Envelope Detector</b>",
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
   layoutBPF = {
      title: {text: "<b>Band Pass Filter</b>",
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
  DTFT(bits,bitRate,fmin,fmax,frequencyMark,frequencySpace,bandwidth);
  
  
  
  timeDom(bits,bitRate,amplitude)
  function timeDom(bits,bitRate,amplitude){
      //FOR TRANSMITTER
      let normalizer = (1/bitRate)/ (t[endValues[1]]);
  let xAxisModulator = [];
  let yAxisModulator = [];
      //FOR RECEIVER
    //MODULATOR ARRAYS:
for(let i = 0; i<xn.length ; i++){
    yAxisModulator.push(xn[i]);
    xAxisModulator.push(t[i]*normalizer);
}
  //GENERATE THE VALUES  PLOTTING
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
  
  
  Plotly.newPlot("myPlotTimeDom", [data], layout2, config);
  }
  
  
  FSKdemodulatorEnvelope(bits,bitRate,amplitude)
  function FSKdemodulatorEnvelope(bits,bitRate,amplitude){
              // --------------------------------- FOR BPF1 ---------------------------------
  fc_LP = 0.5*(Number(frequencyMark)+Number(frequencySpace));
  
              //  Instance of a filter coefficient calculator
  var firCalculator = new Fili.FirCoeffs();
  
                  // calculate filter coefficients
                  var firFilterCoeffs = firCalculator.highpass({
                      order: 80, // filter order
                      Fs: 48000, // sampling frequency
                      Fc: fc_LP // cutoff frequency
                  });
  
  // create a filter instance from the calculated coeffs
  var firFilter = new Fili.FirFilter(firFilterCoeffs);
  // run the filter from input array
  let filteredValTime = firFilter.multiStep(xn);
  
  //FOR ENVELOPE DETECTOR 1
  let rectified_1 = [];
                  for(let i = 0; i<filteredValTime.length ; i++){
                      rectified_1[i] = Math.abs(filteredValTime[i]);
                  }
                  //PADDING
                  for(let i = 0; i<80; i++){
                      rectified_1.push(0);
                  }
                  //  Instance of a filter coefficient calculator
                  var firCalculator = new Fili.FirCoeffs();
                  // calculate filter coefficients
                  var firFilterCoeffs = firCalculator.lowpass({
                      order: 80, // filter order
                      Fs: 48000, // sampling frequency
                      Fc: bitRate/2 // cutoff frequency
                  });
                  // create a filter instance from the calculated coeffs
                  var firFilter = new Fili.FirFilter(firFilterCoeffs);
      //RUN FILTER
      let envelope_1 = firFilter.multiStep(rectified_1);
  
                // --------------------------------- FOR BPF2 ---------------------------------
  
                            //  Instance of a filter coefficient calculator
                var firCalculator = new Fili.FirCoeffs();
                
                // calculate filter coefficients
                var firFilterCoeffs = firCalculator.lowpass({
                    order: 80, // filter order
                    Fs: 48000, // sampling frequency
                    Fc: fc_LP // cutoff frequency
  
                  });
                  // create a filter instance from the calculated coeffs
  var firFilter = new Fili.FirFilter(firFilterCoeffs);
  // run the filter from input array
  let filteredValTime_2 = firFilter.multiStep(xn);
  
  let rectified_2 = [];
                  for(let i = 0; i<filteredValTime.length ; i++){
                      rectified_2[i] = Math.abs(filteredValTime_2[i]);
                  }
                  //PADDING
                  for(let i = 0; i<80; i++){
                      rectified_2.push(0);
                  }
              
                  //  Instance of a filter coefficient calculator
                  var firCalculator = new Fili.FirCoeffs();
                  // calculate filter coefficients
                  var firFilterCoeffs = firCalculator.lowpass({
                      order: 80, // filter order
                      Fs: 48000, // sampling frequency
                      Fc: bitRate/2 // cutoff frequency
                  });
                  // create a filter instance from the calculated coeffs
                  var firFilter = new Fili.FirFilter(firFilterCoeffs);
  
      //RUN FILTER
      let envelope_2 = firFilter.multiStep(rectified_2);
  
      // -------------------------------------------- COMPARATOR ------------------------------------------
      let comparatorOutput = [];
  
      for(let i = 0; i<envelope_2.length ; i++){
          comparatorOutput[i] = envelope_1[i] - envelope_2 [i];
      }
  
      //PADDING
      let tDemod = [];
      for(let i = 0; i<comparatorOutput.length+80 ; i++){
          tDemod.push(i*Ts);
      }
              let filtered_BP1 = {
              x: t,
              y: filteredValTime,
              name: 'BPF1',
              line: {
                  color:$("#BPF1").val(),
                  width: $("#BPF1Thicc").val(),
          },
          }
  
              let filtered_BP2 = {
              x: t,
              y: filteredValTime_2,
              name: 'BPF2',
              line: {
                  color:$("#BPF2").val(),
                  width: $("#BPF2Thicc").val(),
          },
          }
          //FOR TWO WINDOWS
              let filtered_BP2_2 = {
              x: t,
              y: filteredValTime_2,
              xaxis: 'x2',
              yaxis: 'y2',
              name: 'BPF2',
              line: {
                  color:$("#BPF2").val(),
                  width: $("#BPF2Thicc").val(),
          },
          }
              let envelopeDetect_1 = {
              x: t,
              y: envelope_1,
              name: 'Envelope Detector 1',
              line: {
                  color:$("#ED1").val(),
                  width: $("#ED1Thicc").val(),
          },
          }
              let envelopeDetect_2 = {
              x: t,
              y: envelope_2,
              name: 'Envelope Detector 1',
              line: {
                  color:$("#ED2").val(),
                  width: $("#ED2Thicc").val(),
          },
          }
          //FOR TWO WINDOWS
              let envelopeDetect_2_2 = {
              x: t,
              y: envelope_2,
              xaxis: 'x2',
              yaxis: 'y2',
              name: 'Envelope Detector 1',
              line: {
                  color:$("#ED2").val(),
                  width: $("#ED2Thicc").val(),
          },
          }
              let demodSigFinal = {
              x: tDemod,
              y: comparatorOutput,
              name: 'Envelope Detector 1',
              line: {
                  color:$("#demSig").val(),
                  width: $("#demSigThicc").val(),
          },
          }
          layoutBPF_2 = {
            title: {text: "<b>Band Pass Filter</b>",
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
            layoutEnvelope_2 = {
            title: {text: "<b>Envelope Detector</b>",
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
          if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2_2], layoutBPF_2, config);
          else Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2], layoutBPF, config);
  
          if($("#view_2").val()=="Two Windows") Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2_2], layoutEnvelope_2, config);
          else Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2], layoutEnvelope, config);
          
          Plotly.newPlot("myPlotFilteredEnvelope",[demodSigFinal], layoutDemod, config);
  
          $(".windowView").on("change", function windowView(){
            if($("#view").val()=="Two Windows") Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2_2], layoutBPF_2, config);
            else Plotly.newPlot("myPlotBandPass",[filtered_BP1,filtered_BP2], layoutBPF, config);
    
            if($("#view_2").val()=="Two Windows") Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2_2], layoutEnvelope_2, config);
            else Plotly.newPlot("myPlotEnvelopeDetector",[envelopeDetect_1,envelopeDetect_2], layoutEnvelope, config);
          })
  }
  
  console.timeEnd("SIMULATE ON CHANGE")
   t = []; 
   xn = [];
   yn = [];
   tDemod = [];
   comparatorOutput = [];
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
showPanel(0,'#56242D');

//#endregion