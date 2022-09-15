let sliders_values = [];

function get_sliders_value () {

    sliders_values = [];


    let perc_slider1 = document.getElementById("slider1").value;
    let perc_slider2 = document.getElementById("slider2").value;
    let perc_slider3 = document.getElementById("slider3").value;

    sliders_values.push(perc_slider1, perc_slider2, perc_slider3);

    let sliders_value_string = perc_slider1 + " S1 ; " + perc_slider2 + " S2 ; " + perc_slider3 + " S3 ;"


    let volume0 = sliders_values[0];
    console.log(volume0 + "volume");
    rain_fx.volume = volume0/100;
    rain_fx.muted = false;

    let volume2 = sliders_values[2];
    group_fx.volume = volume2/100;
    group_fx.muted = false;

}


//TODO 
// Make a cut all sound btn
// Make functions for audio

let rain_fx = new Audio("sounds/sfx/raindrops_soe.wav")
rain_fx.muted = true;
rain_fx.play();
rain_fx.loop = true;


let group_fx = new Audio("sounds/sfx/crowd_talking_fx.wav")
group_fx.muted = true;
group_fx.play();
group_fx.loop = true;

window.onload = setInterval(get_sliders_value, 2);


console.table(sliders_values);

