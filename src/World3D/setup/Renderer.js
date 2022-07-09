import { WebGLRenderer } from "three";

export default class Renderer extends WebGLRenderer {
	constructor() {
		super();
	}

	renderScene(scene, camera) {
		this.render(scene, camera);
	}
}
