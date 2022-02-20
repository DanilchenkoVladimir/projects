/* age.js */
/**
 * @param {string} age
 */
 export function getNextAge(age) {
	let yourAge = Number.parseInt(age, 10);
	console.log(typeof yourAge)
	return yourAge + 1;

	
}