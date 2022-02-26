/* age.js */
/**
 * @param {string} age
 */
 export function getNextAge(age) {
	if (age > 0){
		return Number.parseInt(age, 10) + 1;
	} else {
		return 0;
	}
}