import {IFigure, LFigure, JFigure, TFigure, OFigure, SFigure, ZFigure} from "./Blocks.js";
import {KeyDown, KeyLeft, KeyRight, KeyRotateLeft, KeyRotateRight} from "./Keys.js";

let controller;

function init_game() {
    let settings = localStorage.getItem("settings");
    settings = JSON.parse(settings);

    let board = new Board(10, 25, "board");
    controller = new Controller(board, settings);
}

function end_game(score) {
    let $gameOverScreen = $("#gameOverScreen");
    $gameOverScreen.removeClass("hidden");

    let $finalScore = $("#final-score");
    $finalScore.text(controller.scoreKeeper.score);

    // let highScores = localStorage.getItem("highScores");
    // if (highScores) highScores = JSON.parse(highScores);
    // else highScores = {"names": [], "scores": []};
    //
    // let $highScore = $("#highScore");
    // if (highScores["scores"].length < 5 || highScores["scores"][4] < score) {
    //     for (let i = 0; i < highScores["scores"].length; i++) {
    //         if (highScores["scores"][i] < score) {
    //             let slice1scores = highScores["scores"].slice(0, i);
    //             let slice1names = highScores["names"].slice(0, i);
    //             let slice2scores = highScores["scores"].slice(i);
    //             let slice2names = highScores["names"].slice(i);
    //
    //             slice1scores.push(score);
    //             slice1names.push(name);
    //
    //             slice1scores.join(slice2scores);
    //             slice1names.join(slice2names);
    //
    //             slice1scores.slice(0, 5);
    //             slice1names.slice(0, 5);
    //
    //             highScores["scores"] = slice1scores;
    //             highScores["names"] = slice1names;
    //             break;
    //         }
    //     }
    // }
}

function save_score() {
    let name = $("#name").val();
    let score = controller.scoreKeeper.score;

    let highScores = localStorage.getItem("highScores");
    if (highScores) highScores = JSON.parse(highScores);
    else highScores = [];

    highScores.push([score, name]);
    highScores.sort((a, b) => {
        let a_score = a[0], a_name = a[1], b_score = b[0], b_name = b[1];
        if (a_score > b_score) return -1;
        else if (a_score < b_score) return 1;
        else if (a_name > b_name) return -1;
        else if (a_name < b_name) return 1;
        else return 0;
    });
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));

    localStorage.setItem("lastScore", JSON.stringify([score, name]));

    document.location.href = "tetris-rezultati.html";
}

class ScoreKeeper {
    constructor(settings) {
        this.$score = $("#score");
        this.score = 0;
        this.$lines = $("#lines");
        this.lines = 0;
        this.$lvl = $("#level");
        this.baselvl = settings["difficulty"] * 5 + 1;
        this.lvl = this.baselvl;
    }

    add(lines) {
        this.updateLines(lines);
        this.updateScore(lines);
        this.updateLvl();
    }

    updateLines(lines) {
        this.lines += lines;
        this.$lines.text(this.lines);
    }

    updateScore(lines) {
        this.score += lines * (this.lvl) * 100;
        this.$score.text(this.score);
    }

    updateLvl() {
        this.lvl = this.baselvl + Math.floor(this.lines / 10);
        this.$lvl.text(this.lvl);
    }
}

class FigureGenerator {
    constructor(board, settings) {
        this.board = board;
        this.settings = settings;

        this.figureList = [];
        console.log(settings);
        if (this.settings["ifigure"]) this.figureList.push("ifigure");
        if (this.settings["lfigure"]) this.figureList.push("lfigure");
        if (this.settings["jfigure"]) this.figureList.push("jfigure");
        if (this.settings["sfigure"]) this.figureList.push("sfigure");
        if (this.settings["zfigure"]) this.figureList.push("zfigure");
        if (this.settings["tfigure"]) this.figureList.push("tfigure");
        if (this.settings["ofigure"]) this.figureList.push("ofigure");

        this.ctxQueue = [
            document.getElementById("figure-queue-0").getContext("2d"),
            document.getElementById("figure-queue-1").getContext("2d")
        ]

        this.queue = [];
        for (let i = 0; i < 2; i++) this.queue.push(this.generate());
    }

    generate() {
        let number = Math.floor(Math.random() * this.figureList.length);

        switch(this.figureList[number]) {
            case "ifigure":
                return new I_Figure(this.board);
            case "lfigure":
                return new L_Figure(this.board);
            case "jfigure":
                return new J_Figure(this.board);
            case "sfigure":
                return new S_Figure(this.board);
            case "zfigure":
                return new Z_Figure(this.board);
            case "tfigure":
                return new T_Figure(this.board);
            case "ofigure":
                return new O_Figure(this.board);
        }
    }

    next() {
        let nextFigure = this.queue.shift();
        this.queue.push(this.generate());
        this.paintQueue();
        return nextFigure;
    }

    paintQueue() {
        for (let i = 0; i < 2; i++) {
            this.queue[i].drawIcon(this.ctxQueue[i]);
        }
    }
}

class Controller {
    constructor(board, settings) {
        this.board = board;

        this.figureGenerator = new FigureGenerator(board, settings);
        this.currentFigure = this.figureGenerator.next();

        this.scoreKeeper = new ScoreKeeper(settings);

        this.moveLeftInterval = null;
        this.moveRightInterval = null;
        this.moveDownInterval = null;
        this.rotateLeftInterval = null;
        this.rotateRightInterval = null;

        $(document).keydown((event) => this.keyDownHandler(event));
        $(document).keyup((event) => this.keyUpHandler(event));

        let instance = this;

        let buttonRotateLeft = $("#buttonRotateLeft");
        buttonRotateLeft.bind("touchstart", (event) => {
            event.preventDefault();
            instance.keyDownHandler({"keyCode": 65})
        });
        buttonRotateLeft.bind("touchend", (event) => {instance.keyUpHandler({"keyCode": 65})});
        new KeyRotateLeft(buttonRotateLeft.get(0).getContext("2d")).paint();

        let buttonRotateRight = $("#buttonRotateRight");
        buttonRotateRight.bind("touchstart", (event) => {
            event.preventDefault();
            instance.keyDownHandler({"keyCode": 68})
        });
        buttonRotateRight.bind("touchend", (event) => {instance.keyUpHandler({"keyCode": 68})});
        new KeyRotateRight(buttonRotateRight.get(0).getContext("2d")).paint();

        let buttonMoveLeft = $("#buttonMoveLeft");
        buttonMoveLeft.bind("touchstart", (event) => {
            event.preventDefault();
            instance.keyDownHandler({"keyCode": 37})
        });
        buttonMoveLeft.bind("touchend", (event) => {instance.keyUpHandler({"keyCode": 37})});
        new KeyLeft(buttonMoveLeft.get(0).getContext("2d")).paint();

        let buttonMoveDown = $("#buttonMoveDown");
        buttonMoveDown.bind("touchstart", (event) => {
            event.preventDefault();
            instance.keyDownHandler({"keyCode": 40})
        });
        buttonMoveDown.bind("touchend", (event) => {instance.keyUpHandler({"keyCode": 40})});
        new KeyDown(buttonMoveDown.get(0).getContext("2d")).paint();

        let buttonMoveRight = $("#buttonMoveRight");
        buttonMoveRight.bind("touchstart", (event) => {
            event.preventDefault();
            instance.keyDownHandler({"keyCode": 39})
        });
        buttonMoveRight.bind("touchend", (event) => {instance.keyUpHandler({"keyCode": 39})});
        new KeyRight(buttonMoveRight.get(0).getContext("2d")).paint();

        this.tickRate = null;
        this.adjustTickrate();
        // this.commandTickRate = setInterval(() => this.commandHandler(), 100);
    }

    keyDownHandler(event) {
        switch(event.keyCode) {
            case 37:
                if (this.moveLeftInterval) return;
                if (this.moveRightInterval) {
                    clearInterval(this.moveRightInterval);
                    this.moveRightInterval = null;
                }
                this.currentFigure.moveLeft();
                this.moveLeftInterval = setInterval(() => {this.currentFigure.moveLeft();}, 100);
                break;
            case 39:
                if (this.moveRightInterval) return;
                if (this.moveLeftInterval) {
                    clearInterval(this.moveLeftInterval);
                    this.moveLeftInterval = null;
                }
                this.currentFigure.moveRight();
                this.moveRightInterval = setInterval(() => {this.currentFigure.moveRight()}, 100);
                break;
            case 40:
                if (this.moveDownInterval) return;
                this.currentFigure.moveDown();
                this.moveDownInterval = setInterval(() => {this.currentFigure.moveDown()}, 100);
                break;
            case 65:
                if (this.rotateLeftInterval) return;
                if (this.rotateRightInterval) {
                    clearInterval(this.rotateRightInterval);
                    this.rotateRightInterval = null;
                }
                this.currentFigure.rotateLeft();
                this.rotateLeftInterval = setInterval(() => {this.currentFigure.rotateLeft()}, 100);
                break;
            case 68:
                if (this.rotateRightInterval) return;
                if (this.rotateLeftInterval) {
                    clearInterval(this.rotateLeftInterval);
                    this.rotateLeftInterval = null;
                }
                this.currentFigure.rotateRight();
                this.rotateRightInterval = setInterval(() => {this.currentFigure.rotateRight()}, 100);
                break;
        }
    }

    keyUpHandler(event) {
        switch(event.keyCode) {
            case 37:
                if (this.moveLeftInterval) {
                    clearInterval(this.moveLeftInterval);
                    this.moveLeftInterval = null;
                }
                break;
            case 39:
                if (this.moveRightInterval) {
                    clearInterval(this.moveRightInterval);
                    this.moveRightInterval = null;
                }
                break;
            case 40:
                if (this.moveDownInterval) {
                    clearInterval(this.moveDownInterval);
                    this.moveDownInterval = null;
                }
                break;
            case 65:
                if (this.rotateLeftInterval) {
                    clearInterval(this.rotateLeftInterval);
                    this.rotateLeftInterval = null;
                }
                break;
            case 68:
                if (this.rotateRightInterval) {
                    clearInterval(this.rotateRightInterval);
                    this.rotateRightInterval = null;
                }
                break;
        }
    }

    commandHandler() {
        if (this.keys.arrowLeft && !this.keys.arrowRight) {
            this.currentFigure.moveLeft();
        }
        if (this.keys.arrowRight && !this.keys.arrowLeft) {
            this.currentFigure.moveRight();
        }
        if (this.keys.arrowDown) {
            this.currentFigure.moveDown();
        }
        if (this.keys.a && !this.keys.d) {
            this.currentFigure.rotateLeft();
        }
        if (this.keys.d && !this.keys.a) {
            this.currentFigure.rotateRight();
        }
    }

    adjustTickrate() {
        clearInterval(this.tickRate);
        this.tickRate = setInterval(() => this.tick(), 3000/this.scoreKeeper.lvl);
    }

    tick() {
        if (this.currentFigure.tick()) {
            if (this.board.isGameOver()) {
                clearInterval(this.tickRate);
                // clearInterval(this.commandTickRate);
                end_game(this.scoreKeeper.score)
            }
            this.scoreKeeper.add(this.board.tick());
            this.currentFigure = this.figureGenerator.next();
            this.tick();
        }
    }
}

class Board {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;

        let board = $(`#${id}>div`);
        let elementMatrix = [];
        for (let i = 0; i < y; i++) elementMatrix.push([]);
        board.each(function(index) {
            elementMatrix[Math.floor(index/x)].push($(this));
        });
        this.elementMatrix = elementMatrix;

        this.usedMatrix = [];
        for (let i = 0; i < y; i++) {
            let row = []
            for (let j = 0; j < x; j++) row.push(0);
            this.usedMatrix.push(row);
        }
    }

    overlaps(figureMatrix, figureOrigin) {
        for (let i1 = 0, i2 = -2; i1 < 5; i1++, i2++) {
            for (let j1 = 0, j2 = -2; j1 < 5; j1++, j2++) {
                if (figureMatrix[i1][j1]) {
                    console.log(figureOrigin[0]+i2);
                    console.log(figureOrigin[1]+j2);
                    if (figureOrigin[0]+i2 < 0 || figureOrigin[0]+i2 >= this.y) return true;
                    else if (figureOrigin[1]+j2 < 0 || figureOrigin[1]+j2 >= this.x) return true;
                    else if (this.usedMatrix[figureOrigin[0]+i2][figureOrigin[1]+j2]) return true;
                }
            }
        }
        return false;
    }

    drop(startRow) {
        for (let i = startRow; i > 0; i--) {
            for (let j = 0; j < this.x; j++) {
                this.usedMatrix[i][j] = this.usedMatrix[i-1][j];
                this.elementMatrix[i][j].css("background-color", this.elementMatrix[i-1][j].css("background-color"));
            }
        }
        for (let j = 0; j < this.x; j++) {
            this.usedMatrix[0][j] = 0;
            this.elementMatrix[0][j].css("background-color", "white");
        }
    }

    tick() {
        let destroyedLines = 0;
        for(let i = 0; i < this.y; i++) {
            let cnt = 0;
            for (let j = 0; j < this.x; j++) {
                if (this.usedMatrix[i][j]) cnt++;
                else cnt = 0;
            }
            if (cnt === this.x) {
                this.drop(i);
                destroyedLines++;
            }
        }
        return destroyedLines;
    }

    isGameOver() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < this.x; j++) {
                if (this.usedMatrix[i][j]) return true;
            }
        }
        return false;
    }
}

class Figure {
    constructor(matrix, color, board) {
        this.matrix = matrix;
        this.origin = [2, 5];

        this.color = color;
        this.board = board;
    }

    tick() {
        let newOrigin = [this.origin[0] + 1, this.origin[1]];
        if (this.board.overlaps(this.matrix, newOrigin)) {
            this.put();
            return true;
        }
        this.erase();
        this.origin = newOrigin;
        this.draw();
        return false;
    }

    erase() {
        for (let i1 = 0, i2 = -2; i1 < 5; i1++, i2++) {
            for (let j1 = 0, j2 = -2; j1 < 5; j1++, j2++) {
                if (this.matrix[i1][j1]) {
                    this.board.elementMatrix[this.origin[0]+i2][this.origin[1]+j2].css("background-color", "white");
                }
            }
        }
    }

    draw() {
        for (let i1 = 0, i2 = -2; i1 < 5; i1++, i2++) {
            for (let j1 = 0, j2 = -2; j1 < 5; j1++, j2++) {
                if (this.matrix[i1][j1]) {
                    this.board.elementMatrix[this.origin[0]+i2][this.origin[1]+j2].css("background-color", this.color);
                }
            }
        }
    }

    put() {
        for (let i1 = 0, i2 = -2; i1 < 5; i1++, i2++) {
            for (let j1 = 0, j2 = -2; j1 < 5; j1++, j2++) {
                if (this.matrix[i1][j1]) {
                    this.board.usedMatrix[this.origin[0]+i2][this.origin[1]+j2] = 1;
                }
            }
        }
    }

    moveLeft() {
        let newOrigin = [this.origin[0], this.origin[1] - 1];
        if (!this.board.overlaps(this.matrix, newOrigin)) {
            this.erase();
            this.origin = newOrigin;
            this.draw();
        }
    }

    moveRight() {
        let newOrigin = [this.origin[0], this.origin[1] + 1];
        if (!this.board.overlaps(this.matrix, newOrigin)) {
            this.erase();
            this.origin = newOrigin;
            this.draw();
        }
    }

    moveDown() {
        let newOrigin = [this.origin[0] + 1, this.origin[1]];
        if (!this.board.overlaps(this.matrix, newOrigin)) {
            this.erase();
            this.origin = newOrigin;
            this.draw();
        }
    }

    rotateLeft() {
        let temp = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                temp[i].push(this.matrix[j][4-i]);
            }
        }
        if (!this.board.overlaps(temp, this.origin)) {
            this.erase();
            this.matrix = temp;
            this.draw();
        }
    }

    rotateRight() {
        let temp = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                temp[i].push(this.matrix[4-j][i]);
            }
        }
        if (!this.board.overlaps(temp, this.origin)) {
            this.erase();
            this.matrix = temp;
            this.draw();
        }
    }

    printMatrix() {
        for (let i = 0; i < 5; i++) {
            let string = this.matrix[i][0].toString();
            for (let j = 1; j < 5; j++) {
                string += " " + this.matrix[i][j].toString();
            }
            console.log(string);
        }
    }
}

class I_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#577590", board);
    }

    drawIcon(ctx) {
        new IFigure(ctx).paint();
    }
}

class L_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#F8961E", board);
    }

    drawIcon(ctx) {
        new LFigure(ctx).paint();
    }
}

class J_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#F94144", board);
    }

    drawIcon(ctx) {
        new JFigure(ctx).paint();
    }
}

class T_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#43AA8B", board);
    }

    drawIcon(ctx) {
        new TFigure(ctx).paint();
    }
}

class O_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#F9C74F", board);
    }

    drawIcon(ctx) {
        new OFigure(ctx).paint();
    }
}

class S_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#6a4c93", board);
    }

    drawIcon(ctx) {
        new SFigure(ctx).paint();
    }
}

class Z_Figure extends Figure {
    constructor(board) {
        let matrix = [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        super(matrix, "#97dffc", board);
    }

    drawIcon(ctx) {
        new ZFigure(ctx).paint();
    }
}

function init_board() {
    let board = $("#board>div");
    let matrix = [];
    for (let i = 0; i < 20; i++) matrix.push([]);
    board.each(function(index) {
        matrix[Math.floor(index/10)].push($(this));
    })

    return matrix;
}

$(document).ready(function() {
    init_game();
    // let matrix = init_board();
    // matrix[5][2].css("background-color", "red");
});

window.save_score = save_score;

// let figure = new Z_Figure();
// figure.printMatrix();
// console.log(" ");
// figure.rotateLeft();
// figure.printMatrix();
// console.log(" ");
// figure.rotateLeft();
// figure.printMatrix();
// console.log(" ");