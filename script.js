function cast_li_b(){
    var x = document.getElementById("sub_li_drop_id");
        y = document.getElementById("li_drop_js");
        if (x.hidden=true) {
            x.hidden=false;
            y.style.backgroundColor = "rgba(0, 18, 73, .5)";
        }

}

function gof(){
    var x = document.getElementById("sub_li_drop_id");
        y = document.getElementById("li_drop_js");
        if (x.hidden===false) {
            x.hidden=true;
            y.style.backgroundColor = "rgba(0, 0, 0, .0)";

        }

}
function sn(){
    document.getElementById("bars").style.display="none";
    document.getElementById("tnav_top").style.backgroundColor="#fff";
    document.getElementById("tnav_top").style.display="flex";
    document.getElementById("thex").style.display="flex";
    const anchors = document.querySelectorAll('.nav_top_a');

    // Set the desired color (e.g., red) for all anchor tags
    const desiredColor = '#000';

    // Loop through all anchor tags and set the color
    anchors.forEach(anchor => {
        anchor.style.color = desiredColor;
    });

}
function hidex(){
    document.getElementById("bars").style.display="block";
    document.getElementById("tnav_top").style.display="none";
    document.getElementById("thex").style.display="none";
}
/*function so(){
    var x = document.getElementById("sub_li_drop_id");
    if (x.hidden==false) {
        x.hidden=false
    }
}*/
function cast_li_a(){
    var x = document.getElementById("contact_us");
        y = document.getElementById("li_drop_jsa");
        if (x.hidden=true) {
            x.hidden=false;
            y.style.backgroundColor = "rgba(0, 18, 73, .5)";
        }

}

function cast_li_aa(){
    var x = document.getElementById("contact_us");
        y = document.getElementById("li_drop_jsa");
        if (x.hidden==false) {
            x.hidden=true;
            y.style.backgroundColor = "rgba(0, 0, 0, .0)";

        }

}

/*if (x.style.display="inline-flex") {
    x.style.display="none";
    y.style.backgroundColor = "rgba(0, 0, 0, .0)";

}*/