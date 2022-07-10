import { Color, DirectionalLight, Mesh, MeshBasicMaterial, MeshStandardMaterial, Sphere, SphereBufferGeometry } from "three";
import { Cube } from "../components";
import { Resizer } from "../setup";
import { getSetUpScene } from "./main";

let camera;
let renderer;
let scene;
export default class World {
  constructor(container) {
    const { customCamera, customRenderer, customScene } = getSetUpScene(container);
    camera = customCamera;
    renderer = customRenderer;
    container.append(renderer.domElement);
    scene = customScene;
    const cube = new Cube(2, 2, 2);
    const child = new Cube(2, 2, 2);
    cube.add(child);
    child.position.set(0, 5, 0);
    cube.name = "cube";
    const data = new SphereBufferGeometry(1);
    const cube2 = new Mesh(data, new MeshStandardMaterial());
    cube2.name = "sphere";

    const light = new DirectionalLight("white", 8);
    light.position.set(0, 0, 10);
    light.name = "light";
    scene.add(cube);
    scene.add(cube2);
    scene.add(light);

    const resizer = new Resizer(container, camera, renderer);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    let newTime = 0;
    let isUp = true;
    const mostDistance = 20;
    function render(time) {
      time *= 0.001;
      child.rotateX(0.01);
      child.rotateZ(0.01);
      if (time % 2 === 0) cube.scale.set(1, cube.scale.y * -1, 1);
      cube2.rotateX(-0.1);
      cube2.rotateZ(-0.1);
      if (isUp && newTime < mostDistance) {
        newTime += 0.1;
      } else if (isUp && newTime > mostDistance) {
        isUp = false;
        newTime = mostDistance;
      } else if (!isUp && newTime > -mostDistance) {
        newTime -= 0.1;
      } else {
        isUp = true;
        newTime = -mostDistance;
      }
      const r = 5;
      const x = r * Math.cos(newTime / 2);
      const y = r * Math.sin(newTime / 2);
      const z = 0.5 * newTime;

      cube2.position.set(x, z, y);
      renderer.render(scene, camera);
      // light.position.set(newTime ** 2, newTime ** 2, 5);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  changeBackgroundColor(color) {
    scene.background = new Color(color.target.value);
    this.render();
  }
  changeCubeColor(color, name) {
    const { children } = scene;
    children.forEach((child) => {
      console.log(child);
      if (child.isMesh && child.name === name) {
        console.log(child);
        child.material.color = new Color(color);
      } else if (child.name === name) {
        child.color = new Color(color);
      }
    });
    this.render();
  }

  moveCube(cube) {
    cube.position;
  }

  render() {
    renderer.render(scene, camera);
  }
}
