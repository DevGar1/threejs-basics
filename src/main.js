import { World } from "./World3D/system";

const main = () => {
	const container = document.querySelector("#scene-container");
	const world = new World(container);
	world.render();
	const inputElement = document.getElementById("background");
	inputElement.addEventListener("input", world.changeBackgroundColor);
};

main();
