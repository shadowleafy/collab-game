'use strict';
/** Class representing a barebones actor */
export class BaseActor {
	dom;
	location;
	level;
	/**
	 * Create an actor
	 * @param {Element} dom - The DOM node representing the actor
	 * @param {Vec} location - a Vec representing the actor's location
	 */
	constructor(dom, location, level) {
		this.dom = dom;
		this.location = location;
		this.level = level;
	}
	async update() {
		// todo: Do something to move this.dom element
		// returns promise
	}
}
export default BaseActor;
