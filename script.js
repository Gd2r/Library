
// -----------------------------------------------

class Book{
    constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        toggleRead() {
            this.read = !this.read;
        }

        Bookinfo() {
            console.log(`Name: ${this.title}, author: ${this.title}, pages: ${this.pages}, read: ${this.read}`)
        }

}

// test
let Book1 = new Book('Hishams life', 'H. the First', 511, true)
Book1.Bookinfo()


// constructor for the books

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// flips between read or unread status

// Book.prototype.toggleRead = function() {
//     this.read = !this.read;
// };

// -----------------------------------------------



// -----------------------------------------------

// Initialize the array
const myLibrary = [];

// func to add books to array through .Push
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// -----------------------------------------------


// Ai helped
// -----------------------------------------------

function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <h3 class="book-title">${book.title}</h3>
            <p class="book-info"><strong>Author:</strong> ${book.author}</p>
            <p class="book-info"><strong>Pages:</strong> ${book.pages}</p>
            <p class="book-info"><strong>Status:</strong> ${book.read ? 'Read ✓' : 'Unread ✗'}</p>
            <div class="btn-group">
                <button class="toggle-btn" data-index="${index}">Toggle Status</button>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        container.appendChild(card);
    });
}
// -----------------------------------------------

// Ai helped
// -----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {


    addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 218, true);
    addBookToLibrary('1984', 'George Orwell', 328, false);
    
    displayBooks();



    const dialog = document.getElementById('book-dialog');
    
    document.getElementById('new-book-btn').addEventListener('click', () => {
        dialog.showModal();
    });

    document.getElementById('cancel-btn').addEventListener('click', () => {
        dialog.close();
    });

    document.getElementById('book-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = parseInt(document.getElementById('pages').value);
        const read = document.getElementById('read').checked;

        addBookToLibrary(title, author, pages, read);
        displayBooks();
        dialog.close();
        e.target.reset();
    });

    document.getElementById('book-container').addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        
        if (e.target.classList.contains('remove-btn')) {
            myLibrary.splice(index, 1);
            displayBooks();
        }
        
        if (e.target.classList.contains('toggle-btn')) {
            myLibrary[index].toggleRead();
            displayBooks();
        }
    });
});
// -----------------------------------------------
