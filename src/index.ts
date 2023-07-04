import { Application } from "pixi.js";
import "./style.css";
import { DIMS } from "./constants/dims";

declare const VERSION: string;

console.log(`Welcome from pixi-typescript-boilerplate ${VERSION}`);

const app = new Application({
    backgroundColor: 0xd3d3d3,
    width: DIMS.width,
    height: DIMS.height,
});

window.onload = async (): Promise<void> => {};
