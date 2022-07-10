import { WebGLRenderer } from "three";

export default class Renderer extends WebGLRenderer {
	constructor() {
		super();
		this.physicallyCorrectLights = true;
	}

	renderScene(scene, camera) {
		this.render(scene, camera);
	}
}
