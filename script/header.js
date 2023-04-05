// Popup close
// function popClose(e) {
//     document.getElementById(e).style.display = "none";
//     document.body.style.overflow = "scroll"; }
function popClose(e) {
    if (e.classList.contains('modal'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('modal-content'))) {
        e.closest('.modal').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.modal').style.display = "none";
            e.closest('.modal').children[0].style.animationName = "popup";
        }, 500); }
    document.body.style.overflow = "scroll"; }

// Setting Popup
function popSetting() {
    document.getElementById("popSetting").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Item Popup
function popItem() {
    document.getElementById("popItem").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Cart Popup
function popCart() {
    document.getElementById("popCart").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Cart Popup 揪團購物車
function popCartGroupbuying() {
    document.getElementById("popCartGroupbuying").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// ******************** Old ********************

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

// Popup (Point)
// function popPoint() {
//     document.getElementById("popPoint").style.display = "flex";
//     document.body.style.overflow = "hidden"; }

// Profile Dropdown
// var profile = document.getElementsByClassName("main")[0];
// var dropdown = document.getElementsByClassName("dropdown")[0];
// profile.onclick = function() {
//     dropdown.style.display = "block"; }

// Profile Popup
// var popProfile = document.getElementById("popProfile");
// var buttonProfile = document.getElementById("profile");
// var close = popProfile.getElementsByClassName("close")[0];
// var cancel = popProfile.getElementsByClassName("cancel")[0];
// var submit = popProfile.getElementsByClassName("submit")[0];
// buttonProfile.onclick = function() {
//     popProfile.style.display = "flex";
// }
// close.onclick = function() {
//     popProfile.style.display = "none";
// }
// cancel.onclick = function() {
//     popProfile.style.display = "none";
// }
// submit.onclick = function() {
//     popProfile.style.display = "none";
// }