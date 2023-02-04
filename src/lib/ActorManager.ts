'use strict';
import { BaseActor } from './BaseActor.js';
import { Collection } from '@discordjs/collection';

/** Class to manage BaseActors */
export class ActorManager extends Collection<number, BaseActor> {
	/**
	 * Create a new BaseActorManager
	 * @param {Iterable<readonly [number, BaseActor]>} entries - A list of starting entries
	 */
	constructor(entries?: Iterable<readonly [number, BaseActor]>) {
		super(entries);
	}
	addActor(actor: BaseActor) {
		this.set(this.size, actor);
		return this;
	}
	deleteActor(id: number) {
		return this.delete(id);
	}
	update() {
		const promises: Promise<void>[] = [];
		this.forEach((actor) => promises.push(actor.update()));
		return Promise.all(promises);
	}
}

export default ActorManager;
