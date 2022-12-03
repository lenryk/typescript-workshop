"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentence = exports.capitalize = exports.arrayToObjectSegment = void 0;
const arrayToObjectSegment = (words) => {
    if (words.length < 1) {
        return '';
    }
    if (words.length === 1) {
        return ` ${words[0]}`;
    }
    let segment = '';
    for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            segment += ` and ${words[i]}`;
        }
        else {
            segment += ` ${words[i]},`;
        }
    }
    return segment;
};
exports.arrayToObjectSegment = arrayToObjectSegment;
const capitalize = (sentence) => {
    return `${sentence.charAt(0).toUpperCase()}${sentence
        .slice(1)
        .toLowerCase()}`;
};
exports.capitalize = capitalize;
const sentence = (subject, verb, ...objects) => {
    return (0, exports.capitalize)(`${subject} ${verb} ${(0, exports.arrayToObjectSegment)(objects)}.`);
};
exports.sentence = sentence;
console.log((0, exports.sentence)('the cat', 'ate', 'apples', 'cheese', 'pancakes'));
console.log((0, exports.sentence)('the cat', 'slept', 'all day'));
console.log((0, exports.sentence)('the cat', 'sneezed'));
