// GUI for grain params
// Documentation: https://cocopon.github.io/tweakpane/input.html

/*
// Video Helper Function
let myVideo = document.getElementById('video1');
*/
let startTime = 0;
let endTime = 10;

const PARAMS = {
    startTime: startTime,
    endTime: endTime,
    source: 0, //sample file number in GUI drop down list
    grainSize: 0.1, //in seconds
    overlap: 0, //in seconds
    detune: 0, // detuning in cents, 100 cent = 1 semitone
    playbackrate: 1, //playback rate factor
    bpm: 108   // transport bpm
};

console.log(synth.volume.value);

const pane = new Tweakpane({
    title: 'VIRTUAL THEREMIN SOUNDS',
    expanded: true,
});


pane.addSeparator();



const soundBtn = pane.addButton({
    title: '► | ◼︎',
    label: 'sound on/off',
});

soundBtn.on('click', () => {
    if(Tone.getContext().rawContext.state == "suspended"){

        Tone.start();
        
    }
    else {
        
        Tone.getContext().rawContext.suspend();
       // Tone.Transport.stop();
        
    }
});


const bpmInput = pane.addInput(PARAMS, 'bpm', { min: 20, max: 250, step: 1 });
bpmInput.on('change', function (ev) {
    bpmIn = parseFloat(ev.value);
    Tone.Transport.bpm.value = bpmIn;
    console.log("transport bpm :"+ Tone.Transport.bpm.value);
});


pane.addSeparator();

const voices = pane.addFolder({
    title: 'THEREMIN CLASSIC',
});

const thereminBtn = pane.addButton({
    title: 'theremin voice',
  //  label: 'sound on/off',
});

const thereminSampler = pane.addButton({
    title: 'theremin sampler',
  //  label: 'sound on/off',
});

const melody = pane.addButton({
    title: 'theremin melody',
  //  label: 'sound on/off',
});




thereminBtn.on('click', () => {
    
    if(playing){
       
        playing = false; 
        console.log("playing "+ playing);
    }
    else {
        playing = true;
        console.log("playing "+ playing);
    }
});

thereminSampler.on('click', () => {
    
    if(therSampler){
        therSampler = false; 
        console.log("sampler "+ therSampler);
    }
    else {
        therSampler = true;
        console.log("sampler "+ therSampler);
    }
});

melody.on('click', () => {
    if(player.state == "started"){

        Tone.Transport.pause();
    } else {
        Tone.Transport.start();
    }
    console.log(player.state);
    /*
    if(therMelody
        player.pause();
        therMelody = false; 
      //  console.log("sampler "+ therMelody);
    }
    else {
        player.start();
        therMelody = true;
      //  console.log("sampler "+ therMelody);
    }
    */
});