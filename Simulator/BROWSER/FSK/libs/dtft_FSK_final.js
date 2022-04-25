//GLOBAL VARIABLES
let t = []; //sampling time
let xn = [];
let yn = [];
let endValues = []

//FOR BANDPASS
function DTFT(bits,bitrate,fmin,fmax,amplitudeMark,amplitudeSpace,fc){
//define the variables
const Fs = 48000;
const Ts = 1/Fs;
const tb = 1/bitrate;
let updateVal
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
    tModulator = [];
    // GENERATE THE VALUES FOR TRANSMITTED FSK SIGNAL
    let step_mark = Math.round(frequencyMark);
    let step_space = Math.round(frequencySpace);
    
    let converter_output = [];
    let modulator = [];
    for(let i= 0; i<bits.length; i++){
        if(bits.charAt(i) == "1"){
                for(let i = 0; i<=tb; i=i+Ts){
                    converter_output.push(1);
                    modulator.push(amplitude);
                }}
        if(bits.charAt(i) == "0"){
                for(let i = 0; i<=tb; i=i+Ts){
                    converter_output.push(-1);
                    modulator.push(-amplitude);
                }}
    }
    for(let i = Ts; i<modulator.length ; i++){
        tModulator.push(i*Ts);
    }
    //generate the values of t:
let xValues = [];
for(let i =0 ; i<=1 ; i+=1/48000){
    let x = amplitude * Math.sin(2*Math.PI*i);
    xValues.push(x);
}
//START BIT DETECTOR
let firstLoopDetect = 0;

    if(bits.charAt(0) == "1"){
        firstLoopDetect = 0
    }
    else{
        firstLoopDetect = 1;
    }
 

//CONDITIONS:
let FSKsignal = [0];
let tFSKsignal = [];
let counter = 0;
let index = 1;
for(let k = 0; k<converter_output.length ; k++){



    if(converter_output[k] == 1){
        index = Math.round(step_mark+index);
        if(index >= 47999){
            counter = 0;
            index = 1;
        }
        xn.push(xValues[index]);
        if(firstLoopDetect==0){
            // console.log(k);
            endValues.push(k-1);
            firstLoopDetect=1;
        }
    }
    else{
        index = Math.round(step_space+index);
        if(index >= 47999){
            counter = 0;
            index = 1;
        }
        xn.push(xValues[index]);
        if(firstLoopDetect==1){
            // console.log(k);
            endValues.push(k-1);
            firstLoopDetect=0;
        }
    }
    t.push(xValues[k]);
    counter++;
}
console.log(endValues)
//Generate the values for plotly
let modulatingSignal = [{
    x: tModulator,
    y: modulator,
    name: 'Modulating Signal',
    line: {
        color:$("#modulatingSig").val(),
        width: $("#modulatingSigThicc").val(),
},
}]
Plotly.newPlot("myPlotModulating", modulatingSignal, layoutModulating, config);
let carrierMark = [];
let carrierSpace = [];
let timeCarr = [];
            //Generate the values for the sampling time
            for(let i = Ts; i<xn.length ; i++){
                timeCarr.push(i*Ts);
            }
for(let i  = 0; i<xn.length ; i++){
    carrierMark[i] = Math.sin(2*Math.PI*frequencyMark*timeCarr[i]);
    carrierSpace[i] = Math.sin(2*Math.PI*frequencySpace*timeCarr[i]);
}

layoutCarrier = {
    title: {text: "<b>Carrier Signal</b>",
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
let carrierMarkSignal = {
    x: timeCarr,
    y: carrierMark,
    name: 'Frequency Mark',
    line: {
        color:$("#carrierSigMark").val(),
        width: $("#carrierSigThiccMark").val(),
},
}
let carrierSpaceSignal = {
    x: timeCarr,
    y: carrierSpace,
    xaxis: 'x2',
    yaxis: 'y2',
    name: 'Frequency Space',
    line: {
        color:$("#carrierSigSpace").val(),
        width: $("#carrierSigThiccSpace").val(),
},
}
Plotly.newPlot("myPlotCarrier", [carrierMarkSignal,carrierSpaceSignal], layoutCarrier, config);
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
Plotly.newPlot("myPlotFreqDom",[freqDom],layoutFunc,config );

/* //---------------------------------------------------- RECEIVER ---------------------
//cut-off frequencies
fcarrier = (Number(frequencyMark) + Number(frequencySpace))/2;
fcL = fcarrier - (bandwidth/2); //lower cut off
fcH = fcarrier + (bandwidth/2); //higher cut off

if(Math.sign(fcL) == -1){
    alert("The lower cut-off frequency must be a positive value.\n\nfcarrier = (frequency mark + frequency space)/2 \n" 
    + fcarrier+ " = ( "+ frequencyMark +" + " + frequencySpace +" ) / 2\n\n"  
    + "fcL = fcarrier - (bandwidth/2)\n"
    + fcL +" = "+ fcarrier +" - ("+ bandwidth +"/2)");
    return;
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

yn.push(a0*xn[0])
yn.push(a0*xn[1]-b1*yn[0]);

//FILTERING PROCESS
for(let i=2; i<xn.length; i++){
    let ynVal = a0*xn[i]+a2*xn[i-2]-b1*yn[i-1]-b2*yn[i-2];
    yn.push(ynVal);
}
let filteredTimeDom = [{
    x: t,
    y: yn,
}]

// Plotly.newPlot("myPlotTimeDom", filteredTimeDom);  
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
 HWmagMax = (Math.max(...HWmag));
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
Plotly.newPlot("myPlotFreqDom", [frequencySpecFiltered,freqDom], layoutFunc, config); 

// //------------------------------------ FOR TWO WINDOWS RX --------------------------------------
if($("#view2").val() == "Two Windows"){
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
        if($("#view2").val() == "Single Window"){
    Plotly.newPlot('myPlotFreqDom' , [frequencySpecFiltered,freqDom], layoutFunc,config);
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
    }}) */
}

    