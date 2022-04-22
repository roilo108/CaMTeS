
function executeDeltaPCMExtras2(){
  $(".loader").css("display", "flex" );
  $(document).ready(function(){
      $(executeDeltaPCMExtras2Simulation()).ready(function(){
              $(".loader").fadeOut();
      });
  });
}


function executeDeltaPCMExtras2Simulation(){
  if (functionCounter>0){
    console.time("Customize")
    let samplingStart = $("#timeStart").val()
    let numCycle = $("#numCycle").val()
    let samplingFrequency = $("#samplingFrequency").val()
    let Vlsb = $("#Vlsb").val()
    Vlsb = Number(Vlsb);
    let Vlsbp = $("#Vlsbp").val()
    Vlsbp = Number(Vlsbp);
    
    let fsp = $("#Fsp").val()
    
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
    let inputExp = "amplitude*sinusoid(2*Math.PI*frequency*x);"
        
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
    
    //----------------------------------------FOR STAIRCASE-------------------------------
    
    //transmitter
    let updateVal = 0;
    let encodedVal = [0];
    let showDataVal = [];
    console.log(showDataVal);
    console.log(encodedVal);
    let roundUpdateVal = 0;
    let bitStream = [];
    for(let i = 0; i<yValues.length ; i++){
        if(yValues[i]>=encodedVal[i]){
            bitStream.push("1");
            updateVal = updateVal + Vlsb;
            roundUpdateVal = Math.round(10000000*updateVal)/10000000;
            encodedVal.push(roundUpdateVal);
            showDataVal.push(roundUpdateVal);
        }
        else{
            bitStream.push("0");
            updateVal = updateVal - Vlsb;
            roundUpdateVal = Math.round(10000000*updateVal)/10000000;
            encodedVal.push(roundUpdateVal);
            showDataVal.push(roundUpdateVal);
        }
    }
    
    
  //------------------------------------- DPCM RECEIVER -----------------------------
  
  //generate the values
  let xValuesDac = [];
  let yValuesDac = [];
  let xValuesStairDac = [];
  for(let t = samplingStartFormulaDAC;  t<=tdur; t+=samplingPeriodDAC){  
      let add = i+1;
      xValueRoundDac = Math.round(10000000*t)/10000000
      yValueRoundDac = Math.round(10000000*(eval(exp)))/10000000;
      xValuesDac.push(xValueRoundDac);
      yValuesDac.push(eval(yValueRoundDac));
  } 
  let y = 0;
  for( y = samplingStartFormulaDAC; y<=tdur; y+=samplingPeriodDAC){  
      let xValueRoundStairDac = Math.round(10000000*y)/10000000
      xValuesStairDac.push(xValueRoundStairDac);
  }
  let xValueRoundStairDac = Math.round(10000000*y)/10000000
      xValuesStairDac.push(xValueRoundStairDac);
  // ------------------------------------ FOR DAC STAIRCASE ----------------------------
  let updateValDac = 0
  let encodedValDac = [0];
  let showDataValDac = [];
  let roundUpdateValDac = 0;
  for(let i=0; i<bitStream.length; i++){
      if(bitStream[i] == "1"){
          updateValDac = updateValDac + Vlsbp;
          // updateValDac = currency(updateValDac).add(Vlsbp); 
          roundUpdateValDac = Math.round(10000000*updateValDac)/10000000;
          encodedValDac.push(roundUpdateValDac)
          showDataValDac.push(roundUpdateValDac)
      }
      else{
          updateValDac = updateValDac - Vlsbp;
          roundUpdateValDac = Math.round(10000000*updateValDac)/10000000;
          encodedValDac.push(roundUpdateValDac)
          showDataValDac.push(roundUpdateValDac)
      }
   
  }
  
  //----------------------------- FOR TABLE 2 ---------------------------------------
  let endPlot = 0;
if(xValuesDac[xValuesDac.length-1] >= tdur) endPlot = xValuesDac[xValuesDac.length-1];
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
    y: encodedValDac,
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
    y: encodedValDac,
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
      y: showDataValDac,
      mode: 'markers',
      name: 'Encoded Values',
      line: {shape: 'hv',color: "red",},
      opacity: 0,
      type: 'scatter',
      showlegend: true,
    };
    var DACtrace4_2 = {
      x: xValuesDac,
      y: showDataValDac,
      xaxis: 'x2',
      yaxis: 'y2',
      mode: 'markers',
      name: 'Encoded Values',
      line: {shape: 'hv',color: "red"},
      opacity: 0,
      type: 'scatter',
      showlegend: true,
    };
  
      let dataFullCombi = [data,data2,DACtrace3,DACtrace4]
      Plotly.newPlot('myPlot',dataFullCombi, layout2, config);
      //------------------------------------ FOR TWO WINDOWS --------------------------------------
      let windowChangeVal1 = $("#firstWindowOpt").val();
      let windowChangeVal2 = $("#secondWindowOpt").val();
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
    console.timeEnd("Customize")

  }})
  }}