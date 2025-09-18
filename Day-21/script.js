// Define a string variable
let krishna = 'HELlo WOLRD'
console.log(krishna) // Output: 'HELlo WOLRD'

// Length property returns the total number of characters in the string
console.log(krishna.length) // Output: 12

// Convert the string to all lowercase letters
let op = krishna.toLocaleLowerCase()
console.log(op) // Output: 'hello wolrd'

// Convert the string to all uppercase letters
let cp = krishna.toLocaleUpperCase()
console.log(cp) // Output: 'HELLO WOLRD'

// Remove whitespace from both ends of the string (none here, but shown for usage)
let dp = krishna.trim()
console.log(dp) // Output: 'HELlo WOLRD'

// Example with actual whitespace
const Annu = "      I LOVE YOU BABY      "

// Remove whitespace only from the start
const baby = Annu.trimStart()

// Remove whitespace only from the end
const cutiepie = Annu.trimEnd()

console.log(baby)      // Output: 'I LOVE YOU BABY      '
console.log(cutiepie)  // Output: '      I LOVE YOU BABY'

// ------------- Methods Without Arguments -------------

// Check if the lowercase version of the string includes 'i' (case-sensitive)
console.log(op.includes('i')) // Output: false

// Check if it includes lowercase 'h'
console.log(op.includes('h')) // Output: true

// Find the index of the first occurrence of lowercase 'w'
console.log(op.indexOf('w')) // Output: 6

// Replace first lowercase 'w' with uppercase 'W'
console.log(op.replace('w','W')) // Output: 'hello Wolrd'

// ------------- Concatenation -------------

// Combine two strings using .concat()
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result) // Output: 'seafood'

// ------------- Padding Strings -------------

// Pad the start of the string with '0' until it reaches length 4
let text = "5";
text = text.padStart(4,"0");
console.log(text) // Output: '0005'

// Pad the end of the string with '0' until it reaches length 4
let lext = "5";
text = lext.padEnd(4,"0");
console.log(text) // Output: '5000'

// ------------- Character Access -------------

// Access character at specific position using charAt()
let pext = "HELLO WORLD";
let letter = pext.charAt(0); // Gets the first character
console.log(letter) // Output: 'H'

// Trying to access a character using array index on single character
console.log(letter[6]) // Output: undefined (letter = 'H', which has only 1 character)








// | Concept                                         | Explanation                                                  |
// | ----------------------------------------------- | ------------------------------------------------------------ |
// | `.length`                                       | Total number of characters                                   |
// | `.toLocaleLowerCase()` / `.toLocaleUpperCase()` | Changes case of string                                       |
// | `.trim()`, `.trimStart()`, `.trimEnd()`         | Removes whitespace                                           |
// | `.includes()`                                   | Checks for presence of substring                             |
// | `.indexOf()`                                    | Returns position of character/substring (or -1 if not found) |
// | `.replace()`                                    | Replaces first match of a character or substring             |
// | `.concat()`                                     | Combines strings                                             |
// | `.padStart()` / `.padEnd()`                     | Pads string to desired length                                |
// | `.charAt()`                                     | Returns character at a specific index                        |
