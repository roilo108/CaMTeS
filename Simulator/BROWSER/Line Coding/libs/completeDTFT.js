// GLOBAL VARIABLES
let t = [];
let xn = [];
let yn = [];
let f = [];
let HWmag = [];
let HWmag_3 = [];
// ----------------------------------------------------- FOR UPNRZ and UPRZ----------------------------------------------------- 
function completeDTFT_UPNRZandPNRZ(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
//---------------------------------------------------- TRANSMITTER ---------------------
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;

//#region 
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

//Generate the samples

for(let i= 0; i<bits.length; i++){
    if(bits.charAt(i) == "1"){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(amplitudeMark);
            }}
    if(bits.charAt(i) == "0"){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(amplitudeSpace);
            }}
}
//Generate the values for the sampling time
for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}

//Generate the values for plotly
let timeDom = {
    x: t,
    y: xn,
    name: 'Transmitted Signal',
    mode: 'lines',
line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},}
let timeDom_2 = {
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

//Generate Frequencies
 f = []; //frequencies
let W = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f.push(i);
    W.push(2*Math.PI*i*Ts);
}

//Compute the Spectrum
let RealHW = [];
let ImagHW = [];
 HWmag = [];
for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
let k = 0;
for(let i = 0; i<xn.length ; i++){
        for(let i = 0; i<W.length ; i++){
            RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
            ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
            HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
k++}
let HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){
    HWmag[i] = HWmag[i]/HWmagMax; //NORMALIZE THE VALUES
} 
//Generate the values for plotly
let freqDom = {
    x: f,
    y: HWmag,
    name: 'Transmitted Signal',
mode: 'lines',
line: {
        color:$("#TXmag").val(),
        width: $("#TXmagThicc").val(),
},}
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
//#endregion

//---------------------------------------------------- RECEIVER ---------------------

//Normalize the cut-off frequency
fc = fc/Fs;

//Pre-warp the cut-off frequency
fa=(1/Math.PI)*Math.tan(Math.PI*fc);
wa=2*Math.PI*fa;

//Compute the coefficients of analog filter
K=wa;

//Compute coefficients of digital filter
a0 = K/(2+K);
a1 = a0;
b1 = (-2+K)/(2+K);

// FILTERED TIME DOMAIN
//Generate Frequencies
let f2 = []; //frequencies
let W2 = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f2.push(i);
    W2.push(2*Math.PI*i*Ts);
}

//FILTERING PROCESS
 yn.push(a0*xn[1]);
for(let i=1; i<xn.length; i++){
    let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
    yn.push(ynVal);
}

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
let filteredTimeDom_2 = {
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
dataCombined = [timeDom,filteredTimeDom]
Plotly.newPlot("myPlot",dataCombined, layout2, config);  
//Spectrum of the filtered signal
//Compute the Spectrum
//Compute the Spectrum
 RealHW = [];
 ImagHW = [];
 HWmag_3 = [];
for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
 k = 0;
 for(let i = 0; i<yn.length ; i++){
     for(let i = 0; i<W.length ; i++){
         RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
         ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
         HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
        k++}
//  HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){
    HWmag_3[i] = HWmag_3[i]/HWmagMax; //NORMALIZE THE VALUES
    
} 
/* for(let i = 0; i<W.length ; i++){
HWmag_3[i] = HWmag[i];
}  */

let frequencySpecFiltered = {
    x: f2,
    y: HWmag_3,
    name: 'Received Signal',
    mode: 'lines',
line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
let frequencySpecFiltered_2 = {
    x: f2,
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
let dataCombined2 = [freqDom, frequencySpecFiltered]
Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

console.log($("#view").val());
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
console.log("inside")
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

     //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
 $(".windowView").on("change", function windowView(){
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
     timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
     filteredTimeDom = {
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
    

    
    if($("#view").val() == "Single Window"){
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
            x: t,
            y: yn,
            name: 'Received Signal',
            mode: 'lines',
        line: {
                color:$("#RXsig").val(),
                width: $("#RXsigThicc").val(),
        },
        }
    
Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
    }

if($("#view").val() == "Two Windows"){
    let windowChangeVal1 = $("#firstWindowOpt").val();
    let windowChangeVal2 = $("#secondWindowOpt").val();
        let dataCombinedWindow = [];
        let dataCombinedWindow2 = [];
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
}})

//------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
     $(".windowView_2").on("change", function windowView(){
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
            x: f2,
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

        if($("#view2").val() == "Single Window"){
             freqDom = {
                x: f,
                y: HWmag,
                name: 'Transmitted Signal',
            mode: 'lines',
            line: {
                    color:$("#TXmag").val(),
                    width: $("#TXmagThicc").val(),
            },
            }
             frequencySpecFiltered = {
                x: f,
                y: HWmag_3,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXmag").val(),
                    width: $("#RXmagThicc").val(),
            },
            }
    Plotly.newPlot('myPlotFreqDom' , [freqDom, frequencySpecFiltered], layoutFunc,config);
        }
        let dataCombinedWindow_2 = [];
    
    if($("#view2").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt_2").val();
        let windowChangeVal2 = $("#secondWindowOpt_2").val();
            let dataCombinedWindow2 = [];
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
    }})


    //#endregion
}


// ----------------------------------------------------- FOR UPRZ ----------------------------------------------------- 
// completeDTFT_2(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_UPRZ(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
//---------------------------------------------------- TRANSMITTER ---------------------
//#region 
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;

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

//Generate the samples
 xn = [];

for(let i= 0; i<bits.length; i++){
    if(bits.charAt(i) == "1"){
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(amplitudeMark);
            }
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(amplitudeSpace);
            }
        }
    if(bits.charAt(i) == "0"){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(amplitudeSpace);
            }}
}
//Generate the values for the sampling time
for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}

//Generate the values for plotly
let timeDom = {
    x: t,
    y: xn,
    name: 'Transmitted Signal',
    mode: 'lines',
line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},}
// Plotly.newPlot("myPlotTimeDom", timeDom);
//Generate Frequencies
let W = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f.push(i);
    W.push(2*Math.PI*i*Ts);
}

//Compute the Spectrum
let RealHW = [];
let ImagHW = [];
 HWmag = [];
for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
let k = 0;
for(let i = 0; i<xn.length ; i++){
        for(let i = 0; i<W.length ; i++){
            RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
            ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
            HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
k++}
let HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
//Generate the values for plotly
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
//#endregion

//---------------------------------------------------- RECEIVER ---------------------

//Normalize the cut-off frequency
fc = fc/Fs;

//Pre-warp the cut-off frequency
fa=(1/Math.PI)*Math.tan(Math.PI*fc);
wa=2*Math.PI*fa;

//Compute the coefficients of analog filter
K=wa;

//Compute coefficients of digital filter
a0 = K/(2+K);
a1 = a0;
b1 = (-2+K)/(2+K);

// FILTERED TIME DOMAIN
//Generate Frequencies
let f2 = []; //frequencies
let W2 = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f2.push(i);
    W2.push(2*Math.PI*i*Ts);
}

//FILTERING PROCESS
 yn.push(a0*xn[1]);
 
for(let i=1; i<xn.length; i++){
    let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
    yn.push(ynVal);
}

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
dataCombined = [timeDom,filteredTimeDom]
Plotly.newPlot("myPlot",dataCombined, layout2, config); 
//Spectrum of the filtered signal
//Compute the Spectrum
//Compute the Spectrum
 RealHW = [];
 ImagHW = [];
 HWmag_3 = [];
for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
 k = 0;
 for(let i = 0; i<yn.length ; i++){
     for(let i = 0; i<W.length ; i++){
         RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
         ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
         HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
        k++}
//  HWmagMax = (Math.max(...HWmag_3));
for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES
let frequencySpecFiltered = {
    x: f2,
    y: HWmag_3,
    name: 'Received Signal',
    mode: 'lines',
line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
let dataCombined2 = [freqDom, frequencySpecFiltered]
Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

//FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
console.log($("#view").val());
//#endregion
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
     $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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
        if($("#view").val() == "Single Window"){
            timeDom = {
                x: t,
                y: xn,
                name: 'Transmitted Signal',
                mode: 'lines',
            line: {
                    color:$("#TXsig").val(),
                    width: $("#TXsigThicc").val(),
            },}
             filteredTimeDom = {
                x: t,
                y: yn,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXsig").val(),
                    width: $("#RXsigThicc").val(),
            },
            }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
        
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
}

// ----------------------------------------------------- FOR PRZ ----------------------------------------------------- 
// completeDTFT_3(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_PRZ(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
//---------------------------------------------------- TRANSMITTER ---------------------
//#region 
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;

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
//Generate the samples

for(let i= 0; i<bits.length; i++){
    if(bits.charAt(i) == "1"){
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(amplitudeMark);
            }
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(0);
            }
        }
    if(bits.charAt(i) == "0"){
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(amplitudeSpace);
            }
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(0);
            }
        }
}
//Generate the values for the sampling time
for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}

//Generate the values for plotly
let timeDom = {
    x: t,
    y: xn,
    name: 'Transmitted Signal',
    mode: 'lines',
line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},}
//Generate Frequencies
let W = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f.push(i);
    W.push(2*Math.PI*i*Ts);
}

//Compute the Spectrum
let RealHW = [];
let ImagHW = [];
 HWmag = [];
for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
let k = 0;
for(let i = 0; i<xn.length ; i++){
        for(let i = 0; i<W.length ; i++){
            RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
            ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
            HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
k++}
let HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
//Generate the values for plotly
let freqDom = {
    x: f,
    y: HWmag,
    name: 'Transmitted Signal',
mode: 'lines',
line: {
        color:$("#TXmag").val(),
        width: $("#TXmagThicc").val(),
},}
//#endregion

//---------------------------------------------------- RECEIVER ---------------------

//Normalize the cut-off frequency
fc = fc/Fs;

//Pre-warp the cut-off frequency
fa=(1/Math.PI)*Math.tan(Math.PI*fc);
wa=2*Math.PI*fa;

//Compute the coefficients of analog filter
K=wa;

//Compute coefficients of digital filter
a0 = K/(2+K);
a1 = a0;
b1 = (-2+K)/(2+K);

// FILTERED TIME DOMAIN
//Generate Frequencies
let f2 = []; //frequencies
let W2 = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f2.push(i);
    W2.push(2*Math.PI*i*Ts);
}


//FILTERING PROCESS
yn.push(a0*xn[1]);

for(let i=1; i<xn.length; i++){
    let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
    yn.push(ynVal);
}

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
dataCombined = [timeDom,filteredTimeDom]
Plotly.newPlot("myPlot",dataCombined, layout2, config);  
//Spectrum of the filtered signal
//Compute the Spectrum
//Compute the Spectrum
 RealHW = [];
 ImagHW = [];
 HWmag_3 = [];
for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
 k = 0;
 for(let i = 0; i<yn.length ; i++){
     for(let i = 0; i<W.length ; i++){
         RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
         ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
         HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
        k++}
//  HWmagMax = (Math.max(...HWmag_3));
for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES
let frequencySpecFiltered = {
    x: f2,
    y: HWmag_3,
    name: 'Received Signal',
    mode: 'lines',
line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
let dataCombined2 = [freqDom, frequencySpecFiltered]
Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

//FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
console.log("inside")
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

     //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
 $(".windowView").on("change", function windowView(){
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
     timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
     filteredTimeDom = {
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
    if($("#view").val() == "Single Window"){
        timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
            x: t,
            y: yn,
            name: 'Received Signal',
            mode: 'lines',
        line: {
                color:$("#RXsig").val(),
                width: $("#RXsigThicc").val(),
        },
        }
    
Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
    }

if($("#view").val() == "Two Windows"){
    let windowChangeVal1 = $("#firstWindowOpt").val();
    let windowChangeVal2 = $("#secondWindowOpt").val();
        let dataCombinedWindow = [];
        let dataCombinedWindow2 = [];
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
}})

//------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
     $(".windowView_2").on("change", function windowView(){
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
            x: f2,
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
         console.log("EVENT HANDLER RX")
        if($("#view2").val() == "Single Window"){
            freqDom = {
                x: f,
                y: HWmag,
                name: 'Transmitted Signal',
            mode: 'lines',
            line: {
                    color:$("#TXmag").val(),
                    width: $("#TXmagThicc").val(),
            },
            }
             frequencySpecFiltered = {
                x: f,
                y: HWmag_3,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXmag").val(),
                    width: $("#RXmagThicc").val(),
            },
            }
    Plotly.newPlot('myPlotFreqDom' ,[freqDom,frequencySpecFiltered], layoutFunc,config);
        }
        let dataCombinedWindow_2 = [];
    
    if($("#view2").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt_2").val();
        let windowChangeVal2 = $("#secondWindowOpt_2").val();
            let dataCombinedWindow2 = [];
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
    }})
//#endregion

}

// ----------------------------------------------------- FOR BPNRZ - AMI ----------------------------------------------------- 
// completeDTFT_4(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_BPNRZAMI(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
//---------------------------------------------------- TRANSMITTER ---------------------
//#region 
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;

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
//Generate the samples

let bitCounter = 0;
for(let i= 0; i<bits.length; i++){
    if(bits.charAt(i) == "1" && bitCounter == 0){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(amplitudeMark);
            }
            bitCounter++;
        }
    else if(bits.charAt(i) == "1" && bitCounter == 1){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(amplitudeSpace);
            }
            bitCounter--;
        }
    if(bits.charAt(i) == "0"){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(0);
            }
        }
}
//Generate the values for the sampling time
for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}

//Generate the values for plotly
let timeDom = {
    x: t,
    y: xn,
    name: 'Transmitted Signal',
    mode: 'lines',
line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},}
//Generate Frequencies
let W = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f.push(i);
    W.push(2*Math.PI*i*Ts);
}

//Compute the Spectrum
let RealHW = [];
let ImagHW = [];
 HWmag = [];
for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
let k = 0;
for(let i = 0; i<xn.length ; i++){
        for(let i = 0; i<W.length ; i++){
            RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
            ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
            HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
k++}
let HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
//Generate the values for plotly
let freqDom = {
    x: f,
    y: HWmag,
    name: 'Transmitted Signal',
mode: 'lines',
line: {
        color:$("#TXmag").val(),
        width: $("#TXmagThicc").val(),
},}
//#endregion


//---------------------------------------------------- RECEIVER ---------------------

//Normalize the cut-off frequency
fc = fc/Fs;

//Pre-warp the cut-off frequency
fa=(1/Math.PI)*Math.tan(Math.PI*fc);
wa=2*Math.PI*fa;

//Compute the coefficients of analog filter
K=wa;

//Compute coefficients of digital filter
a0 = K/(2+K);
a1 = a0;
b1 = (-2+K)/(2+K);

// FILTERED TIME DOMAIN
//Generate Frequencies
let f2 = []; //frequencies
let W2 = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f2.push(i);
    W2.push(2*Math.PI*i*Ts);
}


//FILTERING PROCESS
 yn.push(a0*xn[1])
for(let i=1; i<xn.length; i++){
    let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
    yn.push(ynVal);
}

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
dataCombined = [timeDom,filteredTimeDom]
Plotly.newPlot("myPlot",dataCombined, layout2, config);   
//Spectrum of the filtered signal
//Compute the Spectrum
//Compute the Spectrum
 RealHW = [];
 ImagHW = [];
 HWmag_3 = [];
for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
 k = 0;
 for(let i = 0; i<yn.length ; i++){
     for(let i = 0; i<W.length ; i++){
         RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
         ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
         HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
        k++}
//  HWmagMax = (Math.max(...HWmag_3));
for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES

let frequencySpecFiltered = {
    x: f2,
    y: HWmag_3,
    name: 'Received Signal',
    mode: 'lines',
line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
let dataCombined2 = [freqDom, frequencySpecFiltered]
Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);
//FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------

    $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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

        if($("#view").val() == "Single Window"){
                    timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
            x: t,
            y: yn,
            name: 'Received Signal',
            mode: 'lines',
        line: {
                color:$("#RXsig").val(),
                width: $("#RXsigThicc").val(),
        },
        }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
//#endregion

}

// ----------------------------------------------------- FOR BPRZ - AMI -------------------------------------------------------
// completeDTFT_5(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_BPRZAMI(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
//---------------------------------------------------- TRANSMITTER ---------------------
//#region 
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;

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
//Generate the samples

let bitCounter = 0;
for(let i= 0; i<bits.length; i++){
    if(bits.charAt(i) == "1" && bitCounter == 0){
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(amplitudeMark);
            }
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(0);
            }
            bitCounter++;
        }
    else if(bits.charAt(i) == "1" && bitCounter == 1){
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(amplitudeSpace);
            }
            for(let i = Ts; i<=tb/2; i=i+Ts){
                xn.push(0);
            }
            bitCounter--;
        }
    if(bits.charAt(i) == "0"){
            for(let i = Ts; i<=tb; i=i+Ts){
                xn.push(0);
            }
        }
}
//Generate the values for the sampling time
for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}

//Generate the values for plotly
let timeDom = {
    x: t,
    y: xn,
    name: 'Transmitted Signal',
    mode: 'lines',
line: {
        color:$("#TXsig").val(),
        width: $("#TXsigThicc").val(),
},}
// Plotly.newPlot("myPlotTimeDom", timeDom);
//Generate Frequencies
let W = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f.push(i);
    W.push(2*Math.PI*i*Ts);
}

//Compute the Spectrum
let RealHW = [];
let ImagHW = [];
 HWmag = [];
for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
let k = 0;
for(let i = 0; i<xn.length ; i++){
        for(let i = 0; i<W.length ; i++){
            RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
            ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
            HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
k++}
let HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
//Generate the values for plotly
let freqDom = {
    x: f,
    y: HWmag,
    name: 'Transmitted Signal',
mode: 'lines',
line: {
        color:$("#TXmag").val(),
        width: $("#TXmagThicc").val(),
},}
//#endregion

//---------------------------------------------------- RECEIVER ---------------------

//Normalize the cut-off frequency
fc = fc/Fs;

//Pre-warp the cut-off frequency
fa=(1/Math.PI)*Math.tan(Math.PI*fc);
wa=2*Math.PI*fa;

//Compute the coefficients of analog filter
K=wa;

//Compute coefficients of digital filter
a0 = K/(2+K);
a1 = a0;
b1 = (-2+K)/(2+K);

// FILTERED TIME DOMAIN
//Generate Frequencies
let f2 = []; //frequencies
let W2 = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f2.push(i);
    W2.push(2*Math.PI*i*Ts);
}

//FILTERING PROCESS
 yn.push(a0*xn[1])
for(let i=1; i<xn.length; i++){
    let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
    yn.push(ynVal);
}

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
dataCombined = [timeDom,filteredTimeDom]
Plotly.newPlot("myPlot",dataCombined, layout2, config);  
//Spectrum of the filtered signal
//Compute the Spectrum
//Compute the Spectrum
 RealHW = [];
 ImagHW = [];
 HWmag_3 = [];
for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
 k = 0;
 for(let i = 0; i<yn.length ; i++){
     for(let i = 0; i<W.length ; i++){
         RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
         ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
         HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
        k++}
//  HWmagMax = (Math.max(...HWmag_3));
for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES

let frequencySpecFiltered = {
    x: f2,
    y: HWmag_3,
    name: 'Received Signal',
    mode: 'lines',
line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
let dataCombined2 = [freqDom, frequencySpecFiltered]
Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

//FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
     $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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
        if($("#view").val() == "Single Window"){
            timeDom = {
                x: t,
                y: xn,
                name: 'Transmitted Signal',
                mode: 'lines',
            line: {
                    color:$("#TXsig").val(),
                    width: $("#TXsigThicc").val(),
            },}
             filteredTimeDom = {
                x: t,
                y: yn,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXsig").val(),
                    width: $("#RXsigThicc").val(),
            },
            }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
//#endregion

}


// ----------------------------------------------------- FOR Biphase Mark -------------------------------------------------------
// completeDTFT_5(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_BIMARK(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
    //---------------------------------------------------- TRANSMITTER ---------------------
    //#region 
    const Fs = 48000;
    const Ts = 1/Fs;
    const tb = 1/bitrate;
    
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
    //Generate the samples
    
    let ending = 1;
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "1" && ending == 1){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                ending = 1;
            }
        else if(bits.charAt(i) == "1" && ending == 0){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                ending = 0;
      }
                                if(bits.charAt(i) == "0" && ending == 0){
                                        for(let i = Ts; i<=tb; i=i+Ts){
                                            xn.push(amplitudeMark);
                                            ending = 1;
                                        }
                                    }
                                else if(bits.charAt(i) == "0" && ending == 1){
                                        for(let i = Ts; i<=tb; i=i+Ts){
                                            xn.push(amplitudeSpace);
                                            ending = 0;
                                        }
                                    }
                                }
    //Generate the values for the sampling time
    for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}
    
    //Generate the values for plotly
    let timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
    // Plotly.newPlot("myPlotTimeDom", timeDom);
    //Generate Frequencies
    let W = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f.push(i);
        W.push(2*Math.PI*i*Ts);
    }
    
    //Compute the Spectrum
    let RealHW = [];
    let ImagHW = [];
     HWmag = [];
    for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
    let k = 0;
    for(let i = 0; i<xn.length ; i++){
            for(let i = 0; i<W.length ; i++){
                RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
                ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
                HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
    k++}
    let HWmagMax = (Math.max(...HWmag));
    for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
    //Generate the values for plotly
    let freqDom = {
        x: f,
        y: HWmag,
        name: 'Transmitted Signal',
    mode: 'lines',
    line: {
            color:$("#TXmag").val(),
            width: $("#TXmagThicc").val(),
    },}
    //#endregion
    
    //---------------------------------------------------- RECEIVER ---------------------
    
    //Normalize the cut-off frequency
    fc = fc/Fs;
    
    //Pre-warp the cut-off frequency
    fa=(1/Math.PI)*Math.tan(Math.PI*fc);
    wa=2*Math.PI*fa;
    
    //Compute the coefficients of analog filter
    K=wa;
    
    //Compute coefficients of digital filter
    a0 = K/(2+K);
    a1 = a0;
    b1 = (-2+K)/(2+K);
    
    // FILTERED TIME DOMAIN
    //Generate Frequencies
    let f2 = []; //frequencies
    let W2 = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f2.push(i);
        W2.push(2*Math.PI*i*Ts);
    }
    
    
    //FILTERING PROCESS
     yn.push(a0*xn[1]);
    for(let i=1; i<xn.length; i++){
        let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
        yn.push(ynVal);
    }
    
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
    dataCombined = [timeDom,filteredTimeDom]
    Plotly.newPlot("myPlot",dataCombined, layout2, config);   
    //Spectrum of the filtered signal
    //Compute the Spectrum
    //Compute the Spectrum
     RealHW = [];
     ImagHW = [];
     HWmag_3 = [];
    for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
     k = 0;
     for(let i = 0; i<yn.length ; i++){
         for(let i = 0; i<W.length ; i++){
             RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
             ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
             HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
            k++}
    //  HWmagMax = (Math.max(...HWmag_3));
    for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES
    let frequencySpecFiltered = {
        x: f2,
        y: HWmag_3,
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXmag").val(),
            width: $("#RXmagThicc").val(),
    },
    }
    let dataCombined2 = [freqDom, frequencySpecFiltered]
    Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

    //FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
     $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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
        if($("#view").val() == "Single Window"){
            timeDom = {
                x: t,
                y: xn,
                name: 'Transmitted Signal',
                mode: 'lines',
            line: {
                    color:$("#TXsig").val(),
                    width: $("#TXsigThicc").val(),
            },}
             filteredTimeDom = {
                x: t,
                y: yn,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXsig").val(),
                    width: $("#RXsigThicc").val(),
            },
            }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
//#endregion
    }

// ----------------------------------------------------- FOR Biphase Space -------------------------------------------------------
// completeDTFT_6(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_BISPACE(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
    //---------------------------------------------------- TRANSMITTER ---------------------
    //#region 
    const Fs = 48000;
    const Ts = 1/Fs;
    const tb = 1/bitrate;
    
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
    //Generate the samples
    
    let ending = 1;
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "0" && ending == 1){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                ending = 1;
            }
        else if(bits.charAt(i) == "0" && ending == 0){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                ending = 0;
      }
                                if(bits.charAt(i) == "1" && ending == 0){
                                        for(let i = Ts; i<=tb; i=i+Ts){
                                            xn.push(amplitudeMark);
                                            ending = 1;
                                        }
                                    }
                                else if(bits.charAt(i) == "1" && ending == 1){
                                        for(let i = Ts; i<=tb; i=i+Ts){
                                            xn.push(amplitudeSpace);
                                            ending = 0;
                                        }
                                    }
                                }
    //Generate the values for the sampling time
    for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}
    
    //Generate the values for plotly
    let timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
    // Plotly.newPlot("myPlotTimeDom", timeDom);
    //Generate Frequencies
    let W = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f.push(i);
        W.push(2*Math.PI*i*Ts);
    }
    
    //Compute the Spectrum
    let RealHW = [];
    let ImagHW = [];
     HWmag = [];
    for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
    let k = 0;
    for(let i = 0; i<xn.length ; i++){
            for(let i = 0; i<W.length ; i++){
                RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
                ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
                HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
    k++}
    let HWmagMax = (Math.max(...HWmag));
    for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
    //Generate the values for plotly
    let freqDom = {
        x: f,
        y: HWmag,
        name: 'Transmitted Signal',
    mode: 'lines',
    line: {
            color:$("#TXmag").val(),
            width: $("#TXmagThicc").val(),
    },}
    //#endregion
    
    //---------------------------------------------------- RECEIVER ---------------------
    
    //Normalize the cut-off frequency
    fc = fc/Fs;
    
    //Pre-warp the cut-off frequency
    fa=(1/Math.PI)*Math.tan(Math.PI*fc);
    wa=2*Math.PI*fa;
    
    //Compute the coefficients of analog filter
    K=wa;
    
    //Compute coefficients of digital filter
    a0 = K/(2+K);
    a1 = a0;
    b1 = (-2+K)/(2+K);
    
    // FILTERED TIME DOMAIN
    //Generate Frequencies
    let f2 = []; //frequencies
    let W2 = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f2.push(i);
        W2.push(2*Math.PI*i*Ts);
    }
    
    
    //FILTERING PROCESS
     yn.push(a0*xn[1]);
    for(let i=1; i<xn.length; i++){
        let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
        yn.push(ynVal);
    }
    
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
    dataCombined = [timeDom,filteredTimeDom]
Plotly.newPlot("myPlot",dataCombined, layout2, config); 
    //Spectrum of the filtered signal
    //Compute the Spectrum
    //Compute the Spectrum
     RealHW = [];
     ImagHW = [];
     HWmag_3 = [];
    for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
     k = 0;
     for(let i = 0; i<yn.length ; i++){
         for(let i = 0; i<W.length ; i++){
             RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
             ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
             HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
            k++}
    //  HWmagMax = (Math.max(...HWmag_3));
    for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES
   
    let frequencySpecFiltered = {
        x: f2,
        y: HWmag_3,
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXmag").val(),
            width: $("#RXmagThicc").val(),
    },
    }
    let dataCombined2 = [freqDom, frequencySpecFiltered]
    Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

    //FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
     $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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
        if($("#view").val() == "Single Window"){
            timeDom = {
                x: t,
                y: xn,
                name: 'Transmitted Signal',
                mode: 'lines',
            line: {
                    color:$("#TXsig").val(),
                    width: $("#TXsigThicc").val(),
            },}
             filteredTimeDom = {
                x: t,
                y: yn,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXsig").val(),
                    width: $("#RXsigThicc").val(),
            },
            }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
//#endregion
    }

// ----------------------------------------------------- Manchester -------------------------------------------------------
// completeDTFT_7(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_MANCHESTER(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
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
    //---------------------------------------------------- TRANSMITTER ---------------------
    //#region 
    const Fs = 48000;
    const Ts = 1/Fs;
    const tb = 1/bitrate;
    
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
    //Generate the samples
    
    let ending = 1;
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "1"){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
            }
        if(bits.charAt(i) == "0"){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
            }
    }
    //Generate the values for the sampling time
    for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}
    
    //Generate the values for plotly
    let timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
    // Plotly.newPlot("myPlotTimeDom", timeDom);
    //Generate Frequencies
    let W = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f.push(i);
        W.push(2*Math.PI*i*Ts);
    }
    
    //Compute the Spectrum
    let RealHW = [];
    let ImagHW = [];
     HWmag = [];
    for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
    let k = 0;
    for(let i = 0; i<xn.length ; i++){
            for(let i = 0; i<W.length ; i++){
                RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
                ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
                HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
    k++}
    let HWmagMax = (Math.max(...HWmag));
    for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
    //Generate the values for plotly
    let freqDom = {
        x: f,
        y: HWmag,
        name: 'Transmitted Signal',
    mode: 'lines',
    line: {
            color:$("#TXmag").val(),
            width: $("#TXmagThicc").val(),
    },}
    //#endregion
    
    //---------------------------------------------------- RECEIVER ---------------------
    
    //Normalize the cut-off frequency
    fc = fc/Fs;
    
    //Pre-warp the cut-off frequency
    fa=(1/Math.PI)*Math.tan(Math.PI*fc);
    wa=2*Math.PI*fa;
    
    //Compute the coefficients of analog filter
    K=wa;
    
    //Compute coefficients of digital filter
    a0 = K/(2+K);
    a1 = a0;
    b1 = (-2+K)/(2+K);
    
    // FILTERED TIME DOMAIN
    //Generate Frequencies
    let f2 = []; //frequencies
    let W2 = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f2.push(i);
        W2.push(2*Math.PI*i*Ts);
    }
    
    
    
    //FILTERING PROCESS
     yn.push(a0*xn[1]);
    for(let i=1; i<xn.length; i++){
        let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
        yn.push(ynVal);
    }
    
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
    dataCombined = [timeDom,filteredTimeDom]
    Plotly.newPlot("myPlot",dataCombined, layout2, config);  
    //Spectrum of the filtered signal
    //Compute the Spectrum
    //Compute the Spectrum
     RealHW = [];
     ImagHW = [];
     HWmag_3 = [];
    for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
     k = 0;
     for(let i = 0; i<yn.length ; i++){
         for(let i = 0; i<W.length ; i++){
             RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
             ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
             HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
            k++}
    //  HWmagMax = (Math.max(...HWmag_3));
    for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES
    let frequencySpecFiltered = {
        x: f2,
        y: HWmag_3,
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXmag").val(),
            width: $("#RXmagThicc").val(),
    },
    }
    let dataCombined2 = [freqDom, frequencySpecFiltered]
    Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

    //FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
     $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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
        if($("#view").val() == "Single Window"){
            timeDom = {
                x: t,
                y: xn,
                name: 'Transmitted Signal',
                mode: 'lines',
            line: {
                    color:$("#TXsig").val(),
                    width: $("#TXsigThicc").val(),
            },}
             filteredTimeDom = {
                x: t,
                y: yn,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXsig").val(),
                    width: $("#RXsigThicc").val(),
            },
            }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
//#endregion
    }

// ----------------------------------------------------- FOR Differential manchester -------------------------------------------------------
// completeDTFT_8(bits,bitrate,amplitudeSpace,amplitudeMark,fmin,fmax,fc)
function completeDTFT_DIFFMANCHESTER(bits,bitrate,amplitudeMark,amplitudeSpace,fmin,fmax,fc){
   
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
    //---------------------------------------------------- TRANSMITTER ---------------------
    //#region 
    const Fs = 48000;
    const Ts = 1/Fs;
    const tb = 1/bitrate;
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
    //Generate the samples
    
    let ending = 1;
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "1" && ending == 1){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                ending = 0;
            }
        else if(bits.charAt(i) == "1" && ending == 0){
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeSpace);
                }
                for(let i = Ts; i<=tb/2; i=i+Ts){
                    xn.push(amplitudeMark);
                }
                ending = 1;
      }
                                if(bits.charAt(i) == "0" && ending == 1){
                                    for(let i = Ts; i<=tb/2; i=i+Ts){
                                        xn.push(amplitudeSpace);
                                    }
                                    for(let i = Ts; i<=tb/2; i=i+Ts){
                                        xn.push(amplitudeMark);
                                    }
                                    ending = 1;
                                    }
                                else if(bits.charAt(i) == "0" && ending == 0){
                                    for(let i = Ts; i<=tb/2; i=i+Ts){
                                        xn.push(amplitudeMark);
                                    }
                                    for(let i = Ts; i<=tb/2; i=i+Ts){
                                        xn.push(amplitudeSpace);
                                    }
                                    ending = 0;
                                    }
                                }
    //Generate the values for the sampling time
    for(let i = 0; i<xn.length ; i++){t.push(i*Ts);}
    
    //Generate the values for plotly
    let timeDom = {
        x: t,
        y: xn,
        name: 'Transmitted Signal',
        mode: 'lines',
    line: {
            color:$("#TXsig").val(),
            width: $("#TXsigThicc").val(),
    },}
    //Generate Frequencies
    let W = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f.push(i);
        W.push(2*Math.PI*i*Ts);
    }
    
    //Compute the Spectrum
    let RealHW = [];
    let ImagHW = [];
     HWmag = [];
    for(let i = 0; i<W.length; i++){RealHW.push(0);ImagHW.push(0);HWmag.push(0);} //push zeroes to the arrays.
    let k = 0;
    for(let i = 0; i<xn.length ; i++){
            for(let i = 0; i<W.length ; i++){
                RealHW[i] = RealHW[i]+xn[k]*Math.cos(W[i]*k);
                ImagHW[i] = ImagHW[i]+xn[k]*Math.sin(W[i]*k);;
                HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
    k++}
    let HWmagMax = (Math.max(...HWmag));
    for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES
    //Generate the values for plotly
    let freqDom = {
        x: f,
        y: HWmag,
        name: 'Transmitted Signal',
    mode: 'lines',
    line: {
            color:$("#TXmag").val(),
            width: $("#TXmagThicc").val(),
    },}
    //#endregion
    
    //---------------------------------------------------- RECEIVER ---------------------
    
    //Normalize the cut-off frequency
    fc = fc/Fs;
    
    //Pre-warp the cut-off frequency
    fa=(1/Math.PI)*Math.tan(Math.PI*fc);
    wa=2*Math.PI*fa;
    
    //Compute the coefficients of analog filter
    K=wa;
    
    //Compute coefficients of digital filter
    a0 = K/(2+K);
    a1 = a0;
    b1 = (-2+K)/(2+K);
    
    // FILTERED TIME DOMAIN
    //Generate Frequencies
    let f2 = []; //frequencies
    let W2 = []; //angular frequency
    for(let i = fmin; i<=fmax; i++){
        f2.push(i);
        W2.push(2*Math.PI*i*Ts);
    }
    
    
    
    //FILTERING PROCESS
     yn.push(a0*xn[1]);
    for(let i=1; i<xn.length; i++){
        let ynVal = a0*xn[i]+a1*xn[i-1]-b1*yn[i-1];
        yn.push(ynVal);
    }
    
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
    dataCombined = [timeDom,filteredTimeDom]
    Plotly.newPlot("myPlot",dataCombined, layout2, config); 
    //Spectrum of the filtered signal
    //Compute the Spectrum
    //Compute the Spectrum
     RealHW = [];
     ImagHW = [];
     HWmag_3 = [];
    for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag_3[i]=(0);} //push zeroes to the arrays.
     k = 0;
     for(let i = 0; i<yn.length ; i++){
         for(let i = 0; i<W.length ; i++){
             RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
             ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
             HWmag_3[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
            }
            k++}
    //  HWmagMax = (Math.max(...HWmag_3));
    for(let i = 0; i<W.length ; i++){HWmag_3[i] = HWmag_3[i]/HWmagMax;} //NORMALIZE THE VALUES
    let frequencySpecFiltered = {
        x: f2,
        y: HWmag_3,
        name: 'Received Signal',
        mode: 'lines',
    line: {
            color:$("#RXmag").val(),
            width: $("#RXmagThicc").val(),
    },
    }
    let dataCombined2 = [freqDom, frequencySpecFiltered]
    Plotly.newPlot("myPlotFreqDom", dataCombined2, layoutFunc, config);

    //FOR TWO WINDOWS
//#region 
let timeDom_2 = {
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

let filteredTimeDom_2 = {
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

let frequencySpecFiltered_2 = {
    x: f2,
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
//#region 
//------------------------------------ FOR TWO WINDOWS TX--------------------------------------
if($("#view").val() == "Two Windows"){
    console.log("inside")
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
    
         //--------------------------- VIEW CHANGE EVENT HANDLER TX----------------------
     $(".windowView").on("change", function windowView(){
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
         timeDom = {
            x: t,
            y: xn,
            name: 'Transmitted Signal',
            mode: 'lines',
        line: {
                color:$("#TXsig").val(),
                width: $("#TXsigThicc").val(),
        },}
         filteredTimeDom = {
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
        if($("#view").val() == "Single Window"){
            timeDom = {
                x: t,
                y: xn,
                name: 'Transmitted Signal',
                mode: 'lines',
            line: {
                    color:$("#TXsig").val(),
                    width: $("#TXsigThicc").val(),
            },}
             filteredTimeDom = {
                x: t,
                y: yn,
                name: 'Received Signal',
                mode: 'lines',
            line: {
                    color:$("#RXsig").val(),
                    width: $("#RXsigThicc").val(),
            },
            }
    Plotly.newPlot('myPlot' , [timeDom,filteredTimeDom], layout2,config);
        }
    
    if($("#view").val() == "Two Windows"){
        let windowChangeVal1 = $("#firstWindowOpt").val();
        let windowChangeVal2 = $("#secondWindowOpt").val();
            let dataCombinedWindow = [];
            let dataCombinedWindow2 = [];
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
    }})
    
    //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
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
        
             //--------------------------- VIEW CHANGE EVENT HANDLER RX----------------------
         $(".windowView_2").on("change", function windowView(){
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
                x: f2,
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
            if($("#view2").val() == "Single Window"){
                freqDom = {
                    x: f,
                    y: HWmag,
                    name: 'Transmitted Signal',
                mode: 'lines',
                line: {
                        color:$("#TXmag").val(),
                        width: $("#TXmagThicc").val(),
                },
                }
                 frequencySpecFiltered = {
                    x: f,
                    y: HWmag_3,
                    name: 'Received Signal',
                    mode: 'lines',
                line: {
                        color:$("#RXmag").val(),
                        width: $("#RXmagThicc").val(),
                },
                }
        Plotly.newPlot('myPlotFreqDom' , [freqDom,frequencySpecFiltered], layoutFunc,config);
            }
            let dataCombinedWindow_2 = [];
        
        if($("#view2").val() == "Two Windows"){
            
            let windowChangeVal1 = $("#firstWindowOpt_2").val();
            let windowChangeVal2 = $("#secondWindowOpt_2").val();
                let dataCombinedWindow2 = [];
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
        }})
//#endregion
    }


    