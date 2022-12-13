// Mobile Search
// var logo = document.getElementById("headerLeft");
// var search = document.getElementById("headerCenter");
// var button = document.getElementById("buttonSearch");
// button.onclick = function() {
//     if (window.getComputedStyle(logo).display === "flex") {
//         logo.style.display = "none";
//         search.style.display = "flex";
//     }
//     else if (window.getComputedStyle(logo).display === "none") {
//         logo.style.display = "flex";
//         search.style.display = "none";
//     }
// }
// window.addEventListener("resize", function() {
//     if (window.matchMedia("(min-width: 768px)").matches) {
//         logo.style.display = "flex";
//         search.style.display = "flex";
//     } else {
//         logo.style.display = "flex";
//         search.style.display = "none";
//     }
// })

// Verify Popup
// var popVerify = document.getElementById("popVerify");
// var buttonVerify = document.getElementById("profile");
// var close = popVerify.getElementsByClassName("close")[0];
// var submit = popVerify.getElementsByClassName("submit")[0];
// buttonVerify.onclick = function() {
//     popVerify.style.display = "flex";
// }
// close.onclick = function() {
//     popVerify.style.display = "none";
// }
// submit.onclick = function() {
//     popVerify.style.display = "none";
// }

// Popup close
function popClose(e) {
    document.getElementById(e).style.display = "none";
    document.body.style.overflow = "scroll"; }

// Popup (Point)
function popPoint() {
    document.getElementById("popPoint").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Profile Popup
var popProfile = document.getElementById("popProfile");
var buttonProfile = document.getElementById("profile");
var close = popProfile.getElementsByClassName("close")[0];
var cancel = popProfile.getElementsByClassName("cancel")[0];
var submit = popProfile.getElementsByClassName("submit")[0];
buttonProfile.onclick = function() {
    popProfile.style.display = "flex";
}
close.onclick = function() {
    popProfile.style.display = "none";
}
cancel.onclick = function() {
    popProfile.style.display = "none";
}
submit.onclick = function() {
    popProfile.style.display = "none";
}

// Item Popup
var popItem = document.getElementById("popItem");
var close = popItem.getElementsByClassName("close")[0];
var submit = popItem.getElementsByClassName("submit")[0];
close.onclick = function() {
    popItem.style.display = "none";
}
submit.onclick = function() {
    popItem.style.display = "none";
}
window.onload = function() {
    var items = document.getElementsByClassName('item');
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        item.onclick = function() {
            popItem.style.display = "flex";
        }
    }
}

// Cart Popup
var popCart = document.getElementById("popCart");
var buttonCart = document.getElementById("buttonCart");
var buttonCart2 = document.getElementsByClassName("buttonCart")[0];
var close = popCart.getElementsByClassName("close")[0];
var submit = popCart.getElementsByClassName("submit")[0];
buttonCart.onclick = function() {
    popCart.style.display = "flex";
}
buttonCart2.onclick = function() {
    popCart.style.display = "flex";
}
close.onclick = function() {
    popCart.style.display = "none";
}
submit.onclick = function() {
    popCart.style.display = "none";
}

// All Popup
window.onclick = function(event) {
    // if (event.target == popVerify) {
    //     popVerify.style.display = "none";
    // }
    if (event.target == popProfile) {
        popProfile.style.display = "none";
    }
    else if (event.target == popItem) {
        popItem.style.display = "none";
    }
    else if (event.target == popCart) {
        popCart.style.display = "none";
    }
}
window.onscroll = function (event) {  
    popCart.style.display = "none";
} 