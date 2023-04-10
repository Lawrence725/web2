// Popup close
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
    
// Privacy Popup
function popPrivacy() {
    document.getElementById("popPrivacy").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Terms Popup
function popTerms() {
    document.getElementById("popTerms").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Coupon Popup
function popCoupon() {
    document.getElementById("popCoupon").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Coupon Rule Popup
function popCouponRule() {
    document.getElementById("popCouponRule").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Rule Popup
function popRule() {
    document.getElementById("popRule").style.display = "flex";
    document.body.style.overflow = "hidden"; }