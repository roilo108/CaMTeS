function PCMsound(soundArr, seconds,volume, Fs){

let audioContext = new AudioContext();
let myBuffer = audioContext.createBuffer(1, Fs*seconds, Fs);
let myArray = myBuffer.getChannelData(0);


for (let sampleNumber = 0 ; sampleNumber < soundArr.length ; sampleNumber++) {
    myArray[sampleNumber] = soundArr[sampleNumber]*volume;
  }

let src = audioContext.createBufferSource();
src.buffer = myBuffer;
src.connect(audioContext.destination);
src.start();

//clear the values
myArray = [];
}