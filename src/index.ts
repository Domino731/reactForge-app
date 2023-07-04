import { Application, Graphics, Container } from "pixi.js";
import "./style.css";
import { DIMS } from "./constants/dims";
import { THEME } from "./constants/theme";

declare const VERSION: string;

console.log(`Welcome from pixi-typescript-boilerplate ${VERSION}`);

const app = new Application({
    // backgroundColor: THEME.grayFifth,
    width: DIMS.width,
    height: DIMS.height,
});

// Create a parent container
const parentContainer = new Container();

// Create child elements
const child1 = new Graphics();
child1.beginFill(0xff0000);
child1.drawRect(0, 0, 100, 100);
child1.endFill();

const child2 = new Graphics();
child2.beginFill(0xff0000);
child2.drawRect(0, 0, 100, 100);
child2.endFill();

// Add children to the parent container
parentContainer.addChild(child1);
parentContainer.addChild(child2);

// Add the parent container to the PIXI stage
app.stage.addChild(parentContainer);

window.onload = async (): Promise<void> => {
    document.body.appendChild(app.view);
};
