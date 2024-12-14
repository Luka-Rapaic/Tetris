import {KeyDown, KeyLeft, KeyRight, KeyRotateLeft, KeyRotateRight} from "./Keys.js";

let ctxRL = document.getElementById("ctxRL").getContext("2d");
new KeyRotateLeft(ctxRL).paint();

let ctxRR = document.getElementById("ctxRR").getContext("2d");
new KeyRotateRight(ctxRR).paint();

let ctxML = document.getElementById("ctxML").getContext("2d");
new KeyLeft(ctxML).paint();

let ctxMD = document.getElementById("ctxMD").getContext("2d");
new KeyDown(ctxMD).paint();

let ctxMR = document.getElementById("ctxMR").getContext("2d");
new KeyRight(ctxMR).paint();

document.body.getElementById("body").addEventListener("touchstart", (event) => {
    event.preventDefault();
});