/** A class representing a weapon */
export class BaseWeapon {
	name;
	description;
	damage;
	art;
	/**
	 * Create a new weapon
	 * @param name - Weapon name
	 * @param description - Weapon description
	 * @param damage - Damage value
	 * @param art - POSIX-like path to weapon icon
	 */
	constructor(name, description, damage, art) {
		this.name = name;
		this.description = description;
		this.damage = damage;
		this.art = art;
	}
}
export default BaseWeapon;
