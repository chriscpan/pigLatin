let toPigLatin = require('./pigLatin');


console.log('ellohay' === toPigLatin('hello') || 'should be ellohay');
console.log('eatway' === toPigLatin('eat') || 'should be eatway');
console.log('eatway orldway' === toPigLatin('eat world') || 'should be eatway orldway?!');
console.log('Ellohay' === toPigLatin('Hello') || 'should be Ellohay');
console.log('Applesway' === toPigLatin('Apples') || 'should be Applesway');
console.log('eatway... orldway?!' === toPigLatin('eat... world?!') || 'should be oolschay');
console.log('oolschay' === toPigLatin('school') || 'should be ickquay');
console.log('ickquay' === toPigLatin('quick') || 'should be ickquay');

