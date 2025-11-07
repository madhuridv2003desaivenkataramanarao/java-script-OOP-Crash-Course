//Constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
       return `${this.title} was written by ${this.author} in ${this.year}`; 
    }
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by $ {this.author} in ${this.year}`;
};

//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;

}

// Instatiate an object
const book1 = new Book('Book One','ashwin','2025');
const book2 = new Book('Book Two','madhu','2026');

console.log(book2);
book2.revise('2027');
console.log(book2);

