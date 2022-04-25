# Scrabble
[_Scrabble_](https://www.npmjs.com/package/scrabble) is a lightweight module that lets you cheat on a wide range of word games, most notably, the eponymous. Pass your letters into [_Scrabble_](https://www.npmjs.com/package/scrabble) as a string and it will return an array of all the possible combinations of those letters that comprise words in the English Dictionary. [_Scrabble_](https://www.npmjs.com/package/scrabble) is also useful for "Words with Friends," and other popular iOS and Android apps.

<img src="https://user-images.githubusercontent.com/45696445/51098960-ba088100-179b-11e9-9096-88b5b1d92d39.gif">

_________________________
## API
### scrabble(`string`)
```js
var scrabble = require('scrabble');
```
&nbsp;
_________________________
#### -- Example 1 --
```js
console.log(scrabble('hdjfaloc'));
```
> Output will be:
```
["a", "acold", "ad", "ado", "ah", "ahold", "al", "cad", "calf", "calo", "chad", "chao", "clad", "clod", "coal", "cod", "coda", "col", "cola", "cold", "da", "dah", "dahl", "dal", "dhal", "do", "doc", "dol", "fa", "fad", "fado", "floc", "foal", "focal", "foh", "fold", "ha", "had", "hadj", "haj", "half", "halo", "hao", "ho", "hod", "hold", "jo", "la", "lac", "lad", "lo", "loach", "load", "loaf", "loca", "loch", "oaf", "oca", "od", "oda", "odah", "of", "oh", "old"]
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 2 --
```js
console.log(scrabble('zjfykiotdp'));
```
> Output will be:
```
["di", "dif", "dip", "dipt", "dit", "ditz", "ditzy", "do", "doit", "dopy", "dot", "doty", "dozy", "fi", "fid", "fido", "fit", "fiz", "fop", "foy", "fozy", "i", "id", "if", "it", "jo", "joky", "jot", "joy", "ki", "kid", "kif", "kip", "kit", "koi", "koji", "kop", "od", "of", "oft", "oi", "op", "opt", "oy", "pi", "pit", "pity", "pod", "poi", "poky", "pot", "pyoid", "ti", "tidy", "tip", "to", "tod", "tody", "top", "topi", "toy", "typo", "yid", "yip", "yo", "yod", "yok", "zip", "zit"]
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 3 --
```js
console.log(scrabble('jke'));
```
> Output will be:
```
"No combination of these letters creates a word in the Engish language."
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 4 --
```js
console.log(scrabble(87656));
```
> Output will be:
```
"Your input is not a string."
```
_________________________
&nbsp;
## Notes
[_Scrabble_](https://www.npmjs.com/package/scrabble) is a lightweight module that lets you cheat on a wide range of word games, most notably, the eponymous. Pass your letters into [_Scrabble_](https://www.npmjs.com/package/scrabble) as a string and it will return an array of all the possible combinations of those letters that comprise words in the English Dictionary. [_Scrabble_](https://www.npmjs.com/package/scrabble) is also useful in "Words with Friends," "Take a Letter," "Typo," "Dabble," "Word on the Street," "Quiddler," "Big Boggle," "Crazy Letters," "Tick-Tock Boom," "Bananagram," "Upwords," "Last Letter," "Wordical," "Latice," "WordSpiel Card Game," "One Up!," "Wordigo," "Buy World," "Paperback," "Letter Tycoon," "Wibbell++," "Wordsy," "Unspeakable Words," "Wordiamo," "WordOn," "SmartFeud," "Tanglet," "Lexica," "Crosswords Arena," "ReWordz," "Word Domination," "Wordfeud," "CrossCraze," "Rex Verbi," "Alphabear," "Letters of Gold," "Word Colors," "WordIt 2," "Webfeud," "Anadrome," "Falling Word Search," "Words of Gold," "Game of Words: Cross and Connect," "Letterpad," "Word Social," "Wordigami," "Wordbase," etc.

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install scrabble
```

## License
(MIT)

Copyright (c) 2019 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
