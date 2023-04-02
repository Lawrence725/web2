// Load Header and Footer
// $(function(){
//     $("#headerHtml").load("header.html");
//     $("#footerHtml").load("footer.html");
// });
const xhrHead = new XMLHttpRequest();
xhrHead.open("GET", "./header.html", true);
xhrHead.send();
xhrHead.onreadystatechange=function(){
    if(xhrHead.readyState == 4 && xhrHead.status == 200){
        document.querySelectorAll("#headerHtml")[0].innerHTML = xhrHead.responseText; }};
const xhrFoot = new XMLHttpRequest();
xhrFoot.open("GET", "./footer.html", true);
xhrFoot.send();
xhrFoot.onreadystatechange=function(){
    if(xhrFoot.readyState == 4 && xhrFoot.status == 200){
        document.querySelectorAll("#footerHtml")[0].innerHTML = xhrFoot.responseText; }};

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

// Coupon Popup
var popCoupon = document.getElementById("popCoupon");
var buttonCoupon = document.getElementById("buttonCoupon");
var close = popCoupon.getElementsByClassName("close")[0];
var submit = popCoupon.getElementsByClassName("submit")[0];
buttonCoupon.onclick = function() {
    popCoupon.style.display = "flex";
}
close.onclick = function() {
    popCoupon.style.display = "none";
}
submit.onclick = function() {
    popCoupon.style.display = "none";
}

// Rule Popup
var popRule = document.getElementById("popRule");
var buttonRule = document.getElementById("buttonRule");
var close = popRule.getElementsByClassName("close")[0];
var submit = popRule.getElementsByClassName("submit")[0];
buttonRule.onclick = function() {
    popRule.style.display = "flex";
}
close.onclick = function() {
    popRule.style.display = "none";
}
submit.onclick = function() {
    popRule.style.display = "none";
}

// Coupon Rule Popup
var popCouponRule = document.getElementById("popCouponRule");
var buttonCouponRule = document.getElementById("buttonCouponRule");
var close = popCouponRule.getElementsByClassName("close")[0];
var submit = popCouponRule.getElementsByClassName("submit")[0];
buttonCouponRule.onclick = function() {
    popCouponRule.style.display = "flex";
}
close.onclick = function() {
    popCouponRule.style.display = "none";
}
submit.onclick = function() {
    popCouponRule.style.display = "none";
}

// Activity Popup
var popActivity = document.getElementById("popActivity");
var buttonActivity = document.getElementById("buttonActivity");
var close = popActivity.getElementsByClassName("close")[0];
var submit = popActivity.getElementsByClassName("submit")[0];
buttonActivity.onclick = function() {
    popActivity.style.display = "flex";
}
close.onclick = function() {
    popActivity.style.display = "none";
}
submit.onclick = function() {
    popActivity.style.display = "none";
}

// Delivery Popup
// var popDelivery = document.getElementById("popDelivery");
// var buttonDelivery = document.getElementById("buttonDelivery");
// var close = popDelivery.getElementsByClassName("close")[0];
// buttonDelivery.onclick = function() {
//     popDelivery.style.display = "flex";
// }
// close.onclick = function() {
//     popDelivery.style.display = "none";
// }

// Setting Popup
// var popSetting = document.getElementById("popSetting");
// var buttonSetting = document.getElementById("buttonSetting");
// var close = popSetting.getElementsByClassName("close")[0];
// var submit = popSetting.getElementsByClassName("submit")[0];
// buttonSetting.onclick = function() {
//     popSetting.style.display = "flex";
// }
// close.onclick = function() {
//     popSetting.style.display = "none";
// }
// submit.onclick = function() {
//     popSetting.style.display = "none";
// }

// Time Popup
// var popTime = document.getElementById("popTime");
// var buttonTime = document.getElementById("buttonTime");
// var close = popTime.getElementsByClassName("close")[0];
// var submit = popTime.getElementsByClassName("submit")[0];
// var submitNow = popTime.getElementsByClassName("submit")[1];
// buttonTime.onclick = function() {
//     popTime.style.display = "flex";
// }
// close.onclick = function() {
//     popTime.style.display = "none";
// }
// submit.onclick = function() {
//     popTime.style.display = "none";
// }
// submitNow.onclick = function() {
//     popTime.style.display = "none";
// }

// Location Popup
// var popLocation = document.getElementById("popLocation");
// var buttonLocation = document.getElementById("buttonLocation");
// var close = popLocation.getElementsByClassName("close")[0];
// var submit = popLocation.getElementsByClassName("submit")[0];
// buttonLocation.onclick = function() {
//     popLocation.style.display = "flex";
// }
// close.onclick = function() {
//     popLocation.style.display = "none";
// }
// submit.onclick = function() {
//     popLocation.style.display = "none";
// }

// All Popup
window.onclick = function(event) {
    if (event.target == popNotice) {
        popNotice.style.display = "none";
    }
    else if (event.target == popInfo) {
        popInfo.style.display = "none";
    }
    // else if (event.target == popDelivery) {
    //     popDelivery.style.display = "none";
    // }
    // else if (event.target == popSetting) {
    //     popSetting.style.display = "none";
    // }
    // else if (event.target == popTime) {
    //     popTime.style.display = "none";
    // }
    // else if (event.target == popLocation) {
    //     popLocation.style.display = "none";
    // }
}

// Popup破格設計(置中)
// Popup close(點擊背景和×時)
$('.pop__overlay-bg, .pop__close').click(function(){	
    $(this).closest('.pop').stop(false,true).fadeOut(300);
    document.body.style.overflow = 'auto'; 
});

// Popup close(要控制關掉某個popup時)
function popClose(popID) {
    $('#'+popID).stop(false,true).fadeOut(300);
}
        
// popup open
// 只留當前popup視窗
function popOpen(popID) {
    $('.pop').not('#'+popID).stop(false,true).fadeOut(300);
    $('#'+popID).css('display','flex');
    document.body.style.overflow = 'hidden'; 
}

// 保留當前和上一個popup視窗
function popStayAndOpen(popID) {
    $('#'+popID).css('display','flex');
    document.body.style.overflow = 'hidden'; 
}