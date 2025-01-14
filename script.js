const myLibrary = [];

const libraryContent = document.getElementById('library-content');

function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.name + " by " + this.author + ", " + this.pages + " pages , " + this.read)
    };
}

function displayBooks() {

    libraryContent.textContent = '';
    // Loop through the library and display each book
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.textContent = `${index + 1}. ${book.info()}`;

        libraryContent.appendChild(bookDiv);
    });
}

function addBookToLibrary(addBook) {
    myLibrary.push(addBook);
    displayBooks();
}

const theHobbit = new book ('The Hobbit', 'J.R.R Tolkien', '295','not read');
addBookToLibrary(theHobbit);
const zen = new book ('The Way of Zen', 'Alan Watts', '432', 'read');
addBookToLibrary(zen);