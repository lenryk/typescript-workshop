"use strict";
function toTitleCase(input) {
    return input.split(' ').map(el => `${el[0].toUpperCase()}${el.substring(1).toLowerCase()}`).join(' ');
}
console.log(toTitleCase("war AND peace"));
console.log(toTitleCase("Catcher in the Rye"));
console.log(toTitleCase("tO kILL A mOCKINGBIRD"));
function countWords(input) {
    return input.replaceAll('-', ' ').replaceAll('_', ' ').split(' ').length;
}
console.log(countWords("War and Peace"));
console.log(countWords("catcher-in-the-rye"));
console.log(countWords("for_whom the-bell-tolls"));
function toWords(input) {
    return input.replaceAll('-', ' ').replaceAll('_', ' ').split(' ');
}
console.log(toWords("War and Peace"));
console.log(toWords("catcher-in-the-rye"));
console.log(toWords("for_whom the-bell-tolls"));
function repeat(input, times) {
    return input.repeat(times);
}
console.log(repeat('War', 3));
console.log(repeat('rye', 1));
console.log(repeat('bell', 0));
function isAlpha(input) {
    return input.search(/[\d\s]/) < 0;
}
console.log(isAlpha('War and Peace'));
console.log(isAlpha('Atonement'));
console.log(isAlpha('1Q84'));
function isBlank(input) {
    return [...input.matchAll(/\w/g)].length === 0;
}
console.log(isBlank("War and Peace"));
console.log(isBlank(" "));
console.log(isBlank(""));
