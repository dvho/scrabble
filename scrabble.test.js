const sc = require('./scrabble.js')

const undefinedInputs = sc(undefined)
if (undefinedInputs !== 'Your input is undefined.') {
    throw new Error('sc not recognizing undefined inputs')
}

const nonStringInputs = sc(76589)
if (nonStringInputs !== 'Your input is not a string.') {
    throw new Error('sc not recognizing non string inputs')
}

const nonAlphabeticCharacters = sc('p4p%oi&ajsdb')
if (nonAlphabeticCharacters !== 'Your input contains non alphabetic characters.') {
    throw new Error('sc not recognizing non alphabetic characters')
}
