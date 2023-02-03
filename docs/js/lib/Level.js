'use strict';
import './ActorManager.js';
import './Player.js';
/** Class representing a level */
export class Level {
	dom;
	width;
	height;
	actors;
	player;
	/**
	 * Create a level
	 */
	constructor(dom, width, height, actors, player) {
		this.dom = dom;
		this.width = width;
		this.height = height;
		this.actors = actors;
		this.player = player;
		// todo: Add DOM initialization
	}
}
export default Level;
