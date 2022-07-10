import { World } from "./World3D/system";

const main = () => {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  world.render();
  const inputElement = document.getElementById("background");
  const inputElement2 = document.getElementById("cube");
  const inputElement3 = document.getElementById("sphere");
  const inputElement4 = document.getElementById("light");
  inputElement.addEventListener("input", world.changeBackgroundColor);
  inputElement2.addEventListener("input", (event) => {
    world.changeCubeColor(event.target.value, "cube");
  });
  inputElement3.addEventListener("input", (event) => {
    world.changeCubeColor(event.target.value, "sphere");
  });
  inputElement4.addEventListener("input", (event) => {
    world.changeCubeColor(event.target.value, "light");
  });
};

main();
