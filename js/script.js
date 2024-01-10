var topbar = document.getElementById("topbar");
var sticky = topbar.offsetTop;

function stickyTopbar() {
    if (window.pageYOffset > 100) {
        topbar.classList.add("sticky");
        topbar.style.background = "linear-gradient(180deg, rgba(163,163,163,1) 0%, rgba(255,255,255,0) 61%)";
        topbar.style.height = "110px"; // Change the height as needed
    } else {
        topbar.classList.remove("sticky");
        topbar.style.background= "#fff";
        topbar.style.height = "auto"; // Change the height as needed
    }
}

window.onscroll = function() {
    stickyTopbar();
};
