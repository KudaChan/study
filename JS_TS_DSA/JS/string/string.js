let str = "";
str = "Hi, I am Chandan Kumar";

let val = "";

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
 * returns character for the ASCII code.
 */
val = String.fromCharCode(val);
// console.log(val)

/**
 * indexOf()
 * returns index of the first character that matches with the given character or
 * -1 if not found.
 */
val = str.indexOf("C");
// console.log(val);

/**
 * lastIndexOf()
 * returns index of the last character that matches with the given character or
 * -1 if not found.
 */
val = str.indexOf("C");
// console.log(val);

/**
 * startWith()
 * returns boolean value if the string starts with given char or not.
 */
val = str.startsWith("c");
// console.log(val)

/**
 * endsWith()
 * returns boolean value if the string ends with given char or not.
 */
val = str.endsWith("c");
// console.log(val)

/**
 * includes()
 * returns boolean value if the string contains the given character or not.
 */
val = str.includes("C");
// console.log(val);

/**
 * match()
 * returns matched character or string with index.
 */
val = str.match("Cha");
// console.log(val);

/**
 * matchAll()
 * returns an iterator of all result matching the string against a given char.
 */
val = [...str.matchAll("a")];
// console.log(val);

/**
 * search()
 * returns the index of matched result if found else -1.
 */
val = str.search("x");
// console.log(val);

/**
 * padStart()
 * returns a new string with padding at the start of the string if the length of
 * the string is less than the given length.
 */
val = str.padStart(25, "*");
// console.log(val);

/**
 * padEnd()
 * returns a new string with padding at the end of the string if the length of
 * the string is less than the given length.
 */
val = str.padEnd(25, "*");
// console.log(val);

/**
 * repeat()
 * returns a new string with the given number of copies of the string.
 */
val = str.repeat(2);
// console.log(val);

/**
 * replace()
 * returns a new string with the string replaced with the given string.
 */

val = str.replace("Chandan", "chandan");
// console.log(val);

/**
 * concat()
 * returns a new string with the given string concatenated.
 */
val = str.concat(". Born in year 2002");
// console.log(val);

/**
 * split()
 * returns an array of substrings separated by the given pattern as ordered list.
 */
val = str.split(" ");
// console.log(val);

/**
 * slice()
 * extracts a section of this string and returns it as a new string, without modifying the original string
 */
val = str.slice(9, 16);
// console.log(val);

/**
 * substring()
 * returns a section of a string between two specified indices
 */
val = str.substring(9, 16);
// console.log(val);

/**
 * trim()
 * removes whitespace from both ends of this string and returns a new string, without modifying the original string.
 */
val = str.trim();
// console.log(val);

/**
 * trimStart()
 * removes whitespace from the start of this string and returns a new string, without modifying the original string.
 */
val = str.trimStart();
// console.log(val);

/**
 * trimEnd()
 * removes whitespace from the end of this string and returns a new string, without modifying the original string.
 */
val = str.trimEnd();
// console.log(val);

/**
 * toLowerCase()
 * returns a new string with all characters in lower case.
 */
val = str.toLowerCase();
// console.log(val);

/**
 * toUpperCase()
 * returns a new string with all characters in upper case.
 */
val = str.toUpperCase();
// console.log(val);

/**
 * toLocaleLowerCase()
 * returns a new string with all characters in lower case, according to the locale.
 */
val = str.toLocaleLowerCase();
// console.log(val);

/**
 * toLocaleUpperCase()
 * returns a new string with all characters in upper case, according to the locale.
 */
val = str.toLocaleUpperCase();
// console.log(val);

/**
 * normalize()
 * returns the Unicode Normalization Form of this string.
 */
val = str.normalize();
// console.log(val);

/**
 * toWellFormed()
 * returns a string with all code points in the range U+0000 to U+FFFF.
 */
val = str.toWellFormed();
// console.log(val);
