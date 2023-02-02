'use strict';
import BaseActor from './BaseActor.js';
import Vec from './Vec.js';

/** Class representing a player */
export class Player extends BaseActor {
	/**
	 * Create a player
	 * @param {Element} dom - The DOM node representing the player
	 * @param {Vec} location - A Vec representing the player's location
	 */
	constructor(dom: Element, location: Vec) {
		super(dom, location);
	}
}

export default Player;
