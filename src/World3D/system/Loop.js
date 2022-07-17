import { Clock } from "three";

const updatables = [];
const clock = new Clock();

export default class Loop {
  constructor(scene, camera, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }

  start() {
    console.log("start");
    this.renderer.setAnimationLoop((time) => {
      this.tick(time);
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick(time) {
    const delta = clock.getDelta();
    for (const object of updatables) {
      object.tick(delta, time);
    }
  }
  addUpdatables(object) {
    updatables.push(object);
  }
}
