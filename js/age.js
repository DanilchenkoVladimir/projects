/* age.js */
/**
 * @param {string} age
 */
 export function getNextAge(age) {
	if (age.length > 0){
		return Number.parseInt(age, 10) + 1;
	} else {
		return '0';
	}
}