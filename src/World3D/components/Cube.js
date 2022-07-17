import { BoxBufferGeometry, Color, Mesh, MeshPhongMaterial, MeshNormalMaterial, MathUtils } from "three";

export default class CustomCube extends Mesh {
  constructor(x, y, z) {
    console.log(x, y, z);
    const geomery = new BoxBufferGeometry(x || 2, y || 2, z || 2);
    const material = new MeshPhongMaterial({ color: "red" });
    super(geomery, material);
    let data = 0;
    let cyclo = 0;
    let isActive = true;
    const ROTATION_VALUE = MathUtils.degToRad(360 * 1.5);
    const ROTATION_FINISH = MathUtils.degToRad(360);
    this.tick = (delta, time) => {
      if (!isActive) return;
      if (cyclo >= ROTATION_FINISH) {
        this.rotation.y = 0;
        return;
      }

      const value = ROTATION_VALUE * delta;
      cyclo += value;
      data += value;
      this.rotation.y = data;
    };
  }
}
