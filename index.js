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

// Time Complexity- O(n + m)
// Space Complexity- O(1)

// //if the typed in word is not in the dictionary, it should add the word to the dictionary and then return that word
// function onInput(input) {
// 	const word = input.value;
// 	const o = [];

// 	for (let word2 of dict || []) {
// 		// sort each word for comparison
// 		const sortedWord = word.split('').sort().join('');
// 		const sortedWord2 = word2.split('').sort().join('');
// 		if (sortedWord == sortedWord2) {
// 			o.push(word2);
// 		}
// 	}

// 	document.getElementById('output').innerHTML = JSON.stringify(o, null, 2);
// }

// function alphabetize(word) {
// 	if (!word) {
// 		return;
// 	}
// 	word = word.split('');
// 	word = word.sort();
// 	word = word.join('');
// 	return word;
// }

// ('use strict');
// const HashEntry = require('./HashEntry.js');
// const HashTable = require('./HashTable.js');

// //Return a value for a given key
// HashTable.prototype.search = function(key) {
// 	//Find the node with the given key
// 	let b_Index = this.getIndex(key);
// 	let head = this.bucket[b_Index];
// 	//Search key in the slots
// 	if (head != null) {
// 		while (head != null) {
// 			if (head.key == key) {
// 				return head.value;
// 			}
// 			head = head.next;
// 		}
// 	}
// 	//If key not found
// 	console.log('Key not found');
// 	return null;
// };

// let ht = new HashTable();
// ht.insert(2, 'London');
// console.log(ht.search(2));
