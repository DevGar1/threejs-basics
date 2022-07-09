import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
	constructor(fov, container, near, far) {
		const aspect = container.clientWidth / container.clientHeight;
		super(fov, aspect, near, far);
	}
}
