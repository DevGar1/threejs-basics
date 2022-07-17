import { Camera, Renderer, Scene } from "../setup";
import Loop from "./Loop";

const getSetUpScene = (container) => {
  const camera = new Camera(70, container, 0.1, 100);
  camera.position.set(0, 0, 10);
  const scene = new Scene();
  const renderer = new Renderer();
  const loop = new Loop(scene, camera, renderer);
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.append(renderer.domElement);

  return {
    customCamera: camera,
    customScene: scene,
    customRenderer: renderer,
    customLoop: loop,
  };
};

export { getSetUpScene };
