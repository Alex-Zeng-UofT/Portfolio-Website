var tablinks = document.getElementsByClassName("tab-links");
var contents = document.getElementsByClassName("tab-contents");
var game_btns = document.getElementsByClassName("game");

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

function change_game_img(name) {
    for (btn of game_btns) {
        btn.classList.remove("active-btn")
    }
    event.currentTarget.classList.add("active-btn");
    document.getElementById("p2").src=name;
}