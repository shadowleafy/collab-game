'use strict';
import { Collection } from '@discordjs/collection';
/** Class to manage BaseActors */
export class ActorManager extends Collection {
	/**
	 * Create a new BaseActorManager
	 * @param {Iterable<readonly [number, BaseActor]>} entries - A list of starting entries
	 */
	constructor(entries) {
		super(entries);
	}
	addActor(actor) {
		this.set(this.size, actor);
		return this;
	}
	deleteActor(id) {
		return this.delete(id);
	}
	update() {
		const promises = [];
		this.forEach((actor) => promises.push(actor.update()));
		return Promise.all(promises);
	}
}
export default ActorManager;
