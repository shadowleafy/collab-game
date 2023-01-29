'use strict';
import Actor from './Actor';
/** Class representing a player */
export class Player extends Actor {
	/**
	 * Create a player
	 * @param {Element} dom - The DOM node representing the player
	 * @param {Vec} location - A Vec representing the player's location
	 */
	constructor(dom, location) {
		super(dom, location);
	}
}
export default Player;
