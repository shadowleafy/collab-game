'use strict';
import BaseActor from './BaseActor.js';
/** Class representing a player */
export class Player extends BaseActor {
	/**
	 * Create a player
	 * @param {Element} dom - The DOM node representing the player
	 * @param {Vec} location - A Vec representing the player's location
	 */
	constructor(dom, location, level) {
		super(dom, location, level);
	}
}
export default Player;
