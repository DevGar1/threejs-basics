import { BoxBufferGeometry, Color, Mesh, MeshPhongMaterial, MeshNormalMaterial } from "three";

export default class CustomCube extends Mesh {
	constructor(x, y, z) {
		const geomery = new BoxBufferGeometry(x || 2, y || 2, z || 2);
		const material = new MeshNormalMaterial({ color: new Color("blue") });
		super(geomery, material);
	}
}
