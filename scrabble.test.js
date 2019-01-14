const sc = require('./scrabble.js');

const undefinedInputs = sc(undefined);
if (undefinedInputs !== `Your input is undefined.`) {
    throw new Error('sc not recognizing undefined inputs');
}

const nonStringInputs = sc(76589);
if (nonStringInputs !== `Your input is not a string.`) {
    throw new Error('sc not recognizing non string inputs');
}
