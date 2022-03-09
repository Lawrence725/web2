// Privacy Popup
var popPrivacy = document.getElementById("popPrivacy");
var buttonPrivacy = document.getElementById("buttonPrivacy");
var close = popPrivacy.getElementsByClassName("close")[0];
buttonPrivacy.onclick = function() {
    popPrivacy.style.display = "flex";
}
close.onclick = function() {
    popPrivacy.style.display = "none";
}

// Terms Popup
var popTerms = document.getElementById("popTerms");
var buttonTerms = document.getElementById("buttonTerms");
var close = popTerms.getElementsByClassName("close")[0];
buttonTerms.onclick = function() {
    popTerms.style.display = "flex";
}
close.onclick = function() {
    popTerms.style.display = "none";
}

// All Popup
window.onclick = function(event) {
    if (event.target == popPrivacy) {
        popPrivacy.style.display = "none";
    }
    else if (event.target == popTerms) {
        popTerms.style.display = "none";
    }
}