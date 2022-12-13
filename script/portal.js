// Load Header and Footer
$(function(){
    $("#headerHtml").load("header.html");
    $("#footerHtml").load("footer.html");
});

// Slideshow
var slideIndex = 1;
showSlides(1);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    // setTimeout(plusSlides(1), 2000); // Change image every 2 seconds
}

// Notice Popup
var popNotice = document.getElementById("popNotice");
var buttonNotice = document.getElementById("buttonNotice");
var close = popNotice.getElementsByClassName("close")[0];
var submit = popNotice.getElementsByClassName("submit")[0];
buttonNotice.onclick = function() {
    popNotice.style.display = "flex";
}
close.onclick = function() {
    popNotice.style.display = "none";
}
submit.onclick = function() {
    popNotice.style.display = "none";
}

// Info Popup
var popInfo = document.getElementById("popInfo");
var buttonInfo = document.getElementById("buttonInfo");
var close = popInfo.getElementsByClassName("close")[0];
buttonInfo.onclick = function() {
    popInfo.style.display = "flex";
}
close.onclick = function() {
    popInfo.style.display = "none";
}

// Setting Popup
var popSetting = document.getElementById("popSetting");
var buttonSetting = document.getElementById("buttonSetting");
var close = popSetting.getElementsByClassName("close")[0];
var submit = popSetting.getElementsByClassName("submit")[0];
buttonSetting.onclick = function() {
    popSetting.style.display = "flex";
}
close.onclick = function() {
    popSetting.style.display = "none";
}
submit.onclick = function() {
    popSetting.style.display = "none";
}

// All Popup
window.onclick = function(event) {
    if (event.target == popNotice) {
        popNotice.style.display = "none";
    }
    else if (event.target == popInfo) {
        popInfo.style.display = "none";
    }
    else if (event.target == popSetting) {
        popSetting.style.display = "none";
    }
}