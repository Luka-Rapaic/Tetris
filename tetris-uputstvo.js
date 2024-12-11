

function set_difficulty(element) {
    for (let button of buttons) button.classList.remove("active");
    element.classList.add("active");
}

function get_settings() {
    let checkboxIds = ["ifigure", "lfigure", "jfigure", "sfigure", "zfigure", "tfigure", "ofigure"];
    for (let checkboxId of checkboxIds) {
        let $checkbox = $(`#${checkboxId}`);
        settings[checkboxId] = $checkbox.prop("checked");
    }
    for (let button of buttons) {
        if (button.classList.contains('active')) {
            let difficulty;
            switch(button.id) {
                case "difficulty-easy":
                    difficulty = 0;
                    break;
                case "difficulty-medium":
                    difficulty = 3;
                    break;
                default:
                    difficulty = 6;
            }
            settings["difficulty"] = difficulty;
        }
    }
    localStorage.setItem("settings", JSON.stringify(settings));
    window.location.href = "tetris-igra pure.html";
}

let buttons = document.getElementsByClassName("difficulty-options")[0].children;

let settings = {
    "ifigure": true,
    "lfigure": true,
    "jfigure": true,
    "sfigure": true,
    "zfigure": true,
    "tfigure": true,
    "ofigure": true,
    "difficulty": 1
}

$(document).ready(function() {
    $("#confirm").click(get_settings);
});