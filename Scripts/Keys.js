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

export class KeyRotateLeft {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.beginPath();
        this.ctx.arc(CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS/2, 3*CTX_HEIGHT_KEYS/10, 5*Math.PI/4, 3*Math.PI/4);
        this.ctx.arc(CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS/2, 4*CTX_HEIGHT_KEYS/10, 3*Math.PI/4, 5*Math.PI/4, true);
        this.ctx.lineTo(3*CTX_HEIGHT_KEYS/20, 3*CTX_HEIGHT_KEYS/20);
        this.ctx.lineTo(3*CTX_HEIGHT_KEYS/20, 4*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(11*CTX_HEIGHT_KEYS/31, 11*CTX_HEIGHT_KEYS/31);
        this.ctx.closePath();
        this.ctx.fill();
    }
}

export class KeyRotateRight {
    constructor(ctx) {
        this.ctx = ctx;
    }

    paint() {
        this.ctx.beginPath();
        this.ctx.arc(CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS/2, 3*CTX_HEIGHT_KEYS/10, 7*Math.PI/4, 1*Math.PI/4, true);
        this.ctx.arc(CTX_HEIGHT_KEYS/2, CTX_HEIGHT_KEYS/2, 4*CTX_HEIGHT_KEYS/10, 1*Math.PI/4, 7*Math.PI/4);
        this.ctx.lineTo(17*CTX_HEIGHT_KEYS/20, 3*CTX_HEIGHT_KEYS/20);
        this.ctx.lineTo(17*CTX_HEIGHT_KEYS/20, 4*CTX_HEIGHT_KEYS/10);
        this.ctx.lineTo(20*CTX_HEIGHT_KEYS/31, 11*CTX_HEIGHT_KEYS/31);
        this.ctx.closePath();
        this.ctx.fill();
    }
}