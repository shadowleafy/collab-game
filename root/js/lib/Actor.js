'use strict';
import Vec from './Vec';
/** Class representing an actor */
export class Actor {
	dom;
	location;
	/**
	 * Create an actor
	 * @param {Element} dom - The DOM node representing the actor
	 * @param {Vec} location - a Vec representing the actor's location
	 */
	constructor(dom, location = new Vec(0, 0)) {
		this.dom = dom;
		this.location = location;
	}
}
export default Actor;
