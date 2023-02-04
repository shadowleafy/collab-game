'use strict';
import Level from './Level.js';
import Vec from './Vec.js';

/** Class representing a barebones actor */
export class BaseActor {
	dom: Element;
	location: Vec;
	level: Level;
	/**
	 * Create an actor
	 * @param {Element} dom - The DOM node representing the actor
	 * @param {Vec} location - a Vec representing the actor's location
	 */
	constructor(dom: Element, location: Vec, level: Level) {
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
