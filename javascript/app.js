// Portfolio
function usingES6() {
    "use strict";

    try { eval("var y = (x)=>x+1"); }
    catch (e) { return false; }
    return true;
}

usingES6();

if (usingES6()) {
    var getCurrentYear = () => {
    var _date = new Date();
    var _year = _date.getFullYear();
    document.getElementById("legal").innerHTML = `Copyright \u00A9 ${_year} Rosemari Jemison Burton`;
    };
    
} else {
    var getCurrentYear = function () {
    var _date = new Date();
    var _year = _date.getFullYear();
    document.getElementById("legal").innerHTML = "Copyright \u00A9" + _year+ " Rosemari Jemison Burton";
    };
}

$(window).on("load", function(){
    getCurrentYear();
});


//whatIdo = () => {
    // Front-End

    // <iframe src="https://giphy.com/embed/xUNda1t8JRgpyoC6re" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-light-rain-xUNda1t8JRgpyoC6re">via GIPHY</a></p>

    // Back-End
    
//};
