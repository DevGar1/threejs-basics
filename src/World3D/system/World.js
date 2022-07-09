import { Color, Mesh, MeshBasicMaterial, MeshNormalMaterial, Sphere, SphereBufferGeometry } from "three";
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
		const data = new SphereBufferGeometry(1);
		const cube2 = new Mesh(data, new MeshNormalMaterial());
		scene.add(cube);
		scene.add(cube2);
		const resizer = new Resizer(container, camera, renderer);
		this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
		let newTime = 0;
		let isUp = true;
		const mostDistance = 20;
		function render() {
			cube.rotateX(0.1);
			cube.rotateZ(0.1);
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
			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);
	}

	changeBackgroundColor(color) {
		scene.background = new Color(color.target.value);
		this.render();
	}

	moveCube(cube) {
		cube.position;
	}

	render() {
		renderer.render(scene, camera);
	}
}
