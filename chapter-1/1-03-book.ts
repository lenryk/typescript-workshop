interface Book {
    author: string;
    title: string;
    pages?: number;
    isRead?: boolean;
}
// the ? properties are optional

const warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false
}
const mobyDick: Book = {
    author: "Herman Melville",
    title: "Moby Dick"
}

function showBook(book: Book) {
    console.log(`${book.author} wrote ${book.title}`);
    if (book.isRead !== undefined) {
        console.log(` I have ${book.isRead ? "read" : "not read"} this book`);
    }
}

function setPages (book: Book, pages: number) {
    book.pages = pages;
}

function readBook(book: Book) {
    book.isRead = true;
}


setPages(warAndPeace, 1225);
showBook(warAndPeace);
showBook(mobyDick);
readBook(mobyDick);
showBook(mobyDick);