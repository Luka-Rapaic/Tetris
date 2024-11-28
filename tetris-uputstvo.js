function get_settings() {
    let checkboxIds = ["ifigure", "lfigure", "jfigure", "sfigure", "zfigure", "tfigure", "ofigure"];
    for (let checkboxId of checkboxIds) {
        let $checkbox = $(`#${checkboxId}`);
        settings[checkboxId] = $checkbox.prop("checked");
    }
    let $difficulty = $("#difficulty");
    settings["difficulty"] = parseInt($difficulty.val());
    localStorage.setItem("settings", JSON.stringify(settings));
    window.location.href = "tetris-igra pure.html";
}

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