let sliders_values = [];

let sounds = [];
let music = [];

let thunder_sfx = [];



function get_sliders_value () {

    sliders_values = [];


    let slider1 = document.getElementById("slider1").value;
    let slider2 = document.getElementById("slider2").value;
    let slider3 = document.getElementById("slider3").value;

    sliders_values.push(slider1, slider2, slider3);

    let volume0 = sliders_values[0];
    console.log(volume0 + "volume");
    sounds[0].volume = volume0/100;
    sounds[0].muted = false;

    let volume1 = sliders_values[1];
    sounds[1].volume = volume1/100;
    sounds[1].muted = false;

    let volume2 = sliders_values[2];
    sounds[2].volume = volume2/100;
    sounds[2].muted = false;

    let volume3 = document.getElementById("music_volume_slider").value;

    for (i in music) {
        music[i].volume = volume3/100;
        music[i].muted = false;
    }

}


function loadSound (sound_name) {
    s = new Audio("./sounds/sfx/" + sound_name + ".wav");
    s.muted = true;
    s.play();
    s.loop = true;

    sounds.push(s);
}


function loadMusic (music_name) {
    let m = new Audio("./sounds/music/" + music_name + ".mp3");
    m.muted = true;
    m.play();
    m.loop = true;

    music.push(m)

}



//TODO 
// Make a

function startUp () {
    loadSound("rain");
    loadSound("thunder");
    loadSound("talking");

    loadMusic("keys");
    loadMusic("drums");
    loadMusic("sax");

    for (i in sounds) {
        sounds[i].volume = 0;
        sounds[i].muted = true;
    }

    for (i in music) {
        music[i].volume = 0;
        sounds[i].muted = true;
    }

    document.getElementById("slider1").value = 0;
    document.getElementById("slider2").value = 0;
    document.getElementById("slider3").value = 0;


    document.getElementById("music_volume_slider").value = 0;
    
}

function toggle(n) {


    if (music[n].muted == true) {
        music[n].muted = false;
    }

    if (music[n].muted == false) {
        music[n].muted = true;
    }
}

window.onload = startUp();

setInterval(get_sliders_value, 100);


console.table(music);


