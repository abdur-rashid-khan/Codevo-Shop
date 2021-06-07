$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 20,
        items: 3,
        loop: !0,
        autoplayHoverPause: !0,
        autoplay: !0,
        autoplayTimeout: 3000,
        responseresponsiveRefreshRate: !0,
        responsive: { 0: { items: 2 }, 575.98: { items: 2 }, 767.98: { items: 2 }, 991.98: { items: 3 }, 1199.98: { items: 3 }, 1919.98: { items: 3 } },
    });
    $(".js--services-section").waypoint(function (e) {
        "down" == e ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
    });
    mixitup(".mixItUP");
});
AOS.init({ delay: 200, duration: 800 });
var preloader = document.getElementById("loading");
function loading() {
    preloader.style.display = "none";
}
function openManu() {
    document.getElementById("myNav").style.width = "100%";
}
function closeManu() {
    document.getElementById("myNav").style.width = "0%";
}
// function closePopup() {
//     document.getElementById("popUp").style.display = "none";
// }
// poup
let popup=document.querySelector('#popUp');
let closePopup=document.querySelector('#popupClose');
closePopup.addEventListener('click',function(){
    popup.classList.remove('popUpShow');
});
window.addEventListener('load',function(){
    setTimeout(()=>{
        popup.classList.add('popUpShow');
    },5000);
});

