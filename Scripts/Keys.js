const CTX_HEIGHT_KEYS = 50;

class KeyLeft {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.beginPath();

        this.ctx.moveTo(CTX_HEIGHT_KEYS/10, CTX_HEIGHT_KEYS/2);
        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/10, CTX_HEIGHT_KEYS/3);

        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/10, 3*CTX_HEIGHT_KEYS/7);
        this.ctx.lineTo(9*CTX_HEIGHT_KEYS/10, 3*CTX_HEIGHT_KEYS/7);
        this.ctx.lineTo(9*CTX_HEIGHT_KEYS/10, 4*CTX_HEIGHT_KEYS/7);
        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/10, 4*CTX_HEIGHT_KEYS/7);

        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/10, 2*CTX_HEIGHT_KEYS/3);
        this.ctx.lineTo(CTX_HEIGHT_KEYS/10, CTX_HEIGHT_KEYS/2);

        this.ctx.fill();
    }
}

class KeyRight {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.beginPath();

        this.ctx.moveTo(9*CTX_HEIGHT_KEYS/10, CTX_HEIGHT_KEYS/2);
        this.ctx.lineTo(6*CTX_HEIGHT_KEYS/10, CTX_HEIGHT_KEYS/3);

        this.ctx.lineTo(6*CTX_HEIGHT_KEYS/10, 3*CTX_HEIGHT_KEYS/7);
        this.ctx.lineTo(1*CTX_HEIGHT_KEYS/10, 3*CTX_HEIGHT_KEYS/7);
        this.ctx.lineTo(1*CTX_HEIGHT_KEYS/10, 4*CTX_HEIGHT_KEYS/7);
        this.ctx.lineTo(6*CTX_HEIGHT_KEYS/10, 4*CTX_HEIGHT_KEYS/7);

        this.ctx.lineTo(6*CTX_HEIGHT_KEYS/10, 2*CTX_HEIGHT_KEYS/3);
        this.ctx.lineTo(9*CTX_HEIGHT_KEYS/10, CTX_HEIGHT_KEYS/2);

        this.ctx.fill();
    }
}

class KeyDown {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.beginPath();

        this.ctx.moveTo(CTX_HEIGHT_KEYS/2, 9*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(CTX_HEIGHT_KEYS/3, 6*CTX_HEIGHT_KEYS/10);

        this.ctx.lineTo(3*CTX_HEIGHT_KEYS/7, 6*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(3*CTX_HEIGHT_KEYS/7, 1*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/7, 1*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/7, 6*CTX_HEIGHT_KEYS/10);

        this.ctx.lineTo(2*CTX_HEIGHT_KEYS/3, 6*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(CTX_HEIGHT_KEYS/2, 9*CTX_HEIGHT_KEYS/10);

        this.ctx.fill();
    }
}

class KeyUp {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.beginPath();

        this.ctx.moveTo(CTX_HEIGHT_KEYS/2, 9*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(2*CTX_HEIGHT_KEYS/3, 6*CTX_HEIGHT_KEYS/10);

        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/7, 4*CTX_HEIGHT_KEYS/10, );
        this.ctx.lineTo(4*CTX_HEIGHT_KEYS/7, 9*CTX_HEIGHT_KEYS/10, );
        this.ctx.lineTo(3*CTX_HEIGHT_KEYS/7, 9*CTX_HEIGHT_KEYS/10, );
        this.ctx.lineTo(3*CTX_HEIGHT_KEYS/7, 4*CTX_HEIGHT_KEYS/10, );

        this.ctx.lineTo(CTX_HEIGHT_KEYS/3, 6*CTX_HEIGHT_KEYS/10, );
        this.ctx.lineTo(CTX_HEIGHT_KEYS/2, 9*CTX_HEIGHT_KEYS/10, );

        this.ctx.fill();
    }
}

class KeyA {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.font = `${3*CTX_HEIGHT_KEYS/4}px Calibri`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText("A", CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS);
    }
}

class KeyD {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.font = `${3*CTX_HEIGHT_KEYS/4}px Calibri`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText("D", CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS);
    }
}

let ctxALeft = document.getElementById("canvasALeft").getContext("2d");
let aLeft = new KeyLeft(ctxALeft);

let ctxARight = document.getElementById("canvasARight").getContext("2d");
let aRight = new KeyRight(ctxARight);

let ctxADown = document.getElementById("canvasADown").getContext("2d");
let aDown = new KeyDown(ctxADown);

// let ctxAUp = document.getElementById("canvasAUp").getContext("2d");
// let aUp = new KeyDown(ctxAUp);

let ctxA = document.getElementById("canvasA").getContext("2d");
let a = new KeyA(ctxA);

let ctxD = document.getElementById("canvasD").getContext("2d");
let d = new KeyD(ctxD);

aLeft.paint();
aRight.paint();
aDown.paint();
// aUp.paint();
a.paint();
d.paint();