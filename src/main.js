import { World } from "./World3D/system";

const main = () => {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  const inputElement = document.getElementById("background");
  inputElement.addEventListener("input", world.changeBackgroundColor);
  const activeAnimation = document.getElementById("stop");
  activeAnimation.addEventListener("click", () => {
    const text = activeAnimation.getAttribute("value");
    console.log(text);
    const isActive = text === "Activar";
    const newText = isActive ? "Pausar" : "Activar";
    activeAnimation.setAttribute("value", newText);

    if (isActive) {
      world.start();
    } else {
      world.stop();
    }
  });
};

main();
