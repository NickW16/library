const myLibrary = [];

const libraryContent = document.getElementById('library-content');

function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    if (read === "not read") {
        this.read = false;
    } else {
        this.read = true;
    }    
    this.info = function() {
        return(this.name + " by " + this.author + ", " + this.pages + " pages , " + this.read)
    };
}

function displayBooks() {

    libraryContent.textContent = '';
    // Append each book data to the library
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const bookName = document.createElement('div');
        bookName.className = 'book-name';
        bookName.textContent = book.name;
        bookDiv.appendChild(bookName);

        const bookAuthor = document.createElement('div');
        bookAuthor.className = 'book-author';
        bookAuthor.textContent = book.author;
        bookDiv.appendChild(bookAuthor);

        const bookPages = document.createElement('div');
        bookPages.className = 'book-pages';
        bookPages.textContent = book.pages;
        bookDiv.appendChild(bookPages);

        //this section has a boolean counter
        const bookRead = document.createElement('button');
        bookRead.className = book.read ? 'book-read' : 'book-not-read';
        bookRead.textContent = book.read ? 'Read' : 'Not Read';
        bookRead.addEventListener('click', () => {
            // toggle read status
            if(book.read) {
                book.read = false;
                bookRead.className = 'book-not-read';
                bookRead.textContent = 'Not Read';
            } else {
                book.read = true;
                bookRead.className = 'book-read';
                bookRead.textContent = 'Read';
            }
        });

        bookDiv.appendChild(bookRead);

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