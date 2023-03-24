import {Vector} from "./vector";

function drawArrow(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(-20, 0);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, -10);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, 10);
    ctx.stroke();
}

export function setupCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const position = new Vector(width / 2, height / 2);
    const rotation = new Vector();
    const acceleration = new Vector(2, 0);

    canvas.addEventListener('mousemove', e => {
        const x = Math.sin(e.clientX);
        const y = Math.cos(e.clientY);

        rotation.x = e.clientX - position.x;
        rotation.y = e.clientY - position.y;
    });

    acceleration.addTo(rotation);

    (function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(rotation.getAngleRadians());


        position.addTo(acceleration);

        if (position.x > width) {
            position.x = 0;
        }

        if (position.x < 0) {
            position.x = width;
        }

        if (position.y > height) {
            position.y = 0;
        }

        if (position.y < 0) {
            position.y = height;
        }

        drawArrow(ctx);

        ctx.restore();

        requestAnimationFrame(render)
    })();
}
