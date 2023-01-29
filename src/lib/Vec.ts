'use strict';
/** Class representing a point on a grid */
export class Vec {
	x: number;
	y: number;
	/**
	 * Create a point
	 * @param {number} x - The x-coordinate
	 * @param {number} y - The y-coordinate
	 */
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Moves the point up
	 * @param {number} distance - The distance to move by
	 */
	up(distance: number): this {
		this.y += distance;
		return this;
	}

	/**
	 * Moves the point down
	 * @param {number} distance - The distance to move by
	 */
	down(distance: number): this {
		this.y -= distance;
		return this;
	}

	/**
	 * Moves the point left
	 * @param {number} distance - The distance to move by
	 */
	left(distance: number): this {
		this.x -= distance;
		return this;
	}

	/**
	 * Moves the point right
	 * @param {number} distance - The distance to move by
	 */
	right(distance: number): this {
		this.x += distance;
		return this;
	}
}

export default Vec;
