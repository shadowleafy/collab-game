import { Level } from './Level.js';

/** Class to represent a map in the game */
export class Map {
	levels: Level[];
	constructor(levels: Level[]) {
		this.levels = levels;
	}
}

export default Map;
