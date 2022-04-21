//Generate the samples
//GLOBAL VARIABLES
let t = []; //sampling time
let xn = [];
let yn = [];
let productModulator = [];
//FOR BANDPASS
function DTFT(bits,bitrate,fmin,fmax,amplitudeMark,amplitudeSpace,fc,fcarrier){
//define the variables
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;
layoutModulating = {
    title: {text: "<b>Modulating Signal</b>",
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
layoutCarrier = {
    title: {text: "<b>Carrier Signal</b>",
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
layoutFunc = {
    title: {text: "<b>Frequency Domain</b>",
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
layoutFunc_PROD = {
    title: {text: "<b>Output of Product Modulator</b>",
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
let modulating = [];
let carrier = [];
// GENERATE THE VALUES FOR TRANSMITTED ASK SIGNAL
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "1"){
                for(let i = Ts; i<tb+(0.5*Ts); i=i+Ts){
                    // xn.push(amplitudeMark*Math.sin(2*Math.PI*fcarrier*i));
                    xn.push(amplitudeMark)
                    modulating.push(Number(amplitudeMark))
                }}
        if(bits.charAt(i) == "0"){
                for(let i = Ts; i<tb+(0.5*Ts); i=i+Ts){
                    // xn.push(amplitudeSpace*Math.sin(2*Math.PI*fcarrier*i));
                    xn.push(-amplitudeMark)
                    modulating.push(-amplitudeMark)
                }}
            }
            //Generate the values for the sampling time
            for(let i = Ts; i<xn.length ; i++){
                t.push(i*Ts);
            }
            //FOR FIXING THE PLOT and Values
            for(let i  = 0; i<xn.length ; i++){
                xn[i] = xn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
                carrier[i] = Math.sin(2*Math.PI*fcarrier*t[i]);
            }
            //for output of product modulator
            for(let i  = 0; i<xn.length ; i++){
                productModulator[i] = xn[i] * Math.sin(2*Math.PI*fcarrier*t[i]);
            }
//FOR MODULATING SIGNAL
let modulatingSignal = {
    x: t,
    y: modulating,
    name: 'Transmitted Signal',
    line: {
        color:$("#modulatingSig").val(),
        width: $("#modulatingSigThicc").val(),
},
}
Plotly.newPlot("myPlotModulating",[modulatingSignal], layoutModulating, config );
//for carrier
let carrierSignal = {
    x: t,
    y: carrier,
    name: 'Transmitted Signal',
    line: {
        color:$("#carrierSig").val(),
        width: $("#carrierSigThicc").val(),
},
}
Plotly.newPlot("myPlotCarrier",[carrierSignal] , layoutCarrier, config);
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

let productModulatorPlot = {
    x: t,
    y: productModulator,
    name: 'Transmitted Signal',
    line: {
        color:$("#prodSig").val(),
        width: $("#prodSigThicc").val(),
},
}

Plotly.newPlot("myPlotFreqDom", [freqDom], layoutFunc, config); 
Plotly.newPlot("myPlotProductDom", [productModulatorPlot], layoutFunc_PROD, config); 
}

    