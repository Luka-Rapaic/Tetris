const BLOCK_HEIGHT = 70
const CTX_HEIGHT = 300

export class Block {
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

export class IFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}

export class LFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}

export class JFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}

export class TFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}

export class ZFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}

export class SFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}

export class OFigure {
    constructor(ctx) {
        this.ctx = ctx;
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
        this.ctx.clearRect(0, 0, CTX_HEIGHT, CTX_HEIGHT);
        for (let block of this.blocks) block.paint();
    }
}