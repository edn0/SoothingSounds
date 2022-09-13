let sliders_values = [];


function get_sliders_value () {
let perc_slider1 = document.getElementById("slider1").value;
let perc_slider2 = document.getElementById("slider2").value;
let perc_slider3 = document.getElementById("slider3").value;

sliders_values.push(perc_slider1, perc_slider2, perc_slider3);

let sliders_value_string = perc_slider1 + " S1 ; " + perc_slider2 + " S2 ; " + perc_slider3 + " S3 ;"

document.getElementById("temp_feedback").innerHTML = sliders_value_string;

}

