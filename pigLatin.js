module.exports = toPigLatin;

const CONSONANT_DIGRAPHS = {
	bl: true,
	br: true,
	ch: true,
	ck: true,
	cl: true,
	cr: true,
	dr: true,
	fl: true,
	fr: true,
	gh: true,
	gl: true,
	gr: true,
	ng: true,
	ph: true,
	pl: true,
	pr: true,
	qu: true,
	sc: true,
	sh: true,
	sk: true,
	sl: true,
	sm: true,
	sn: true,
	sp: true,
	st: true,
	sw: true,
	th: true,
	tr: true,
	tw: true,
	wh: true,
	wr: true
};

const CONSONANT_TRIGRAPHS = {
	nth: true,
	sch: true,
	scr: true,
	shr: true,
	spl: true,
	spr: true,
	squ: true,
	str: true,
	thr: true
};

const VOWELS = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true
};

function toPigLatin (str) {
	let words = str.split(' ');
	const sentence = [];

	words.forEach((word) => {
		let strippedWord = stripPunctuation(word.toLowerCase());
		let pigLatin = wordToPigLatin(strippedWord);
		let punctuations = word.slice(strippedWord.length);
		let isCapitalized = word[0].toUpperCase() === word[0];

		if (isCapitalized) {
			pigLatin = pigLatin[0].toUpperCase() + pigLatin.slice(1);
		}

		sentence.push(pigLatin.concat(punctuations));
	});

	return sentence.join(' ');
}

function stripPunctuation (word) {
	return word.replace(/[.,\/#!$%?\&;:_`~]/g,"");
}

function wordToPigLatin(word) {
	let consonant = '';

	if (VOWELS[word[0]]) {
		return word + 'way';
	}

	consonant = word.slice(0,3);
	if (CONSONANT_TRIGRAPHS[consonant]) {
		return word.slice(3) + consonant + 'ay';
	}

	consonant = word.slice(0, 2);
	if (CONSONANT_DIGRAPHS[consonant]) {
		return word.slice(2) + consonant + 'ay';
	}

	consonant = word.slice(0, 1);
	return word.slice(1) + consonant + 'ay';
}	

return toPigLatin;
