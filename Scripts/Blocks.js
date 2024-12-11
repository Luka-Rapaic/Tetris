const BLOCK_HEIGHT = 70
const CTX_HEIGHT = 300

class Block {
    constructor(ctx, color, x, y) {
        this.ctx = ctx;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    paint() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, BLOCK_HEIGHT, BLOCK_HEIGHT)
    }
}

class IFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 4*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#577590", x, y),
            new Block(ctx, "#577590", x, y+BLOCK_HEIGHT),
            new Block(ctx, "#577590", x, y+2*BLOCK_HEIGHT),
            new Block(ctx, "#577590", x, y+3*BLOCK_HEIGHT)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

class LFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 3*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#F8961E", x, y),
            new Block(ctx, "#F8961E", x, y+BLOCK_HEIGHT),
            new Block(ctx, "#F8961E", x, y+2*BLOCK_HEIGHT),
            new Block(ctx, "#F8961E", x+BLOCK_HEIGHT, y+2*BLOCK_HEIGHT)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

class JFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 3*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#F94144", x+BLOCK_HEIGHT, y),
            new Block(ctx, "#F94144", x+BLOCK_HEIGHT, y+BLOCK_HEIGHT),
            new Block(ctx, "#F94144", x+BLOCK_HEIGHT, y+2*BLOCK_HEIGHT),
            new Block(ctx, "#F94144", x, y+2*BLOCK_HEIGHT)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

class TFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - 3*BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#43AA8B", x+BLOCK_HEIGHT, y),
            new Block(ctx, "#43AA8B", x, y+BLOCK_HEIGHT),
            new Block(ctx, "#43AA8B", x+BLOCK_HEIGHT, y+BLOCK_HEIGHT),
            new Block(ctx, "#43AA8B", x+2*BLOCK_HEIGHT, y+BLOCK_HEIGHT)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

class ZFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - 3*BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#97dffc", x, y),
            new Block(ctx, "#97dffc", x+BLOCK_HEIGHT, y),
            new Block(ctx, "#97dffc", x+BLOCK_HEIGHT, y+BLOCK_HEIGHT),
            new Block(ctx, "#97dffc", x+2*BLOCK_HEIGHT, y+BLOCK_HEIGHT)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

class SFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - 3*BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#6a4c93", x, y+BLOCK_HEIGHT),
            new Block(ctx, "#6a4c93", x+BLOCK_HEIGHT, y+BLOCK_HEIGHT),
            new Block(ctx, "#6a4c93", x+BLOCK_HEIGHT, y),
            new Block(ctx, "#6a4c93", x+2*BLOCK_HEIGHT, y)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

class OFigure {
    constructor(ctx) {
        let x = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        let y = (CTX_HEIGHT - 2*BLOCK_HEIGHT) / 2;
        this.blocks = [
            new Block(ctx, "#F9C74F", x, y),
            new Block(ctx, "#F9C74F", x+BLOCK_HEIGHT, y),
            new Block(ctx, "#F9C74F", x, y+BLOCK_HEIGHT),
            new Block(ctx, "#F9C74F", x+BLOCK_HEIGHT, y+BLOCK_HEIGHT)
        ]
    }

    paint() {
        for (let block of this.blocks) block.paint();
    }
}

canvasIFigure = document.getElementById("canvasIFigure");
ctxIFigure = canvasIFigure.getContext("2d");

canvasLFigure = document.getElementById("canvasLFigure");
ctxLFigure = canvasLFigure.getContext("2d");

canvasJFigure = document.getElementById("canvasJFigure");
ctxJFigure = canvasJFigure.getContext("2d");

canvasTFigure = document.getElementById("canvasTFigure");
ctxTFigure = canvasTFigure.getContext("2d");

canvasZFigure = document.getElementById("canvasZFigure");
ctxZFigure = canvasZFigure.getContext("2d");

canvasSFigure = document.getElementById("canvasSFigure");
ctxSFigure = canvasSFigure.getContext("2d");

canvasOFigure = document.getElementById("canvasOFigure");
ctxOFigure = canvasOFigure.getContext("2d");

ifigure = new IFigure(ctxIFigure);
lfigure = new LFigure(ctxLFigure);
jfigure = new JFigure(ctxJFigure);
tfigure = new TFigure(ctxTFigure);
zfigure = new ZFigure(ctxZFigure);
sfigure = new SFigure(ctxSFigure);
ofigure = new OFigure(ctxOFigure);

ifigure.paint();
lfigure.paint();
jfigure.paint();
tfigure.paint();
zfigure.paint();
sfigure.paint();
ofigure.paint();