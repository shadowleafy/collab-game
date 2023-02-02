'use strict';
import { ActorManager } from './ActorManager.js';
import { Player } from './Player.js';

/** Class representing a level */
export class Level {
	dom: Element;
	width: number;
	height: number;
	actors: ActorManager;
	player: Player;
	/**
	 * Create a level
	 */
	constructor(
		dom: Element,
		width: number,
		height: number,
		actors: ActorManager,
		player: Player
	) {
		this.dom = dom;
		this.width = width;
		this.height = height;
		this.actors = actors;
		this.player = player;
		// todo: Add DOM initialization
	}
}

export default Level;
