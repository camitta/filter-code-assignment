/**
 * function that validates class codes
 *
 * returns true if code does not contain distracting words
 * and does not already exist
 * returns false if code contains distracting words or already exists
 *
 * @param {string} code Class code to be validated
 * @param {Array.<string>} distracting_words List of distracting words
 * @param {Object} existing_codes List of existing class codes
 * @return {boolean}
 *
 */

//checks if code is valid
function isCodeValid(code, distracting_words, existing_codes) {
	//edge cases
	if (!code) {
		console.log('Code missing. Please enter code.');
		return false;
	}
	const code_u = code.toUpperCase();
	//Checks if existing_codes already contains code
	if (existing_codes[code_u]) {
		console.log('This code already exists. Please create new code.');
		return false;
	}
	//iterate through array of distracting_words and use stringCheck to check word against code
	for (let word of distracting_words) {
		//only need to check words with length less than code length
		if (word.length <= code.length && containsDist(code_u, word.toUpperCase())) {
			return false;
		}
	}
	existing_codes[code_u] = code_u;
	return true;
}

//checks if code_word contains dist_word
function containsDist(code_word, dist_word) {
	let code_idx = 0;
	let dist_idx = 0;
	while (code_idx < code_word.length) {
		if (code_word[code_idx] === dist_word[dist_idx]) {
			dist_idx++;
			if (dist_idx === dist_word.length) {
				return true;
			}
		}
		code_idx++;
	}
	return false;
}
