import {Vector} from "./vector";
import {Player} from "./player";




export function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;

  const player = new Player(ctx, width / 2, height / 2);

  (function render() {
    ctx.clearRect(0, 0, width, height);

    player.update();


    requestAnimationFrame(render)
  })();
}