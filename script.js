let sliders_values = [];

function get_sliders_value () {

    sliders_values = [];


    let perc_slider1 = document.getElementById("slider1").value;
    let perc_slider2 = document.getElementById("slider2").value;
    let perc_slider3 = document.getElementById("slider3").value;

    sliders_values.push(perc_slider1, perc_slider2, perc_slider3);

    let sliders_value_string = perc_slider1 + " S1 ; " + perc_slider2 + " S2 ; " + perc_slider3 + " S3 ;"


    let volume = sliders_values[0];
    console.log(volume + "volume");
    rain_fx.volume = volume/100;
    rain_fx.muted = false;

}


let rain_fx = new Audio("sounds/sfx/raindrops_soe.wav")
rain_fx.muted = true;
rain_fx.play();
rain_fx.loop = true;

window.onload = setInterval(get_sliders_value, 2);


console.table(sliders_values);

