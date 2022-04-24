

let timeSpent = 0;

//---------------Input Bin Execution----------
let binaryInput = $("#binaryInput").val();
let amplitude = $("#amplitudeInput").val();
amplitude = Number(amplitude);
let bps = $("#bitrateInput").val();
const tb = 1/bps;
let fmax = $("#fmax").val();
let functionCounter = 0;
let fc = $("#fc").val();


let config = {
    displaylogo: false,
    select2d: false,
    lasso2d: false,
    responsive: true,
    displayModeBar: true,
}
let layout2 = {
    title: {text: "<b>Time Domain</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0,bps],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    plot_bgcolor:$("#bgColor").val(),
    paper_bgcolor:"#B7CCC7",
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
    title: {text: "<b>Time Domain</b>",
    font: {
        family: 'sans',
        size: 24
      },},
    xaxis: {range: [0,bps],title: "X-AXIS"},
    yaxis: {title: "Y-AXIS"},
    grid: {rows: 2, 
        columns: 1,
         pattern: 'independent'
        },
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#B7CCC7",

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

    // ------------------------- FOR INIT ----------------------------------------
    layoutFunc = {
        title: {text: "<b>Frequency Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,tb],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#B7CCC7",
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
        xaxis: {range: [0,tb],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        grid: {rows: 2, 
            columns: 1,
             pattern: 'independent'
            },
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#B7CCC7",
    
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
    let dataInit = {
    x: 0,
    y: 0,
}
Plotly.newPlot("myPlot", [dataInit], layout2, config);

let dataInit_2 = {
    x: 0,
    y: 0,
    xaxis: 'x2',
    yaxis: 'y2',
}
Plotly.newPlot("myPlotFreqDom", [dataInit], layoutFunc, config);

$(".windowView").on("change", function windowView(){
    if($("#view").val() == "Single Window"){
Plotly.newPlot('myPlot' , [dataInit], layout2,config);
    }

if($("#view").val() == "Two Windows"){
        Plotly.newPlot("myPlot", [dataInit,dataInit_2], layout2_2, config);
}})

$(".windowView_2").on("change", function windowView(){
    if($("#view").val() == "Single Window"){
Plotly.newPlot('myPlotFreqDom' , [dataInit], layoutFunc,config);
    }

if($("#view2").val() == "Two Windows"){
        Plotly.newPlot("myPlotFreqDom", [dataInit,dataInit_2], layoutFunc_2, config);
}})
// ------------------------------------ END INIT ------------------------------
// FOR ONCLICK
function inputFunction(){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(lineCodingSimulation()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}
// FOR ONCHANGE
function onchangeLineCoding(){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(lineCodingSimulationOnChange()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}
function colorChanger(){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(colorChangerSimulate()).ready(function(){
                $(".loader").fadeOut();
        });
    });
}
function lineCodingSimulation(){
     t = [];
 xn = [];
 yn = [];
 f = [];
 HWmag = [];
 HWmag_3 = [];
   
     layout2 = {
        title: {text: "<b>Time Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,bps],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#B7CCC7",
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
        title: {text: "<b>Time Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,bps],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        grid: {rows: 2, 
            columns: 1,
             pattern: 'independent'
            },
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#B7CCC7",
    
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
    console.time("SIMULATION")
binaryInput = $("#binaryInput").val();
amplitude = $("#amplitudeInput").val();
amplitude = Number(amplitude);
bps = $("#bitrateInput").val();
 fmax = $("#fmax").val();
 fc = $("#fc").val();

// FOR ALERTS
 if(binaryInput.length >= 150 ){
 if (confirm('There are too many inputted bits. This parameter would take a long time to simulate. Do you wish to continue?')) {
    // CONTINUE
  } else {
   return;
  }
 }

 if(bps<=75){
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


let typeOfEncoding = $("#typeOfEncoding").val();

// ---------------------- FOR PLOTLY LAYOUTS --------------------------------------
// FOR ALERT
var alerted = false;
for(let i= 0; i<binaryInput.length; i++){
    if (binaryInput.charAt(i) != "1" && binaryInput.charAt(i) != "0"){
        if (alerted === false){
            alert("Input only 1s and 0s");
            alerted = true;
            return;
        }
    }
}
var alerted_2 = false;
if (Boolean(bps) === false){
    if (alerted_2 === false){
        alert("Enter a valid bitrate");
        alerted_2 = true;
        return;
    }
}
var alerted_3 = false;
    if (bps.charAt(0) === "0"){
        if (alerted_3 === false){
            alert("Enter a valid bitrate");
            alerted_3 = true;
            return;
        }
    }


switch (typeOfEncoding){
    
    case "UPNRZ":
        UPNRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "PNRZ": 
        PNRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "UPRZ":
        UPRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "PRZ":
        PRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "BPNRZAMI":
        BPNRZAMI(binaryInput, amplitude, bps, fmax);
        break;
    case "BPRZAMI":
        BPRZAMI(binaryInput, amplitude, bps, fmax);
        break;
    case "biphaseMark":
        biphaseMark(binaryInput, amplitude, bps, fmax);
        break;
    case "biphaseSpace":
        biphaseSpace(binaryInput, amplitude, bps, fmax);
        break;
    case "manchester":
        manchester(binaryInput, amplitude, bps, fmax);
        break;
    case "differentialManchester":
        diffManchester(binaryInput, amplitude, bps, fmax);
        break;
}
functionCounter++;

console.timeEnd("SIMULATION")

}

function lineCodingSimulationOnChange(){
    console.time("ONCHANGE");
if (functionCounter>0){
      t = [];
 xn = [];
 yn = [];
 f = [];
 HWmag = [];
 HWmag_3 = [];
binaryInput = $("#binaryInput").val();
amplitude = $("#amplitudeInput").val();
amplitude = Number(amplitude);
fmax = $("#fmax").val();
fc = $("#fc").val();
bps = $("#bitrateInput").val();

// FOR ALERTS
if(binaryInput.length >= 150 ){
    if (confirm('There are too many inputted bits. This parameter would take a long time to simulate. Do you wish to continue?')) {
       // CONTINUE
     } else {
      return;
     }
    }
   
    if(bps<=75){
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


var alerted_2 = false;
if (Boolean(bps) === false){
    if (alerted_2 === false){
        alert("Enter a valid bitrate");
        alerted_2 = true;
        return;
    }
}
var alerted_3 = false;
    if (bps.charAt(0) === "0"){
        if (alerted_3 === false){
            alert("Enter a valid bitrate");
            alerted_3 = true;
            return;
        }
    }
let typeOfEncoding = $("#typeOfEncoding").val();

switch (typeOfEncoding){
    case "UPNRZ":
        UPNRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "PNRZ":
        PNRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "UPRZ":
        UPRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "PRZ":
        PRZ(binaryInput, amplitude, bps, fmax);
        break;
    case "BPNRZAMI":
        BPNRZAMI(binaryInput, amplitude, bps, fmax);
        break;
    case "BPRZAMI":
        BPRZAMI(binaryInput, amplitude, bps, fmax);
        break;
    case "biphaseMark":
        biphaseMark(binaryInput, amplitude, bps, fmax);
        break;
    case "biphaseSpace":
        biphaseSpace(binaryInput, amplitude, bps, fmax);
        break;
    case "manchester":
        manchester(binaryInput, amplitude, bps, fmax);
        break;
    case "differentialManchester":
        diffManchester(binaryInput, amplitude, bps, fmax);
        break;
}
}
console.timeEnd("ONCHANGE");

}

function colorChangerSimulate(){
    layout2 = {
        title: {text: "<b>Time Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,bps],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        plot_bgcolor:$("#bgColor").val(),
        paper_bgcolor:"#B7CCC7",
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
        title: {text: "<b>Time Domain</b>",
        font: {
            family: 'sans',
            size: 24
          },},
        xaxis: {range: [0,bps],title: "X-AXIS"},
        yaxis: {title: "Y-AXIS"},
        grid: {rows: 2, 
            columns: 1,
             pattern: 'independent'
            },
            plot_bgcolor:$("#bgColor").val(),
            paper_bgcolor:"#B7CCC7",
    
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
        layoutFunc_2 = {
            title: {text: "<b>Frequency Domain</b>",
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
                paper_bgcolor:"#B7CCC7",
        
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
                xaxis: {range: [0,tb],title: "X-AXIS"},
                yaxis: {title: "Y-AXIS"},
                plot_bgcolor:$("#bgColor").val(),
                paper_bgcolor:"#B7CCC7",
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
    let timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
    let filteredTimeDom = {
        x: t,
        y: yn,
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXsig").val(),
            width: $("#RXsigThicc").val(),
    },
    }
    timeDom_2 = {
        x: t,
        y: xn,
        xaxis: 'x2',
        yaxis: 'y2',
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
    
     filteredTimeDom_2 = {
        x: t,
        y: yn,
        xaxis: 'x2',
        yaxis: 'y2',
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXsig").val(),
            width: $("#RXsigThicc").val(),
    },
    } 
    let freqDom = {
        x: f,
        y: HWmag,
        name: 'Transmitted Signal',
    mode: 'lines',
    line: {
            color:$("#TXmag").val(),
            width: $("#TXmagThicc").val(),
    },
    }
    let frequencySpecFiltered = {
        x: f,
        y: HWmag_3,
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXmag").val(),
            width: $("#RXmagThicc").val(),
    },
    }
    let freqDom_2 = {
        x: f,
        y: HWmag,
        xaxis: 'x2',
        yaxis: 'y2',
        name: 'Transmitted Signal',
    mode: 'lines',
    line: {
            color:$("#TXmag").val(),
            width: $("#TXmagThicc").val(),
    },}

    let frequencySpecFiltered_2 = {
        x: f,
        y: HWmag_3,
        xaxis: 'x2',
        yaxis: 'y2',
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXmag").val(),
            width: $("#RXmagThicc").val(),
    },
    }
    Plotly.newPlot("myPlot", [timeDom,filteredTimeDom],layout2, config);
    Plotly.newPlot("myPlotFreqDom", [freqDom,frequencySpecFiltered],layoutFunc, config);
    if($("#view").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt").val();
            let windowChangeVal2 = $("#secondWindowOpt").val();
            
            windowChange(windowChangeVal1, windowChangeVal2);
            
            function windowChange(windowChangeVal1, windowChangeVal2){
        
                let dataCombinedWindow = [];
                
        
            switch(windowChangeVal1){
                case "Transmitted Signal":
                    dataCombinedWindow.push(timeDom);
                    break;
                case "Received Signal":
                    dataCombinedWindow.push(filteredTimeDom);
                    break;
            }
            switch(windowChangeVal2){
                case "Transmitted Signal":
                    dataCombinedWindow.push(timeDom_2);
                    break;
                case "Received Signal":
                    dataCombinedWindow.push(filteredTimeDom_2);
                    break;
            }
            Plotly.newPlot("myPlot", dataCombinedWindow, layout2_2, config);
            }
            }


            if($("#view2").val() == "Two Windows"){
                console.log("inside")
                    let windowChangeVal1 = $("#firstWindowOpt_2").val();
                    let windowChangeVal2 = $("#secondWindowOpt_2").val();
                    
                    windowChange(windowChangeVal1, windowChangeVal2);
                    
                    function windowChange(windowChangeVal1, windowChangeVal2){
                
                        let dataCombinedWindow_2 = [];
                        
                
                    switch(windowChangeVal1){
                        case "Transmitted Signal":
                            dataCombinedWindow_2.push(freqDom);
                            break;
                        case "Received Signal":
                            dataCombinedWindow_2.push(frequencySpecFiltered);
                            break;
                    }
                    switch(windowChangeVal2){
                        case "Transmitted Signal":
                            dataCombinedWindow_2.push(freqDom_2);
                            break;
                        case "Received Signal":
                            dataCombinedWindow_2.push(frequencySpecFiltered_2);
                            break;
                    }
                    Plotly.newPlot("myPlotFreqDom", dataCombinedWindow_2, layoutFunc_2, config);
                    }
                    }

}























//#region 
// -----------------------------------------UPNRZ------------------------
function UPNRZ(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let zero = 0;
let tb = 1/bps;

completeDTFT_UPNRZandPNRZ(binaryInput,bps,amplitude,zero,0,fmax,fc);

}



//-----------------------------------------PNRZ------------------------
function PNRZ(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let negativePeak = -amplitude;
let tb = 1/bps;

completeDTFT_UPNRZandPNRZ(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);



}



//-----------------------------------------UPRZ------------------------
function UPRZ(binaryInput, amplitude, bps, fmax) {
let xArr = [0];
let yArr = [0];
let positivePeak = amplitude;
let zero = 0;
let tb = 1/bps;

completeDTFT_UPRZ(binaryInput,bps,amplitude,zero,0,fmax,fc);

}


//-----------------------------------------PRZ------------------------
function PRZ(binaryInput, amplitude, bps, fmax) {
    let xArr = [0];
    let yArr = [0];
    let positivePeak = amplitude;
    let negativePeak = -amplitude;
    let zero = 0;
    let tb = 1/bps;
    
    completeDTFT_PRZ(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);

    }


//-----------------------------------------BPNRZ-AMI------------------------
function BPNRZAMI(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let negativePeak = -amplitude;
let zero = 0;
let tb = 1/bps;

completeDTFT_BPNRZAMI(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);

}


//-----------------------------------------BPRZ-AMI------------------------
function BPRZAMI(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let negativePeak = -amplitude;
let zero = 0;

completeDTFT_BPRZAMI(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);

}

//-----------------------------Biphase-Mark------------------------------
function biphaseMark(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let negativePeak = -amplitude;
let zero = 0;
let tb = 1/bps;


completeDTFT_BIMARK(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);
    
}


//-----------------------------Biphase-Space------------------------------
function biphaseSpace(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let negativePeak = -amplitude;
let zero = 0;
let tb = 1/bps;

completeDTFT_BISPACE(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);
    
}


//-----------------------------Manchester------------------------------
function manchester(binaryInput, amplitude, bps, fmax) {
let positivePeak = amplitude;
let negativePeak = -amplitude;
let zero = 0;
let tb = 1/bps;

completeDTFT_MANCHESTER(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);

}


//-----------------------------Differential Manchester------------------------------
function diffManchester(binaryInput, amplitude, bps, fmax){
let positivePeak = amplitude;
let negativePeak = -amplitude;
let zero = 0;
let tb = 1/bps;

completeDTFT_DIFFMANCHESTER(binaryInput,bps,amplitude,negativePeak,0,fmax,fc);

}
//#endregion


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
showPanel(0,'#104F55');

//#endregion
