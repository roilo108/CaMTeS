//Generate the samples
//GLOBAL VARIABLES
let t = []; //sampling time
let tdemod = [];
let xn = [];
let yn = [];
//FOR BANDPASS
function DTFT(bits,bitrate,fmin,fmax,amplitudeMark,amplitudeSpace,fc,fcarrier){
//define the variables
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;
let updateVal
layoutModulating = {
    title: {text: "<b>Modulating Signal</b>",
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
layoutCarrier = {
    title: {text: "<b>Carrier Signal</b>",
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
layoutFunc = {
    title: {text: "<b>Frequency Domain</b>",
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
var alerted = false;for(let i= 0; i<bits.length; i++){if (bits.charAt(i) != "1" && bits.charAt(i) != "0"){if (alerted === false){alert("Input only 1s and 0s");alerted = true;}}}

let modulating = [];
let carrier = [];
// GENERATE THE VALUES FOR TRANSMITTED ASK SIGNAL
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "1"){
                for(let i = Ts; i<=tb+(Ts*0.5); i=i+Ts){
                    // xn.push(amplitudeMark*Math.sin(2*Math.PI*fcarrier*i));
                    xn.push(amplitudeMark)
                    modulating.push(amplitudeMark)
                }}
        if(bits.charAt(i) == "0"){
                for(let i = Ts; i<=tb+(Ts*0.5); i=i+Ts){
                    // xn.push(amplitudeSpace*Math.sin(2*Math.PI*fcarrier*i));
                    xn.push(amplitudeSpace)
                    modulating.push(amplitudeSpace)
                }}
            }

            //Generate the values for the sampling time
            for(let i = Ts; i<xn.length ; i++){
                t.push(i*Ts);
            }
            for(let i = Ts; i<xn.length+63 ; i++){
                tdemod.push(i*Ts);
            }
            //FOR FIXING THE PLOT and Values
            for(let i  = 0; i<xn.length ; i++){
                xn[i] = xn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
                carrier[i] = Math.sin(2*Math.PI*fcarrier*t[i]);
            }

//Generate the values for plotly
let modulatingSignal = [{
    x: t,
    y: modulating,
    mode: "lines",
    name: 'Modulating Signal',
    line: {
        color:$("#modulatingSig").val(),
        width: $("#modulatingSigThicc").val(),
},
}]
let carrierSignal = [{
    x: t,
    y: carrier,
    mode: "lines",
    name: 'Modulating Signal',
    line: {
        color:$("#carrierSig").val(),
        width: $("#carrierSigThicc").val(),
},
}]
Plotly.newPlot("myPlotModulating", modulatingSignal, layoutModulating,config);
Plotly.newPlot("myPlotCarrier", carrierSignal, layoutCarrier,config);

//Generate Frequencies
let f = []; //frequencies
let W = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f.push(i);
    W.push(2*Math.PI*i*Ts);
}
//Compute the Spectrum
let RealHW = [];
let ImagHW = [];
let HWmag = [];
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

let freqDom = {
    x: f,
    y: HWmag,
    name: 'Transmitted Signal',
    line: {
        color:$("#TXmag").val(),
        width: $("#TXmagThicc").val(),
},
}
let freqDom_2 = {
    x: f,
    y: HWmag,
    xaxis: 'x2',
    yaxis: 'y2',
    name: 'Transmitted Signal',
    line: {
        color:$("#TXmag").val(),
        width: $("#TXmagThicc").val(),
},
}

//---------------------------------------------------- RECEIVER ---------------------
//cut-off frequencies
// ----------------------------------------------------------------------
fcL = fcarrier - (bandwidth/2); //lower cut off
fcH = fcarrier + (bandwidth/2); //higher cut off

if($("#bandLimiting").val() == "Enable") {
if(Math.sign(fcL) == -1){
    alert("The lower cut-off frequency must be a positive value.\n\n fcL = fcarrier - (bandwidth/2) \n" + fcL +" = "+ fcarrier +" - ("+ bandwidth +"/2)");
    return;
}
}
//Normalize the cut-off frequency
fcL = fcL/Fs;
fcH = fcH/Fs;

//Pre-warp the cut-off frequency
faL=(1/Math.PI)*Math.tan(Math.PI*fcL);
waL=2*Math.PI*faL;
faH=(1/Math.PI)*Math.tan(Math.PI*fcH);
waH=2*Math.PI*faH;

//Compute the coefficients of analog filter
A = waL * waH;
B = waH-waL

//Compute coefficients of digital filter
a0 = (2*B) / (4+2*B+A);
a2 = -(2*B) / (4+2*B+A);
b1 = (-8+2*A)/(4+2*B+A);
b2 = (4-2*B+A) / (4+2*B+A);

// FILTERED TIME DOMAIN
//Generate Frequencies
let f2 = []; //frequencies
let W2 = []; //angular frequency
for(let i = fmin; i<=fmax; i++){
    f2.push(i);
    W2.push(2*Math.PI*i*Ts);
}

// Plotly.newPlot("myPlotFreqResponse", frequencyResponse); 
yn.push(a0*xn[0])
yn.push(a0*xn[1]-b1*yn[0]);

//FILTERING PROCESS
for(let i=2; i<xn.length; i++){
    let ynVal = a0*xn[i]+a2*xn[i-2]-b1*yn[i-1]-b2*yn[i-2];
    yn.push(ynVal);
}
// ----------------------------------------------------------------------
let filteredTimeDom = [{
    x: t,
    y: yn,
}]

//Spectrum of the filtered signal
//Compute the Spectrum
 RealHW = [];
 ImagHW = [];
 HWmag = [];
for(let i = 0; i<W2.length; i++){RealHW[i]=(0);ImagHW[i]=(0);HWmag[i]=(0);} //push zeroes to the arrays.
 k = 0;
 for(let i = 0; i<yn.length ; i++){
     for(let i = 0; i<W.length ; i++){
         RealHW[i] = RealHW[i]+yn[k]*Math.cos(W2[i]*k);
         ImagHW[i] = ImagHW[i]+yn[k]*Math.sin(W2[i]*k);;
         HWmag[i] = Math.sqrt(Math.pow(RealHW[i],2) + Math.pow(ImagHW[i],2));
        }
        k++}
//  HWmagMax = (Math.max(...HWmag));
for(let i = 0; i<W.length ; i++){HWmag[i] = HWmag[i]/HWmagMax;} //NORMALIZE THE VALUES


let frequencySpecFiltered = {
    x: f2,
    y: HWmag,
    name: 'Received Signal',
    line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
let frequencySpecFiltered_2 = {
    x: f2,
    y: HWmag,
    name: 'Received Signal',
    xaxis: 'x2',
    yaxis: 'y2',
    line: {
        color:$("#RXmag").val(),
        width: $("#RXmagThicc").val(),
},
}
if($("#bandLimiting").val() == "Disable") {
    $("#view2").val("Single Window");
    Plotly.newPlot("myPlotFreqDom",[freqDom],layoutFunc,config );}
else {
    if($("#view2").val()=="Two Windows") Plotly.newPlot("myPlotFreqDom",[freqDom,frequencySpecFiltered_2], layoutFunc_2, config);
    else Plotly.newPlot("myPlotFreqDom",[freqDom,frequencySpecFiltered], layoutFunc, config);
}
$(".windowView_2").on("change", function windowView(){
    if(functionCounter>0){
    if($("#view2").val()=="Two Windows") Plotly.newPlot("myPlotFreqDom",[freqDom,frequencySpecFiltered_2], layoutFunc_2, config);
    else Plotly.newPlot("myPlotFreqDom",[freqDom,frequencySpecFiltered], layoutFunc, config);
}
  })
}

    