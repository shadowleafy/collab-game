'use strict';
import { Collection } from '@discordjs/collection';
/** Class to manage BaseActors */
export class ActorManager extends Collection {
	entries;
	/**
	 * Create a new BaseActorManager
	 */
	constructor(entries = []) {
		super(entries);
	}
	addActor(actor) {
		this.set(this.size, actor);
		return this;
	}
}
export default ActorManager;
