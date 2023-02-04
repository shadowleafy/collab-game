/** Class representing a point on a grid, counting from the top left */
export class Vec {
	x;
	y;
	/**
	 * Create a point
	 * @param {number} x - The x-coordinate
	 * @param {number} y - The y-coordinate
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	/**
	 * Moves the point up
	 * @param {number} distance - The distance to move by
	 */
	up(distance) {
		this.y -= distance;
		return this;
	}
	/**
	 * Moves the point down
	 * @param {number} distance - The distance to move by
	 */
	down(distance) {
		this.y += distance;
		return this;
	}
	/**
	 * Moves the point left
	 * @param {number} distance - The distance to move by
	 */
	left(distance) {
		this.x -= distance;
		return this;
	}
	/**
	 * Moves the point right
	 * @param {number} distance - The distance to move by
	 */
	right(distance) {
		this.x += distance;
		return this;
	}
}
export default Vec;
