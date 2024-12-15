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

let lastTouchTime = 0;

document.addEventListener('touchstart', function (event) {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastTouchTime;

    if (timeDiff < 300 && timeDiff > 0) {
        event.preventDefault(); // Prevent the default double-tap zoom behavior
    }

    lastTouchTime = currentTime;
}, { passive: false });

// let tetrisBoard = document.getElementById("board");
// tetrisBoard.addEventListener("touchstart", (event) => {
//     event.preventDefault();
// });
//
// let tetrisHud = document.getElementById("tetris-hud");
// tetrisHud.addEventListener("touchstart", (event) => {
//     event.preventDefault();
// });
//
// let gameOverScreen = document.getElementById("gameOverScreen");
// gameOverScreen.addEventListener("touchstart", (event) => {
//     if (event.touches.length>1) {
//         event.preventDefault();
//     }
// });