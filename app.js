var tablinks = document.getElementsByClassName("tab-links");
var contents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    for (link of tablinks) {
        link.classList.remove("active-link");
    }

    for (content of contents) {
        content.classList.remove("active-content");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}