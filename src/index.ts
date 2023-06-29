import { Application } from "pixi.js";
import "./style.css";

declare const VERSION: string;

const gameWidth = 800;
const gameHeight = 600;

console.log(`Welcome from pixi-typescript-boilerplate ${VERSION}`);

const app = new Application({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
});

window.onload = async (): Promise<void> => {};
