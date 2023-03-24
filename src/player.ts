import {Vector} from "./vector";

export class Player {
    private ctx: CanvasRenderingContext2D;
    private height: number;
    private position: Vector;
    private gravity: Vector;
    private velocity: Vector;
    private jumpPower: Vector;

    constructor(ctx, x, y) {
        this.position = new Vector(x, y);
        this.gravity = new Vector(0, .5);
        this.velocity = new Vector(0, 0);
        this.jumpPower = new Vector(0, -10);
        this.height = 50;
        this.ctx = ctx;

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                this.handleJump();
            }

            if (e.code === 'KeyD') {
                this.handleMove('right')
            }

            if (e.code === 'KeyA') {
                this.handleMove('left');
            }
        })
    }

    private handleMove(type: 'right' | 'left') {
        switch (type) {
            case 'left':
            case 'right':
                break;
        }
    }

    private handleJump() {
        this.velocity.addTo(this.jumpPower);
    }

    public getGroundPosition() {
        return this.ctx.canvas.height / 2 - this.height;
    }

    public update() {
        this.draw();

        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);

        if (this.position.y > this.getGroundPosition()) {
            this.position.y = this.getGroundPosition();
            this.velocity.reset();
        }
    }

    public draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.height, Math.PI * 2, 0);
        this.ctx.fill();
    }
}