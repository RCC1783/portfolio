var hamburgerMenu = document.getElementById("hamburger");
var nav = document.getElementById("link_container");

hamburgerMenu.addEventListener("click", toggleFloatingNav);
function setNavHeaderButton(){
    if(window.innerWidth >= 1075) {
        // console.log("width big - show nav");
        document.getElementById("link_container").style.display = "flex"; 
        hamburgerMenu.style.display = "none";
    }
    if(window.innerWidth < 1075) {
        // console.log("width small - hide nav");
        document.getElementById("link_container").style.display = "none";
        hamburgerMenu.style.display = "block";
    }
}
setNavHeaderButton();
addEventListener("resize", () => setNavHeaderButton());

document.body.addEventListener('mouseup', () => {
    if(hamburgerMenu.style.display == 'block' && nav.style.display == 'flex'){
        toggleFloatingNav();
    }
})



function toggleFloatingNav(){
    var displayStatus = nav.style.display;

    displayStatus == "none"  ? nav.style.display = "flex" : nav.style.display = "none";
}