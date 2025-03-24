let str = '';
str = "Hi, I am Chandan Kumar";

let val = '';

/**
 * at()
 * returns the character at the given index.
*/
val = str.at(7);
// console.log(val);

/**
 * charAt()
 * returns the character at the given index.
*/
val = str.charAt(4);
// console.log(val);

/**
 * charCodeAt()
 * returns ASCII code for the character at the given index.
*/
val = str.charCodeAt(6);
// console.log(val);

/**
 * codePointAt()
 * returns ASCII code for the character at the given index.
*/
val = str.codePointAt(6);
// console.log(val);

/**
 * formCharCode()
 * return character for the ASCII code.
*/
val = String.fromCharCode(val);
// console.log(val)

/**
 * indexOf()
 * returns index of the first character that matches with the given character or
 * -1 if not found.
*/
val = str.indexOf('C');
// console.log(val);

