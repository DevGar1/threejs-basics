export default class Resizer {
  constructor(container, camera, renderer) {
    window.addEventListener("resize", () => this.reReziser(container, camera, renderer));
  }
  onResizer() {}

  reReziser(container, camera, renderer) {
    // Set the camera's aspect ratio
    console.log("cmaera");
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);

    this.onResizer();
  }
}
