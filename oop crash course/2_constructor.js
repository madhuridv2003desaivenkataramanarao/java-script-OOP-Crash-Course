//Constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
       return `${this.title} was written by ${this.author} in ${this.year}`; 
    }
}

// Instatiate an object
const book1 = new Book('Book One','ashwin','2025');
const book2 = new Book('Book Two','madhu','2026');

console.log(book2);
