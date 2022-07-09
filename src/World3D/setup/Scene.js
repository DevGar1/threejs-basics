import { Color, Scene as SceneThree } from "three";
export default class Scene extends SceneThree {
	constructor() {
		super();
		this.background = new Color("sandybrown");
	}
}
