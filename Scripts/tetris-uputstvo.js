import {IFigure, JFigure, LFigure, OFigure, SFigure, TFigure, ZFigure} from "./Blocks.js";

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
    window.location.href = "tetris-igra.html";
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

window.set_difficulty = set_difficulty;

let canvasIFigure = document.getElementById("canvasIFigure");
let ctxIFigure = canvasIFigure.getContext("2d");

let canvasLFigure = document.getElementById("canvasLFigure");
let ctxLFigure = canvasLFigure.getContext("2d");

let canvasJFigure = document.getElementById("canvasJFigure");
let ctxJFigure = canvasJFigure.getContext("2d");

let canvasTFigure = document.getElementById("canvasTFigure");
let ctxTFigure = canvasTFigure.getContext("2d");

let canvasZFigure = document.getElementById("canvasZFigure");
let ctxZFigure = canvasZFigure.getContext("2d");

let canvasSFigure = document.getElementById("canvasSFigure");
let ctxSFigure = canvasSFigure.getContext("2d");

let canvasOFigure = document.getElementById("canvasOFigure");
let ctxOFigure = canvasOFigure.getContext("2d");

let ifigure = new IFigure(ctxIFigure);
let lfigure = new LFigure(ctxLFigure);
let jfigure = new JFigure(ctxJFigure);
let tfigure = new TFigure(ctxTFigure);
let zfigure = new ZFigure(ctxZFigure);
let sfigure = new SFigure(ctxSFigure);
let ofigure = new OFigure(ctxOFigure);

ifigure.paint();
lfigure.paint();
jfigure.paint();
tfigure.paint();
zfigure.paint();
sfigure.paint();
ofigure.paint();

$(document).ready(function() {
    $("#confirm").click(get_settings);
});