import { Color, MathUtils, SpotLight } from "three";
import { Cube } from "../components";
import { getSetUpScene } from "./main";

let camera;
let renderer;
let scene;
let loop;
export default class World {
  constructor(container) {
    const { customCamera, customRenderer, customScene, customLoop } = getSetUpScene(container);
    camera = customCamera;
    renderer = customRenderer;
    loop = customLoop;
    scene = customScene;
    const light = new SpotLight("red");
    light.position.set(0, 0, 10);
    let newTime = 0;
    light.tick = (delta, time) => {
      const rads = MathUtils.degToRad(90);
      newTime += delta * rads;
      const y = 10;
      const x = 10 * Math.cos(newTime);
      const z = 10 * Math.sin(newTime);
      light.position.set(x, y, z);
      light.lookAt(0, 0, 0);
    };
    const cube = new Cube(2, 2, 2);
    loop.addUpdatables(cube);
    loop.addUpdatables(light);
    scene.add(cube);
    scene.add(light);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    console.log(renderer);
  }

  changeBackgroundColor(color) {
    scene.background = new Color(color.target.value);
    this.render();
  }

  render() {
    console.log("render");
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
