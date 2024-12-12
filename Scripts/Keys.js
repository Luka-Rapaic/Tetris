const CTX_HEIGHT_KEYS = 300;

export class KeyLeft {
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

export class KeyRight {
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

export class KeyDown {
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

export class KeyUp {
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

export class KeyA {
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

export class KeyD {
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