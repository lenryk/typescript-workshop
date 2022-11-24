// the ? properties are optional
var warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false
};
var mobyDick = {
    author: "Herman Melville",
    title: "Moby Dick"
};
function showBook(book) {
    console.log("".concat(book.author, " wrote ").concat(book.title));
    if (book.isRead !== undefined) {
        console.log(" I have ".concat(book.isRead ? "read" : "not read", " \nthis book"));
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
