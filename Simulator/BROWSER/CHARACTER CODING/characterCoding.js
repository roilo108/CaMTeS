
  
  
  //ASCII ARRAY
let asciiArray = [       	'NUL' ,	'SOH' ,	'STX',	'ETX',	'EOT',	'ENQ',	'ACK',	'BEL',
'BS',	'HT',	'LF',	'VT',	'FF',	'CR',	'SO',	'SI',	
       'DLE',	'DC1',	'DC2',	'DC3', 	'DC4',	'NAK',	'SYN',	'ETB',	
       'CAN',	'EM',	'SUB',	'ESC',	'FS',	'GS',	'RS',	'US',	
       'SP',	'\!',	'\"',	'#',	'$',	'%',	'&',	'\'',	
       '(',	')',	'*',	'+',	',',	'-',	'.',	'/',	
       '0',	'1',	'2',	'3',	'4',	'5',	'6',	'7',	
       '8',	'9',	':',	';',	'<',	'=',	'>',	'?',	
       '@',	'A',	'B',	'C',	'D',	'E',	'F',	'G',	
       'H',	'I',	'J',	'K',	'L',	'M', 	'N',	'O',	
       'P',	'Q',	'R',	'S',	'T',	'U',	'V',	'W',	
       'X',	'Y',	'Z',	'[',	'\\',	']',	'^',	'_',	
       '`',	'a',	'b',	'c',	'd',	'e',	'f',	'g',	
       'h',	'i',	'j',	'k',	'l',	'm',	'n',	'o',	
       'p',	'q',	'r',	's',	't',	'u',	'v',	'w',	
       'x',	'y',	'z',	'{',	'|',	'}',	'~',	'DEL',] ;

//EBCDIC ARRAY
//&lt2
let ebcdicArray = [
    "NUL",    "SOH",    "STX",    "ETX",    "PF",    "HT",    "LC",    "DEL",
    "",    "",    "SMM",    "VT",    "FF",    "CR",    "SO",    "SI",
    "DLE",    "DC1",    "DC2",    "TM",    "RES",    "NL",    "BS",    "IL",
    "CAN",    "EM",    "CC",    "CU1",    "IFS",    "IGS",    "IRS",    "IUS",
    "DS",    "SOS",    "FS",    "",    "BYP",    "LF",    "ETB",    "ESC",
    "",    "",    "SM",    "CU2",    "",    "ENQ",    "ACK",    "BEL",
    "",    "",    "SYN",    "",    "PN",    "RS",    "UC",    "EOT", //55
    "",    "",    "",    "CUB",    "DC4",    "NAK",    "",    "SUB", //63
    "BLANK",    "",    "",    "",    "",    "",    "",    "", //71
    "",    "",    "¢",    ".",    "<",    "(",    "+",    "|", //79
    "",    "",    "",    "",    "",    "",    "",    "", //87
    "",    "",    "!",    "$",    "*",    ")",    ";",    "¬", //95 end
    "-",    "/",    "",    "",    "",    "",    "",    "", //103
    "",    "",    "¦",    ",",    "%",    "_",    ">",    "?", //111  
    "",    "",    "",    "",    "",    "",    "",    "", //119
    "",    "`",    ":",    "#",    "@",    "'",    "=",    "\"", //127
    "",     "a",    "b",    "c",    "d",    "e",    "f",    "g", //135
    "h",    "i",    "",    "",    "",    "",     "",     "",    //143
    "",    "j",    "k",    "l",    "m",    "n",    "o",    "p",    
    "q",    "r",    "",    "",    "",    "",     "",    "",    
    "",    "~",    "s",    "t",    "u",    "v",    "w",    "x",    
    "y",    "z",    "",     "",    "",     "",     "",    "",    
    "",    "",    "",    "",    "",    "",     "",    "",    
    "",    "",    "",    "",    "",    "",     "",    "",    
    "{",    "A",    "B",    "C",    "D",    "E",    "F",    "G",  //199  
    "H",    "I",    "",    "",    "",     "",     "",    "",   //207 
    "}",    "J",    "K",    "L",    "M",    "N",    "O",    "P",    
    "Q",    "R",    "",    "",    "",    "",     "",    "",    
    "\\",    "",    "S",    "T",    "U",    "V",    "W",    "X",    
    "Y",    "Z",    "",    "",     "",    "",     "",    "",    
    "0",    "1",    "2",    "3",    "4",    "5",    "6",    "7",    
    "8",    "9",    "",    "",     "",     "",     "",    "EO",     
    ]

                //GLOBAL ARRAY 
                let tableArr = [];
                let characterArr = [];

    //DROP DOWN EXECUTION
    let dropVal = "";
    let dropValParity = "";
    function transmitDropDown(){
        dropVal = $('#transmitSelect').val();

        if(dropVal === "ASCII"){
            asciiLeftExec();
        }
       
         if(dropVal === "EBCDIC"){
            ebcdicLeftExec();
        }
       
    }

    function parityDropDown(){
        dropVal = $('#transmitSelect').val();
        console.log(dropVal)
        dropValParity = $('#paritySelect').val();
        console.log(dropValParity)
      if (dropVal === "ASCII"){
          if(dropValParity === "oddparity"){
              console.log("ascii odd parity");
              asciiLeftExecOddParity();
          }
          if(dropValParity === "noparity"){
            console.log("ascii no parity");
             asciiLeftExec();
         }

       
         if(dropValParity === "evenparity"){
            console.log("ascii even parity");
            asciiLeftExecEvenParity();
        }

    }
   

      if (dropVal === "EBCDIC"){
          if(dropValParity === "noparity"){
            console.log("ebcdic no parity");
             ebcdicLeftExec();
         }

        if(dropValParity === "oddparity"){
            console.log("ebcdic odd parity");
            // ebcdicLeftExecOddParity();
            ebcdicLeftExec();
        }
       
         if(dropValParity === "evenparity"){
            console.log("ebcdic even parity");
            // ebcdicLeftExecEvenParity();
            ebcdicLeftExec();
        }

    }
    }
    // parityDropDown();

    function receiveDropDown(){
        let dropVal2 = $('#receiveSelect').val();
    }
    
    //ASCII EXECUTION
    //AScII EXECUTION NO PARITY
    function asciiLeftExec(){
        test();
    // document.getElementById("asciiButton").onclick = 
    function test(){
        $(".loader").css("display", "flex" );
        $(document).ready(function(){
            $(forLoad()).ready(function(){
                    $(".loader").fadeOut();
            });
        });

        function forLoad(){

        let asciiInput = $("#asciiText").val();

        if (Boolean(asciiInput) === false || asciiInput.charAt(0) === " "){
        document.getElementById("asciiOutput").innerHTML = "";
        }
        //a<asd
        //&lt2
        let asciiInputFinal = "";
        for(let a = 0; a<asciiInput.length ; a++){
            if(asciiInput.charAt(a) == "<"){
                let asciiInputPrevious = "&lt";
                asciiInputFinal = asciiInputFinal+asciiInputPrevious;
            }
            else if(asciiArray.includes(asciiInput.charAt(a)) == false){
                //DO NOTHING
            }
        else{
            let asciiInputPrevious = asciiInput.charAt(a);
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
            }
        }
        // asciiInput = asciiInputFinal;
        document.getElementById("transmitVal2").innerHTML = asciiInputFinal;

        let indexCounter = 0;
        for(let a = 0; a<asciiInput.length ; a++){
            if(asciiArray.includes(asciiInput.charAt(a)) == false){
                //DO NOTHING
            }
            else{
            asciiCharacterEncode(asciiInput.charAt(a)); 
            characterArr[indexCounter] = asciiInput.charAt(a);
            indexCounter++
            }
        }
        asciiBin2ForOutput = ''
        tableCounter = 0;
        
        function receiveDropDown(){
            let dropVal2 = $("#receiveSelect").val();
    
            
            if(dropVal2 === "ASCII"){
                asciiCharacterDecode(asciiBin2);
   
            }
           
             if(dropVal2 === "EBCDIC"){
                ebcdicCharacterDecode(asciiBin2);
            }
        }receiveDropDown();
        
        //FOR TABLE VALUES
         var values2 = [
             characterArr,
            tableArr,
            ]
         
        var dataTable2 = [{
            type: 'table',
            header: {
              values: [["<b>Characters</b>"],["<b>Codes</b>"]],
              align: "center",
              line: {width: 1, color: 'black'},
              fill: {color: "grey"},
              font: {family: "sans", size:14, color: "white"}
            },
            cells: {
              values: values2,
              align: "center",
              line: {color: "black", width: 1},
              font: {family: "sans", size:14, color: ["black"]}
            }
            }]
            let layoutTable2 = {
                plot_bgcolor:"white",
               paper_bgcolor:"#a07832e5",
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
        
        
        Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
        tableArr = [];
        characterArr= []
        ebcdicBin1 = "";
        ebcdicDec = "";
        asciiBin2 = "";
        asciiDec = ""; 
    }}
   }

    //ASCII EXECUTION ODD PARITY
    function asciiLeftExecOddParity(){
    // document.getElementById("asciiButton").onclick =
    test(); 
    function test(){
        $(".loader").css("display", "flex" );
        $(document).ready(function(){
            $(forLoad_2()).ready(function(){
                    $(".loader").fadeOut();
            });
        });

        function forLoad_2(){
        let asciiInput = $("#asciiText").val();
            //LESS THAN FIX
            if (Boolean(asciiInput) === false || asciiInput.charAt(0) === " "){
                document.getElementById("asciiOutput").innerHTML = "";
                }
    let asciiInputFinal = "";
    for(let a = 0; a<asciiInput.length ; a++){
        if(asciiInput.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
        else if(asciiArray.includes(asciiInput.charAt(a)) == false){
            //DO NOTHING
        }
        else{
        let asciiInputPrevious = asciiInput.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
        document.getElementById("transmitVal2").innerHTML = asciiInputFinal;
        for(let a = 0; a<asciiInput.length ; a++){
            asciiCharacterEncodeOddParity(asciiInput.charAt(a)); 
        }

        let indexCounter = 0;
        for(let a = 0; a<asciiInput.length ; a++){
            if(asciiArray.includes(asciiInput.charAt(a)) == false){
                //DO NOTHING
            }
            else{
             asciiCharacterEncodeForReceive(asciiInput.charAt(a))
             characterArr[indexCounter] = asciiInput.charAt(a);
             indexCounter++
            }
        }
           asciiBin2ForOutput = ''
    asciiFinalParity="";
    tableCounter = 0;

        function receiveDropDown(){
            let dropVal2 = $("#receiveSelect").val();
            
            
            if(dropVal2 === "ASCII"){
                asciiCharacterDecode(asciiBin2);

            }
           
             if(dropVal2 === "EBCDIC"){
                ebcdicCharacterDecode(asciiBin2);
            }
        }receiveDropDown();

           //FOR TABLE VALUES
           var values2 = [
            characterArr,
           tableArr,
           ]
        
       var dataTable2 = [{
           type: 'table',
           header: {
             values: [["<b>Characters</b>"],["<b>Codes</b>"]],
             align: "center",
             line: {width: 1, color: 'black'},
             fill: {color: "grey"},
             font: {family: "sans", size:14, color: "white"}
           },
           cells: {
             values: values2,
             align: "center",
             line: {color: "black", width: 1},
             font: {family: "sans", size:14, color: ["black"]}
           }
           }]
           let layoutTable2 = {
            plot_bgcolor:"white",
           paper_bgcolor:"#a07832e5",
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
       
       Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
       tableArr = [];
       characterArr= []
        ebcdicBin1 = "";
        ebcdicDec = "";
        asciiBin2 = "";
        asciiDec = ""; 
    }}
 }

    //ASCII EXECUTION EVEN PARITY
    function asciiLeftExecEvenParity(){
//  document.getElementById("asciiButton").onclick = 
    test();
    function test(){
    $(".loader").css("display", "flex" );
    $(document).ready(function(){
        $(forLoad_3()).ready(function(){
                $(".loader").fadeOut();
        });
    });

    function forLoad_3(){
        let asciiInput = $("#asciiText").val();
                 //LESS THAN FIX
                 if (Boolean(asciiInput) === false || asciiInput.charAt(0) === " "){
                    document.getElementById("asciiOutput").innerHTML = "";
                    }
    let asciiInputFinal = "";
    for(let a = 0; a<asciiInput.length ; a++){
        if(asciiInput.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
                else if(asciiArray.includes(asciiInput.charAt(a)) == false){
            //DO NOTHING
        }else{
        let asciiInputPrevious = asciiInput.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
     document.getElementById("transmitVal2").innerHTML = asciiInputFinal;
     for(let a = 0; a<asciiInput.length ; a++){
         asciiCharacterEncodeEvenParity(asciiInput.charAt(a)); 
     }
     let indexCounter = 0;
     for(let a = 0; a<asciiInput.length ; a++){
        if(asciiArray.includes(asciiInput.charAt(a)) == false){
            //DO NOTHING
        }
        else{
         asciiCharacterEncodeForReceive(asciiInput.charAt(a))
         characterArr[indexCounter] = asciiInput.charAt(a);
         indexCounter++
        }
    }

    tableCounter = 0;
    asciiFinalParity="";


     function receiveDropDown(){
        let dropVal2 = $("#receiveSelect").val();
 
         
         if(dropVal2 === "ASCII"){
             asciiCharacterDecode(asciiBin2);

         }
        
          if(dropVal2 === "EBCDIC"){
             ebcdicCharacterDecode(asciiBin2);
         }
     }receiveDropDown();
 //FOR TABLE VALUES
           var values2 = [
            characterArr,
           tableArr,
           ]
        
       var dataTable2 = [{
           type: 'table',
           header: {
             values: [["<b>Characters</b>"],["<b>Codes</b>"]],
             align: "center",
             line: {width: 1, color: 'black'},
             fill: {color: "grey"},
             font: {family: "sans", size:14, color: "white"}
           },
           cells: {
             values: values2,
             align: "center",
             line: {color: "black", width: 1},
             font: {family: "sans", size:14, color: ["black"]}
           }
           }]
           let layoutTable2 = {
            plot_bgcolor:"white",
           paper_bgcolor:"#a07832e5",
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
       
       
       Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
       tableArr = [];
       characterArr= []

     ebcdicBin1 = "";
     ebcdicDec = "";
     asciiBin2 = "";
     asciiDec = ""; 
 }
}
}


 function receiveDropDown(){
    let dropVal2 = document.getElementById("receiveSelect").value;
}receiveDropDown();

    //EBCDIC EXECUTION
    //NO PARITY

    
    function ebcdicLeftExec(){
    // document.getElementById("asciiButton").onclick = 
    test();
    function test(){
        $(".loader").css("display", "flex" );
        $(document).ready(function(){
            $(loading_3()).ready(function(){
                    $(".loader").fadeOut();
            });
        });
        function loading_3(){
        let ebcdicInput = $("#asciiText").val();
                    //LESS THAN FIX
                    if (Boolean(ebcdicInput) === false || ebcdicInput.charAt(0) === " "){
                        document.getElementById("asciiOutput").innerHTML = "";
                        }
    let asciiInputFinal = "";
    for(let a = 0; a<ebcdicInput.length ; a++){
        if(ebcdicInput.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
        else if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
            //DO NOTHING
        }
        else{
        let asciiInputPrevious = ebcdicInput.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
        document.getElementById("transmitVal2").innerHTML = asciiInputFinal;

        for(let a = ebcdicInput.length - 1; a>=0 ; a--){
            if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
                //DO NOTHING
            }
            else{
            ebcdicCharacterEncode(ebcdicInput.charAt(a)); // dot function .charAt extracts each letter from the string
        }}

        let indexCounter = 0;
          for(let a = 0; a<ebcdicInput.length ; a++){
              console.log(ebcdicInput.charAt(a))
            if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
                //DO NOTHING
              console.log("ONE SPACE")

            }
            else{
            characterArr[indexCounter] = ebcdicInput.charAt(a);
            indexCounter++
            }
        }
        
        ebcdicBin1ForOutput = '';
        ebcdicInput = "";
        tableCounter = 0;

        function receiveDropDown(){
            let dropVal2 = $('#receiveSelect').val();
    
            
            if(dropVal2 === "ASCII"){
                asciiCharacterDecode(ebcdicBin1);

            }
           
             if(dropVal2 === "EBCDIC"){
                ebcdicCharacterDecode(ebcdicBin1);
            }
        }receiveDropDown();
    
        //FOR REVERSE
        let tableArrReversed = [];
        let tableArrCounter = 0;
        for(let i =tableArr.length-1 ; i>=0 ; i--){
            tableArrReversed[tableArrCounter] = tableArr[i];
            tableArrCounter++;
        }
        //FOR TABLE VALUES
        var values2 = [
            characterArr,
            tableArrReversed,
           ]
        
       var dataTable2 = [{
           type: 'table',
           header: {
             values: [["<b>Characters</b>"],["<b>Codes</b>"]],
             align: "center",
             line: {width: 1, color: 'black'},
             fill: {color: "grey"},
             font: {family: "sans", size:14, color: "white"}
           },
           cells: {
             values: values2,
             align: "center",
             line: {color: "black", width: 1},
             font: {family: "sans", size:14, color: ["black"]}
           }
           }]
           let layoutTable2 = {
            plot_bgcolor:"white",
           paper_bgcolor:"#a07832e5",
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
       
       Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
       tableArr = [];
       characterArr= []

        ebcdicDec = "";
        asciiBin2 = "";
        asciiDec = ""; 
        ebcdicBin1 = "";
            
}}
        
    }

    //ODD PARITY
    function ebcdicLeftExecOddParity(){
    // document.getElementById("asciiButton").onclick =
    test(); 
    function test(){
        $(".loader").css("display", "flex" );
        $(document).ready(function(){
            $(loading()).ready(function(){
                    $(".loader").fadeOut();
            });
        });
        function loading(){
            let ebcdicInput = $("#asciiText").val();
            //LESS THAN FIX
            if (Boolean(ebcdicInput) === false || ebcdicInput.charAt(0) === " "){
                document.getElementById("asciiOutput").innerHTML = "";
                }
    let asciiInputFinal = "";
    for(let a = 0; a<ebcdicInput.length ; a++){
        if(ebcdicInput.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
        
        else if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
            //DO NOTHING
        }
        else{
        let asciiInputPrevious = ebcdicInput.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
        document.getElementById("transmitVal2").innerHTML = asciiInputFinal;

        for(let a = ebcdicInput.length - 1; a>=0 ; a--){
            if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
                //DO NOTHING
            }
            else{
            ebcdicCharacterEncodeOddParity(ebcdicInput.charAt(a)); // dot function .charAt extracts each letter from the string
            }
        }

        ebcdicBin1 = "";
        for(let a = ebcdicInput.length - 1; a>=0 ; a--){
            if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
                //DO NOTHING
            }
            else{
            ebcdicCharacterEncodeForReceive(ebcdicInput.charAt(a)); // dot function .charAt extracts each letter from the string
            }
        }

        let indexCounter = 0;
          for(let a = 0; a<ebcdicInput.length ; a++){
              console.log(ebcdicInput.charAt(a))
            if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
                //DO NOTHING
              console.log("ONE SPACE")

            }
            else{
            characterArr[indexCounter] = ebcdicInput.charAt(a);
            indexCounter++
            }
        }
        // ebcdicBin1 = '';
        ebcdicBin1ForOutput = '';
    ebcdicFinalParity = '';
        ebcdicInput = "";
        ebcdicDec = '';
      
        ebcdicBin1ForOutput = '';
        ebcdicInput = "";
        tableCounter = 0;


        function receiveDropDown(){
            let dropVal2 = $('#receiveSelect').val();
    
            
            if(dropVal2 === "ASCII"){
                asciiCharacterDecode(ebcdicBin1);

            }
           
             if(dropVal2 === "EBCDIC"){
                ebcdicCharacterDecode(ebcdicBin1);
            }
        }receiveDropDown();
    
          //FOR REVERSE
          let tableArrReversed = [];
          let tableArrCounter = 0;
          for(let i =tableArr.length-1 ; i>=0 ; i--){
              tableArrReversed[tableArrCounter] = tableArr[i];
              tableArrCounter++;
          }
          //FOR TABLE VALUES
          var values2 = [
            characterArr,
            tableArrReversed,
           ]
        
       var dataTable2 = [{
           type: 'table',
           header: {
             values: [["<b>Characters</b>"],["<b>Codes</b>"]],
             align: "center",
             line: {width: 1, color: 'black'},
             fill: {color: "grey"},
             font: {family: "sans", size:14, color: "white"}
           },
           cells: {
             values: values2,
             align: "center",
             line: {color: "black", width: 1},
             font: {family: "sans", size:14, color: ["black"]}
           }
           }]
           let layoutTable2 = {
            plot_bgcolor:"white",
           paper_bgcolor:"#a07832e5",
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
       
       
       Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
       tableArr = [];
       characterArr= []
        ebcdicDec = "";
        asciiBin2 = "";
        asciiDec = ""; 
        ebcdicBin1 = "";
            
}}
        
    }

    //EVEN PARITY
    function ebcdicLeftExecEvenParity(){
    // document.getElementById("asciiButton").onclick = 
    test();
    function test(){
        $(".loader").css("display", "flex" );
        $(document).ready(function(){
            $(loading_1()).ready(function(){
                    $(".loader").fadeOut();
            });
        });
        function loading_1(){
            let ebcdicInput = $("#asciiText").val();
            //LESS THAN FIX
            if (Boolean(ebcdicInput) === false || ebcdicInput.charAt(0) === " "){
                document.getElementById("asciiOutput").innerHTML = "";
                }
    let asciiInputFinal = "";
    for(let a = 0; a<ebcdicInput.length ; a++){
        if(ebcdicInput.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
        else if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
            //DO NOTHING
        }
        else{
        let asciiInputPrevious = ebcdicInput.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
        document.getElementById("transmitVal2").innerHTML = asciiInputFinal;

        for(let a = ebcdicInput.length - 1; a>=0 ; a--){
            if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
                //DO NOTHING
            }
            else{
            ebcdicCharacterEncodeEvenParity(ebcdicInput.charAt(a)); // dot function .charAt extracts each letter from the string
        }}
    ebcdicFinalParity = '';

    ebcdicBin1 = "";
    for(let a = ebcdicInput.length - 1; a>=0 ; a--){
        if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
            //DO NOTHING
        }
        else{
        ebcdicCharacterEncodeForReceive(ebcdicInput.charAt(a)); // dot function .charAt extracts each letter from the string
        }
    }

    let indexCounter = 0;
    for(let a = 0; a<ebcdicInput.length ; a++){
        console.log(ebcdicInput.charAt(a))
      if(ebcdicArray.includes(ebcdicInput.charAt(a)) == false){
          //DO NOTHING
        console.log("ONE SPACE")

      }
      else{
      characterArr[indexCounter] = ebcdicInput.charAt(a);
      indexCounter++
      }
  }
tableCounter = 0;

        ebcdicInput = "";

        function receiveDropDown(){
            let dropVal2 = $('#receiveSelect').val();
    
            
            if(dropVal2 === "ASCII"){
                asciiCharacterDecode(ebcdicBin1);

            }
           
             if(dropVal2 === "EBCDIC"){
                ebcdicCharacterDecode(ebcdicBin1);
            }
        }receiveDropDown();
         //FOR REVERSE
         let tableArrReversed = [];
         let tableArrCounter = 0;
         for(let i =tableArr.length-1 ; i>=0 ; i--){
             tableArrReversed[tableArrCounter] = tableArr[i];
             tableArrCounter++;
         }
    //FOR TABLE VALUES
    var values2 = [
        characterArr,
        tableArrReversed,
       ]
    
   var dataTable2 = [{
       type: 'table',
       header: {
         values: [["<b>Characters</b>"],["<b>Codes</b>"]],
         align: "center",
         line: {width: 1, color: 'black'},
         fill: {color: "grey"},
         font: {family: "sans", size:14, color: "white"}
       },
       cells: {
         values: values2,
         align: "center",
         line: {color: "black", width: 1},
         font: {family: "sans", size:14, color: ["black"]}
       }
       }]
       let layoutTable2 = {
        plot_bgcolor:"white",
       paper_bgcolor:"#a07832e5",
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
   
   Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});
   tableArr = [];
   characterArr= []
        ebcdicDec = "";
        asciiBin2 = "";
        asciiDec = ""; 
        ebcdicBin1 = "";
            
}}
        
    }


//ASCII PROGRAM
let asciiBin2="";
let asciiBin2ForOutput="";
let asciiBinary="";
let asciiInput = "";
let parityCounter = 0;
let asciiInputParity = '';
let asciiFinalParity = '';
let tableCounter = 0;
//NO PARITY
   function asciiCharacterEncode(asciiCharacter){
     
    for(let i= 0; i< asciiArray.length ; i++){
            if(asciiArray[i] == asciiCharacter){
             let asciiBin = i.toString(2).padStart(7,'0'); 
             tableArr[tableCounter] = asciiBin;   
             asciiBin2 = asciiBin + asciiBin2 ;
             asciiBin2ForOutput = " "+ asciiBin + asciiBin2ForOutput ;
             document.getElementById("asciiOutput").innerHTML = asciiBin2ForOutput;
            }       
        }
        tableCounter++;
        return asciiBin2;
    }
   function asciiCharacterEncodeForReceive(asciiCharacter){
    for(let i= 0; i< asciiArray.length ; i++){
            if(asciiArray[i] == asciiCharacter){
             let asciiBin = i.toString(2).padStart(7,'0'); 
             asciiBin2 = asciiBin + asciiBin2;
            }       
        }
        return asciiBin2;
    }
//ODD PARITY
function asciiCharacterEncodeOddParity(asciiCharacter){
    // tableCounter = 0;
 for(let i= 0; i< asciiArray.length ; i++){
         if(asciiArray[i] == asciiCharacter){
          let asciiBin = i.toString(2).padStart(7,'0'); 
         
          asciiBin2 = asciiBin + asciiBin2;
         }       
        }
       
       
    let a=asciiBin2.length-7;
    let b=asciiBin2.length; 
        for(let i=0; i<=(asciiBin2.length/7)-1; i++){
            let substring = asciiBin2.substring(a,b);
            for (let i=0; i<=substring.length; i++){
                if (substring.charAt(i) === '1'){
                    parityCounter++;
                }
            }
            if (parityCounter%2 == 0){
                asciiInputParity = substring.toString(2).padStart(8,"1");
                parityCounter=0;
        
            } else {
                asciiInputParity = substring.toString(2).padStart(8,"0");
                parityCounter=0;
            }
            tableArr[tableCounter] = asciiInputParity;
            tableCounter++;
            asciiFinalParity = " "+asciiInputParity + asciiFinalParity;


            a = a-7;
            b = b-7;
            document.getElementById("asciiOutput").innerHTML = asciiFinalParity;  
            // return asciiBin2;
        }    

        asciiBin2 = '';
        return asciiFinalParity;
        
    }


//EVEN PARITY
function asciiCharacterEncodeEvenParity(asciiCharacter){
 for(let i= 0; i< asciiArray.length ; i++){
         if(asciiArray[i] == asciiCharacter){
          let asciiBin = i.toString(2).padStart(7,'0'); 
          asciiBin2 = asciiBin + asciiBin2;
         }       
        }
    let a=asciiBin2.length-7;
    let b=asciiBin2.length; 
        for(let i=0; i<=(asciiBin2.length/7)-1; i++){
            let substring = asciiBin2.substring(a,b);
            for (let i=0; i<=substring.length; i++){
                if (substring.charAt(i) === '1'){
                    parityCounter++;
                }
            }
            if (parityCounter%2 == 0){
                asciiInputParity = substring.toString(2).padStart(8,"0");
                parityCounter=0;
        
            } else {
                asciiInputParity = substring.toString(2).padStart(8,"1");
                parityCounter=0;
            }
            tableArr[tableCounter] = asciiInputParity;
            tableCounter++;
            asciiFinalParity = " "+asciiInputParity + asciiFinalParity;
            a = a-7;
            b = b-7;
            document.getElementById("asciiOutput").innerHTML = asciiFinalParity;  
            // return asciiBin2;
        }    
 
        asciiBin2 = '';
        return asciiFinalParity;
    }



//ASCII DECODE
let asciiDec = ""; 

function asciiCharacterDecode(asciiBinary){
    let a = asciiBinary.length-7;
    let b = asciiBinary.length;
    for(i=0; i<asciiBinary.length/7; i++){
        let substring = asciiBinary.substring(a,b); //substring extracts a part of the string
        let decConvert = (parseInt(substring, 2)); //(parseInt(substring, 2)) converts binary to decimal
        let asciiDec1 = asciiArray[decConvert];
        
        asciiDec = asciiDec + asciiDec1;    
        a = a-7;
        b = b-7;
    }
    //LESS THAN FIX
    let asciiInputFinal = "";
    for(let a = 0; a<asciiDec.length ; a++){
        if(asciiDec.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }else{
        let asciiInputPrevious = asciiDec.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
    document.getElementById("ebcdicOutput").innerHTML = asciiInputFinal;
}


//EBCDIC PROGRAM
let ebcdicBin1 = "";
let ebcdicBin1ForOutput = "";
let ebcdicInputParity = '';
let ebcdicFinalParity = '';
//NO PARITY
function ebcdicCharacterEncode(ebcdicCharacter){
    for(let i= 0; i<= ebcdicArray.length ; i++){
            if(ebcdicArray[i] == ebcdicCharacter){
            let ebcdicBin = i.toString(2).padStart(8,'0'); 
            tableArr[tableCounter] = ebcdicBin;  
            ebcdicBin1 += ebcdicBin;
            ebcdicBin1ForOutput =  ebcdicBin1ForOutput + ebcdicBin+ " ";
        }
        document.getElementById("asciiOutput").innerHTML = ebcdicBin1ForOutput;
    }        
    tableCounter++;
    return ebcdicBin1;
}
function ebcdicCharacterEncodeForReceive(ebcdicCharacter){

    console.log(ebcdicCharacter);
    for(let i= 0; i<= ebcdicArray.length ; i++){
            if(ebcdicArray[i] == ebcdicCharacter){
             ebcdicBin = i.toString(2).padStart(8,'0'); 
             ebcdicBin1 += ebcdicBin;
        }
    }       
    console.log(ebcdicBin1);
    return ebcdicBin1
}

//ODD PARITY
function ebcdicCharacterEncodeOddParity(ebcdicCharacter){
    for(let i= 0; i<= ebcdicArray.length ; i++){
            if(ebcdicArray[i] == ebcdicCharacter){
             let ebcdicBin = i.toString(2).padStart(8,'0'); 
             ebcdicBin1 += ebcdicBin;
            }
    }
    let a = ebcdicBin1.length-8;
    let b = ebcdicBin1.length;
    for(let i=0; i<=(ebcdicBin1.length/8)-1; i++){
        let substring = ebcdicBin1.substring(a,b);
        for (let i=0; i<=substring.length; i++){
            if (substring.charAt(i) === '1'){
                parityCounter++;
            }
        }
        if (parityCounter%2 == 0){
            ebcdicInputParity = substring.toString(2).padStart(9,"1");
            parityCounter=0;
        } else {
            ebcdicInputParity = substring.toString(2).padStart(9,"0");
            parityCounter=0;
        }
        tableArr[tableCounter] = ebcdicInputParity;
        tableCounter++;

        ebcdicFinalParity = ebcdicFinalParity + ebcdicInputParity + " ";
        a = a-8;
        b = b-8;
        document.getElementById("asciiOutput").innerHTML = ebcdicFinalParity;
        return ebcdicBin1;

    }
    ebcdicBin1 = '';
    return ebcdicFinalParity;
}

//EVEN PARITY
function ebcdicCharacterEncodeEvenParity(ebcdicCharacter){
    for(let i= 0; i<= ebcdicArray.length ; i++){
            if(ebcdicArray[i] == ebcdicCharacter){
             let ebcdicBin = i.toString(2).padStart(8,'0'); 
             ebcdicBin1 += ebcdicBin;
            }
    }
    let a = ebcdicBin1.length-8;
    let b = ebcdicBin1.length;
    for(let i=0; i<=(ebcdicBin1.length/8)-1; i++){
        let substring = ebcdicBin1.substring(a,b);
        for (let i=0; i<=substring.length; i++){
            if (substring.charAt(i) === '1'){
                parityCounter++;
            }
        }
        if (parityCounter%2 == 0){
            ebcdicInputParity = substring.toString(2).padStart(9,"0");
            parityCounter=0;
        } else {
            ebcdicInputParity = substring.toString(2).padStart(9,"1");
            parityCounter=0;
        }
        tableArr[tableCounter] = ebcdicInputParity;
        tableCounter++;

        ebcdicFinalParity = ebcdicFinalParity + ebcdicInputParity + " ";
        a = a-8;
        b = b-8;
        document.getElementById("asciiOutput").innerHTML = ebcdicFinalParity;
        return ebcdicBin1;

    }
    ebcdicBin1 = '';
    return ebcdicFinalParity;
}

//EBCDIC DECODE
let ebcdicDec = "";
let ebcdicBinary="";
function ebcdicCharacterDecode(ebcdicBinary){
    console.log(ebcdicBinary);
let a = ebcdicBinary.length-8;
let b = ebcdicBinary.length;
for(i=0; i<ebcdicBinary.length/8; i++){
    let substring = ebcdicBinary.substring(a,b); //substring extracts a part of the string
    let decConvert = (parseInt(substring, 2)); //(parseInt(substring, 2)) converts binary to decimal
    let ebcdicDec1 = ebcdicArray[decConvert];
    ebcdicDec += ebcdicDec1;         
    a = a-8;
    b = b-8;
}
    //LESS THAN FIX
    let asciiInputFinal = "";
    for(let a = 0; a<ebcdicDec.length ; a++){
        if(ebcdicDec.charAt(a) == "<"){
            let asciiInputPrevious = "&lt";
            asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }else{
        let asciiInputPrevious = ebcdicDec.charAt(a);
        asciiInputFinal = asciiInputFinal+asciiInputPrevious;
        }
    }
document.getElementById("ebcdicOutput").innerHTML = asciiInputFinal;
}




//FOR INIT
var values2 = [
    tableArr
]
var dataTable2 = [{
    type: 'table',
    header: {
      values: [["<b>Characters</b>"],["<b>Codes</b>"]],
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "sans", size:14, color: "white"}
    },
    cells: {
      values: values2,
      align: "center",
      line: {color: "black", width: 1},
      font: {family: "sans", size:14, color: ["black"]}
    }
    }]
    let layoutTable2 = {
        plot_bgcolor:"white",
       paper_bgcolor:"#a07832e5",
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

Plotly.newPlot('myPlotTable', dataTable2,layoutTable2,{displayModeBar: false, responsive: true,});



// for TAB style

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
    showPanel(0,'#B65E16');