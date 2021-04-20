/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('isCodeValid', () => {
	it('the isCodeValid function returns a boolean', () => {
		expect(typeof isCodeValid('HA1THAF', [ 'haha', 'ugh', '777' ], {})).toBe('boolean');
		expect(typeof isCodeValid('BLAH', [ 'dumb', 'yo', 'lmao' ], { J9LJLI: 'J9LJLI' })).toBe('boolean');
	});

	it('the isCodeValid function returns true if the "code" (first argument) does not contain any of the "distracting_words" (second argument) and does not already exist in "existing_words" (third argument)', () => {
		const code = 'G9LE5J';
		const distracting_words = [ 'darn', 'egg', 'fuzzy', 'kthx', 'haha', 'ugh', '777', 'cheese' ];
		const existing_words = { J9LVJ5: 'J9LVJ5', KL90V5: 'KL90V5' };
		expect(isCodeValid(code, distracting_words, existing_words)).toBe(true);

		expect(isCodeValid('J9LVJ5', distracting_words, existing_words)).toBe(false);
	});

	it('the isCodeValid function returns false if the "code" (first argument) contains any of the "distracting_words" (second argument)', () => {
		const distracting_words = [ 'darn', 'rats', 'fuzzy', 'kthx', 'haha', 'ugh', '777', 'cheese' ];
		expect(isCodeValid('RA1TS9', distracting_words, {})).toBe(false);
		expect(isCodeValid('F9U9ZZ5Y', distracting_words, {})).toBe(false);
	});

	it('the isCodeValid function returns false if the "code" (first argument) already exists in "existing_words" (third argument)', () => {
		const code = 'J9LVJ5';
		const distracting_words = [ 'darn', 'rats', 'fuzzy', 'kthx', 'haha', 'ugh', '777', 'cheese' ];
		const existing_words = { J9LVJ5: 'J9LVJ5', KL90V5: 'KL90V5' };
		expect(isCodeValid(code, distracting_words, existing_words)).toBe(false);
	});

	it('the isCodeValid function returns false if the "code" (first argument) is an empty string', () => {
		const code = '';
		const distracting_words = [ 'darn', 'rats', 'fuzzy', 'kthx', 'haha', 'ugh', '777', 'cheese' ];
		expect(isCodeValid(code, distracting_words, {})).toBe(false);
	});

	it('the isCodeValid function adds a valid code to the list of existing words', () => {
		const code = 'J9LW35';
		const distracting_words = [ 'darn', 'rats', 'fuzzy', 'kthx', 'haha', 'ugh', '777', 'cheese' ];
		expect(isCodeValid(code, distracting_words, {})).toBe(true);
	});
});

describe('containsDist', () => {
	it('the containsDist function returns a boolean', () => {
		expect(typeof containsDist('HA1THAF', 'RATS')).toBe('boolean');
		expect(typeof containsDist('RATS', 'RATS')).toBe('boolean');
	});

	it('the containsDist function returns true if the "code_word" (first argument) contains the "dist_word" (second argument)', () => {
		expect(containsDist('U1K5GH', 'UGH')).toBe(true);
		expect(containsDist('FG36SWRATS', 'RATS')).toBe(true);
	});

	it('the containsDist function returns false if the "code" (first argument) does not contain the "dist_word" (second argument)', () => {
		expect(containsDist('W14FVW', 'LOL')).toBe(false);
		expect(containsDist('E64LM', 'CHEESE')).toBe(false);
	});
});
