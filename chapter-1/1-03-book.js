"use strict";
// the ? properties are optional
const warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false
};
const mobyDick = {
    author: "Herman Melville",
    title: "Moby Dick"
};
function showBook(book) {
    console.log(`${book.author} wrote ${book.title}`);
    if (book.isRead !== undefined) {
        console.log(` I have ${book.isRead ? "read" : "not read"} this book`);
    }
}
function setPages(book, pages) {
    book.pages = pages;
}
function readBook(book) {
    book.isRead = true;
}
setPages(warAndPeace, 1225);
showBook(warAndPeace);
showBook(mobyDick);
readBook(mobyDick);
showBook(mobyDick);
